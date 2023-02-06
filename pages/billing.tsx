import Card from '@/components/Card'
import Layout from '@/components/Layout'
import { totalPayout, totalBill } from '@/constants/data'
import Head from 'next/head'
import React from 'react'

const billing = () => {
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
      <Layout topBar="Billing">
        <Card
          title={totalBill.title}
          payouts='RM25,000'
          growth='5.6'
          trend={true}
        />
      </Layout>
    </div>
  )
}

export default billing