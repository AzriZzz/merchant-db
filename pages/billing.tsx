import Layout from '@/components/Layout'
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
      <Layout topBar="Billing"></Layout>
    </div>
  )
}

export default billing