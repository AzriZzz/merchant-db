import Head from 'next/head'
import Layout from '@/components/Layout'
import Card from '@/components/Card'
import NavHeader from '@/components/NavHeader';

const chartData = [
  { item: "Online Banking", value: 9900.10, color: "#679DEB" },
  { item: "Cards", value: 2330.20, color: "#AECFFF" },
  { item: "E-Wallet", value: 900.00, color: "#84B6FF" }
];

const collections = [
  { item: "Active Collection", value: 60, color: "#3784F4" },
  { item: "Inactive Collection", value: 40, color: "#E8E8E8" },
];

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

      {/* <NavHeader /> */}
      <Layout topBar="Overview Dashboard">
        <div className='flex flex-wrap gap-x-5 md:justify-center lg:justify-start'>
          <Card
            title='Total Collections'
            collection='RM1,200.00'
            growth='2.6'
            trend={true}
          />
          <Card
            title='Total Transactions'
            transaction={39}
            growth='2.6'
            trend={false}
          />
          <Card
            title='Upcoming FPX Payout'
            fpxPayout='RM1,600.00' />
          <Card
            title='Total Payouts'
            payouts='RM25,000'
            growth='5.6'
            trend={true}
          />
          <Card
            title='Collections by Payment Methods'
            dataset={chartData}
            pieId={1}
            displayOnly={true}
            pieChart={true}
          />
          <Card
            title='Active vs. Inactive Collections'
            dataset={collections}
            pieId={2}
            displayOnly={true}
            pieChart={true}
          />
        </div>
      </Layout>
    </div>
  )
}
