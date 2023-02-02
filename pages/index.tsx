import Head from 'next/head'
import Layout from '@/components/Layout'
import Card from '@/components/Card'

export default function Home() {
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
      <Layout topBar="Overview Dashboard">
        <div className='flex flex-wrap gap-5'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Layout>
    </div>
  )
}
