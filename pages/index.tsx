import Head from 'next/head'
import Layout from '@/components/layout/Layout'
import { TOP5PERFORMINGCOLLECTIONS, UPCOMINGFPXPAYOUT, buttonTitle, TOTALPAYOUT, TOTALTRANSACTIONS, TOTALCOLLECTIONS, COLLECTIONPAYMENTMETHOD, ACTIVENONACTIVECOLLECTION } from '@/constants/data';
import { apiChartData, chartData, collectionsActiveNon, colorCollection, colorPaymentMethod, fpxMockData, horizontalConfig, mockChartOne, mockChartTwo, storePerformance } from '@/constants/mock';
import uuidv4, { findTotalCollection, formatterDouble } from '@/constants/serviceUtils';
import Card from '@/components/components/Card';

export default function Home() {


  // Upcoming FPX Payout
  const upcomingPayoutCard = {
    isSimple: false,
    title: UPCOMINGFPXPAYOUT,
    isCollapse: true,
    buttonTitle: buttonTitle[1],
    isCurrency: true,
    total: findTotalCollection(fpxMockData.collection),
    upcoming: fpxMockData
  }

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
    chartId: uuidv4()
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
    chartId: uuidv4()
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
    chartId: uuidv4()
  }

  // Collections by Payment Methods
  const newPayment = chartData.map((item, index) => {
    return {
      item: item.item,
      value: formatterDouble.format(Number(item.value)),
      color: colorPaymentMethod[index].color
    };
  });

  const collectionPaymentCard = {
    isSimple: false,
    title: COLLECTIONPAYMENTMETHOD,
    pie: newPayment,
    chartId: uuidv4()
  }

  // Active vs. Inactive Collection
  const newCollections = collectionsActiveNon.map((item, index) => {
    return {
      item: item.item,
      value: item.value,
      color: colorCollection[index].color
    };
  });

  const activeNonActiveCard = {
    isSimple: false,
    title: ACTIVENONACTIVECOLLECTION,
    pie: newCollections,
    chartId: uuidv4()
  }

  // Top 5 Performing Collections
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
    horizontal: topPerformance,
    chartId: uuidv4()
  }

  return (
    <div className='bg-primary-backgroud-blue'>
      <Head>
        <title>Billplz Analytics</title>
        <meta
          name="Billplz Merchant"
          content="A responsive merchant dashboard from Billplz - assestment"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout topBar="Overview Dashboard">
        <div className='flex flex-wrap gap-x-5 md:justify-center lg:justify-start'>
          <Card card={totalCollectionCard} />
          <Card card={totalTransactionCard} />
          <Card card={upcomingPayoutCard} />
          <Card card={totalPayoutCard} />
          <Card card={performingCollectionCard} />
          <Card card={activeNonActiveCard} />
          <Card card={collectionPaymentCard}/>
        </div>
      </Layout>
      {/* )} */}
    </div>
  )
}