import Layout from '@/components/Layout'
import SubscriptionCard from '@/components/SubscriptionCard'
import { subscriptionData } from '@/constants/data'
import Head from 'next/head'
import React from 'react'

const subscription = () => {
  return (
    <div className='bg-primary-backgroud-blue'>
      <Head>
        <title>Subscription</title>
        <meta
          name="Billplz Merchant"
          content="A responsive merchant dashboard from Billplz - assestment"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout topBar="Subscription">
        <div className=' mt-4'>
          <p>Access to our rich analytics data by subscribing to your desired subscription plan.</p>
        </div>

        <div className='mt-[34px] flex flex-wrap flex-row gap-x-5 gap-y-5 justify-center lg:justify-start'>
          <SubscriptionCard info={subscriptionData.basic} />
          <SubscriptionCard info={subscriptionData.standard} />
          <SubscriptionCard info={subscriptionData.super} />
        </div>
      </Layout>
    </div>
  )
}

export default subscription