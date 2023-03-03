import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Collection from './Collection'
import { collectionLineChart, transactionChart, upcomingPayout, totalPayout, totalBill, cardState, totalPaid } from '@/constants/data'
import { CardType, ICard } from '@/models/interface'
import { findTotalCollection, formatterDouble } from '@/constants/services'
import Fpxpayout from './Fpxpayout'
import LineChart from '../chart/LineChart'
import HorizontalChart from '../chart/HorizontalChart'
import Horizontal from './Collection'
import { apiChartData } from '@/constants/mock'

// Turn off rendering during SSR
const PieChart = dynamic(() => import('../chart/PieChart'), {
  ssr: false,
})

const RefactorCard = (props: ICard) => {

  const { data } = props;
  if (!data) {
    return (
      <div className="error-message">
        <p>Data is undefined</p>
      </div>
    );
  }

  console.log(data);

  return (
    <div className={`w-full md:w-[374px] ${data.isSimple ? `h-[93px]` : `h-[312px]`}  bg-neutral-white rounded-lg mt-5 p-5 shadow-card`}>
      <div className='flex flex-col h-full space-between'>
        <div className='card card-header'>
          <div className='flex justify-between space-between'>
            <div className={`${data.isSimple ? '' : 'font-bold'} `}>
              {data.title}
            </div>
            <div className='font-bold cursor-pointer text-primary-blue '>
              {data.isCollapse ? data.buttonTitle : null}
            </div>
          </div>

          <div className={`flex flex-row mt-2.5 `}>
            <div className='text-2xl font-semibold pr-[5px]'>
              {data.isCurrency ? formatterDouble.format(Number(data.total)) :
                data.total}
            </div>

            {
              data.growth !== undefined && <div className={`text-xl translate-y-[2px] ${data.isTrend ? 'text-primary-success' : 'text-primary-danger'}`}>
              {data.isTrend ? '\u2191' : '\u2193'}{data.growth}%
            </div>
            }
          </div>

        </div>
        <div className='card card-body'>
          {data.line !== undefined && <LineChart dataset={data.line} />}
          
          {data.pie !== undefined && <PieChart dataset={data.pie} id={data.pieId} />}

          {data.horizontal !== undefined && <Horizontal dataset={data.horizontal} />}

        </div>

      </div>


    </div>
  )
}

export default RefactorCard  