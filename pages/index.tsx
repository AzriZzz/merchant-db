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
        <Card title='Total Collections' collection='RM1,200.00' growth='2.6' trend={true}  />
        <Card title='Total Transactions' transaction={39} growth='2.6' trend={false}  />
        <Card title='Total Payouts' payouts='RM25,000' growth='5.6' trend={true}  />
        <Card title='Upcoming FPX Payout' fpxPayout='RM1,600.00' />
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
        </div> 
      </Layout>
    </div>
  )
}
