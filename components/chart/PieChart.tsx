import React, { useEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import List from '../components/List';

am4core.useTheme(am4themes_animated);

const PieChart = ( props: any) => {  
  const chartDiv = `chartDiv`+props.id ;

  useEffect(() => {
    let chart = am4core.create(chartDiv, am4charts.PieChart3D);
    chart.data = props.dataset;
    chart.innerRadius = am4core.percent(0);
    chart.width = 200;
    chart.height = 200;
    chart.align = "center";
    chart.valign = "middle";

    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "value";
    series.dataFields.category = "item";
    series.slices.template.propertyFields.fill = "color";
    series.ticks.template.disabled = true;
    series.alignLabels = false;
    series.labels.template.text = "{value.percent.formatNumber('#.0')}%";
    series.labels.template.radius = am4core.percent(-50);
    series.labels.template.fill = am4core.color("white");
    series.labels.template.fontSize = 10;
    series.depth = 10;
    series.angle = 20;

    // put outside the chart if the scale too small - radius
    series.labels.template.adapter.add("radius", function (radius, target) {
      if (target.dataItem && (target.dataItem.values.value.percent < 10)) {
        return 0;
      }
      return radius;
    });

    // put outside the chart if the scale too small - fill
    series.labels.template.adapter.add("fill", function (color, target) {
      if (target.dataItem && (target.dataItem.values.value.percent < 10)) {
        return am4core.color("#000");
      }
      return color;
    });

    return () => {
      chart.dispose();
    };
  }, [chartDiv, props.dataset]);

  return (
    <div style={{ width: "90%", height: "190px", margin: "auto", }}>
      {/* Pie Chart Render */}
      <div className='overflow-hidden ' id={'chartDiv'+props.id} style={{ width: "100%", height: "100%" }}></div>
      {/* Informatin Render */}
      <ul className='flex flex-row justify-between mt-4 text-xs'>
        {
          props.dataset?.map( ({item, color, value}: any) => (
            <List key={item} item={item} color={color} value={value} id={props.id} />
          ))
        }
      </ul>
    </div>
  );
};

export default PieChart;