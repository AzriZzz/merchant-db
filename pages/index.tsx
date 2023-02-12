import { useEffect, useState } from 'react';
import Head from 'next/head'
import Layout from '@/components/Layout'
import Card from '@/components/Card'
import { collectionLineChart, transactionChart, upcomingPayout, collectionPieChart, paymentMethodsPieChart, totalPayout, chartData, collections, performingCollection, storePerformance } from '@/constants/data';
import axios from 'axios';

import Paperplane from "../public/lottie/Paperplane.json";
import Lottie from 'lottie-react-web';


export default function Home(props: any) {
  const { apiCollections } = props;

  // const [isLoading, setIsLoading] = useState(true);


  // useEffect(() => {
  //   // Check if the loading state is stored in memory
  //   const loadingState = sessionStorage.getItem('loadingState');
  //   if (loadingState) {
  //     setIsLoading(JSON.parse(loadingState));
  //   } else {
  //     // Fetch data here
  //     setTimeout(() => {
  //       setIsLoading(false);
  //       // Store the loading state in memory
  //       sessionStorage.setItem('loadingState', JSON.stringify(false));
  //     }, 3000);
  //   }
  // }, []);

  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: Paperplane,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice'
  //   }
  // };

  return (
    <div className='bg-primary-backgroud-blue'>
      <Head>
        <title>Billplz Merchant</title>
        <meta
          name="Billplz Merchant"
          content="A responsive merchant dashboard from Billplz - assestment"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <NavHeader /> */}

      {/* Add Loader */}

      {/* {isLoading ? (
        <div className='flex items-center justify-center w-screen h-screen'>
          <Lottie options={defaultOptions} height={200} width={200} />
        </div>
      ) : ( */}
      <Layout topBar="Overview Dashboard">
        <div className='flex flex-wrap gap-x-5 md:justify-center lg:justify-start'>

          {/* API Call from mockapi.io */}
          <Card
            title={collectionLineChart.title}
            apiCollections={apiCollections}
            growth='2.6'
            trend={true}
          />
          <Card
            title={transactionChart.title}
            transaction={39}
            growth='2.6'
            trend={false}
          />
          <Card
            title={totalPayout.title}
            payouts={25000}
            growth='5.6'
            trend={true}
          />
          <Card
            title={upcomingPayout.title}
            fpxPayout={1600}
          />
          <Card
            title={performingCollection.title}
            performance={storePerformance}
          />
          <Card
            title={collectionPieChart.title}
            dataset={collections}
            pieId={2}
            displayOnly={true}
            pieChart={true}
          />
          <Card
            title={paymentMethodsPieChart.title}
            dataset={chartData}
            pieId={1}
            displayOnly={true}
            pieChart={true}
          />
        </div>
      </Layout>
      {/* )} */}
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const res = await axios.get('https://63de5b049fa0d60060fd41a5.mockapi.io/merchant-blpz/collections');
  const apiCollections = res.data;

  return {
    props: {
      apiCollections,
    },
  };
}