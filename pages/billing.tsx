import Card from '@/components/components/Card'
import Layout from '@/components/layout/Layout'
import { TOP5PERFORMINGCOLLECTIONS, buttonTitle, ACTIVENONACTIVECOLLECTION, COLLECTIONPAYMENTMETHOD, TOTALCOLLECTIONS, TOTALTRANSACTIONS, TOTALPAYOUT, UPCOMINGFPXPAYOUT, TOTALPAID } from '@/constants/data'
import { apiChartData, chartData, collectionsActiveNon, colorCollection, colorPaymentMethod, fpxMockData, horizontalConfig, mockChartOne, mockChartTwo, storePerformance } from '@/constants/mock'
import uuidv4, { findTotalCollection, formatterDouble } from '@/constants/serviceUtils'
import Head from 'next/head'
import React from 'react'


const Billing = () => {


  // Total Collection Card
  const totalCollectionCard = {
    isSimple: false,
    title: TOTALCOLLECTIONS,
    isCollapse: true,
    buttonTitle: buttonTitle[0],
    isCurrency: true,
    total: findTotalCollection(apiChartData),
    growth: 2.6,
    isTrend: true,
    line: apiChartData,
    chartId: uuidv4()
  }

  // Top 5 Performing Collections Card
  const topPerformance = storePerformance.map((item, index) => {
    return {
      store: item.store,
      totalRevenue: item.totalRevenue,
      percentage: horizontalConfig[index].percentage,
      width: horizontalConfig[index].width,
    };
  });

  const performingCollectionCard = {
    isSimple: false,
    title: TOP5PERFORMINGCOLLECTIONS,
    horizontal: topPerformance
  }

  // Total Paid Card
  const totalPaidCard = {
    isSimple: true,
    title: TOTALPAID,
    isCurrency: true,
    total: 10000,
    isPaid: true
  }

  // Total Collection Card Simple
  const totalCollectionCardSimple = {
    isSimple: true,
    title: TOTALCOLLECTIONS,
    total: 10,
  }

  return (
    <div className='bg-primary-backgroud-blue'>
      <Head>
        <title>Billing</title>
        <meta
          name="Billplz Merchant"
          content="A responsive merchant dashboard from Billplz - assestment"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout classNames="flex flex-row" topBar="Billing">
        <div className='flex flex-wrap gap-x-5 md:justify-center lg:justify-start'>
          <Card
            card={totalCollectionCard}
          />
          <Card
            card={performingCollectionCard}
          />
          <div className='simple-card'>
            <Card
              card={totalPaidCard}
            />
            <Card
              card={totalCollectionCardSimple}
            />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Billing