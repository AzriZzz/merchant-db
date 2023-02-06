import Card from '@/components/Card'
import Layout from '@/components/Layout'
import { totalPayout, totalBill, totalPaid } from '@/constants/data'
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
      <Layout classNames="flex flex-row" topBar="Billing">
        <div className='flex flex-wrap gap-x-5 md:justify-center lg:justify-start'>
          <Card
            title={totalBill.title}
            payouts='RM900.00'
            growth='10.6'
            trend={true}
          />

          <Card title={totalPaid.title} amount={totalPaid.amount} state="Simple" />
        </div>
      </Layout>
    </div>
  )
}

export default billing