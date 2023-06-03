import React from "react";
import dynamic from "next/dynamic";
import { ICard } from "@/models/interface";
import { formatterDouble } from "@/constants/serviceUtils";
import LineChart from "../chart/LineChart";
import Horizontal from "./Horizontal";
import CollectionList from "./CollectionList";

// Turn off rendering during SSR
const PieChart = dynamic(() => import("../chart/PieChart"), {
  ssr: false,
});

const Card = (props: ICard) => {
  const { card } = props;
  if (!card) {
    return (
      <div className="error-message">
        <p>Card is undefined</p>
      </div>
    );
  }

  const {
    title,
    buttonTitle,
    isSimple,
    isCollapse,
    total,
    isCurrency,
    isPaid,
    growth,
    isTrend,
    line,
    pie,
    horizontal,
    upcoming,
    chartId,
  } = card;

  return (
    <div
      className={`w-full  md:w-[374px] ${
        isSimple ? `h-[93px]` : `h-[312px]`
      }  bg-neutral-white rounded-lg mt-5 p-5 shadow-card`}
    >
      <div className="flex flex-col h-full space-between">
        <div className="card card-header">
          <div className="flex justify-between space-between">
            <div className={`${isSimple ? "" : "font-bold"} `}>
              <h1>{title}</h1>
            </div>
            <div className="font-bold cursor-pointer text-primary-blue ">
              <span>{isCollapse ? buttonTitle : null}</span>
            </div>
          </div>
          <div className={`flex flex-row mt-2.5 `}>
            <div
              className={`font-semibold pr-[5px]               
                ${isPaid ? "text-primary-success" : ''}
                ${isSimple ? "text-xl" : "text-2xl"}
              `}
            >
              <span>
                {isCurrency ? formatterDouble.format(Number(total)) : total}
              </span>
            </div>
            {growth !== undefined && (
              <div
                className={`text-xl translate-y-[2px] ${
                  isTrend ? "text-primary-success" : "text-primary-danger"
                }`}
              >
                <span>
                  {isTrend ? "\u2191" : "\u2193"}
                  {growth}%
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="card card-body">
          {line !== undefined && <LineChart dataset={line} id={chartId} />}
          {pie !== undefined && <PieChart dataset={pie} id={chartId} />}
          {horizontal !== undefined && (
            <Horizontal dataset={horizontal} id={chartId} />
          )}
          {upcoming !== undefined && <CollectionList dataset={upcoming} />}
        </div>
      </div>
    </div>
  );
};

export default Card;
