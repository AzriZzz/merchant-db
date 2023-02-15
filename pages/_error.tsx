import Layout from '@/components/Layout';
import { NextPageContext } from 'next';
import Head from 'next/head';

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
      <div className='flex flex-row items-center justify-center w-screen h-screen'>
        <p className='text-xl'>An error has occurred. {statusCode}</p>
      </div>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;