import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

const paymentform = () => {
  return (
    <div className='bg-primary-backgroud-blue'>
      <Head>
        <title>Payment Form</title>
        <meta
          name="Billplz Merchant"
          content="A responsive merchant dashboard from Billplz - assestment"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout topBar="Payment Form"></Layout>
    </div>
  )
}

export default paymentform