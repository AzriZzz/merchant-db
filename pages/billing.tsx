import Card from '@/components/components/Card'
import RefactorCard from '@/components/components/RefactorCard'
import Layout from '@/components/layout/Layout'
import { totalPayout, totalBill, totalPaid, TOP5PERFORMINGCOLLECTIONS, buttonTitle, ACTIVENONACTIVECOLLECTION, COLLECTIONPAYMENTMETHOD, TOTALCOLLECTIONS, TOTALTRANSACTIONS, TOTALPAYOUT } from '@/constants/data'
import { apiChartData, chartData2, collections2, colorCollection, colorPaymentMethod, HorizontalConfig, mockChartOne, mockChartTwo, storePerformance, storePerformance2 } from '@/constants/mock'
import { findTotalCollection, formatterDouble } from '@/constants/services'
import Head from 'next/head'
import React from 'react'


const Billing = () => {

  // Total Transaction
  const totalPayoutCard = {
    isSimple: false,
    title: TOTALPAYOUT,
    isCollapse: true,
    buttonTitle: buttonTitle[0],
    isCurrency: true,
    total: findTotalCollection(mockChartTwo),
    growth: 5.6,
    isTrend: false,
    line: mockChartTwo,
  }

  // Total Transaction
  const totalTransactionCard = {
    isSimple: false,
    title: TOTALTRANSACTIONS,
    isCollapse: true,
    buttonTitle: buttonTitle[0],
    isCurrency: false,
    total: findTotalCollection(mockChartOne),
    growth: 2.9,
    isTrend: false,
    line: mockChartOne,
  }

  // Total Collection
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
  }

  // Collections by Payment Methods
  const newPayment = chartData2.map((item, index) => {
    return {
      item: item.item,
      value: formatterDouble.format(Number(item.value)),
      color: colorPaymentMethod[index].color
    };
  });

  const collectionPaymentCard = {
    simple: false,
    title: COLLECTIONPAYMENTMETHOD,
    pie: newPayment,
    pieId: 0
  }

  // Active vs. Inactive Collection
  const newCollections = collections2.map((item, index) => {
    return {
      item: item.item,
      value: item.value,
      color: colorCollection[index].color
    };
  });

  const activeNonActiveCard = {
    simple: false,
    title: ACTIVENONACTIVECOLLECTION,
    pie: newCollections,
    pieId: 1
  }

  // Top 5 Performing Collections
  const topPerformance = storePerformance2.map((item, index) => {
    return {
      store: item.store,
      totalRevenue: item.totalRevenue,
      percentage: HorizontalConfig[index].percentage,
      width: HorizontalConfig[index].width,
    };
  });

  const performingCollectionCard = {
    simple: false,
    title: TOP5PERFORMINGCOLLECTIONS,
    horizontal: topPerformance
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
          <RefactorCard
            data={performingCollectionCard}
          />

          <RefactorCard
            data={activeNonActiveCard}
          />

          <RefactorCard
            data={collectionPaymentCard}
          />

          <RefactorCard
            data={totalCollectionCard}
          />

          <RefactorCard
            data={totalTransactionCard}
          />

          <RefactorCard
            data={totalPayoutCard}
          />
        </div>
      </Layout>
    </div>
  )
}

export default Billing