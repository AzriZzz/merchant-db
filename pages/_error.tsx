import Layout from '@/components/layout/Layout';
import { NextPageContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const ErrorPage = ({ statusCode }: { statusCode: number }) => {
  return (

    <div className='bg-primary-backgroud-blue'>
      <Head>
        <title>Error</title>
        <meta
          name="Billplz Merchant"
          content="A responsive merchant dashboard from Billplz - assestment"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-col items-center justify-center w-screen h-screen'>
        <p className='text-xl'>An error has occurred. {statusCode}</p>
        <br />
        <button className='p-3 transition-all duration-300 ease-out rounded-xl bg-primary-blue text-neutral-white hover:-translate-y-2'>
          <Link href="/" >
            Home
          </ Link>
        </button>
      </div>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;