import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Collection from './Horizontal'
import { CardType, ICard } from '@/models/interface'
import { formatterDouble } from '@/constants/serviceUtils'
import LineChart from '../chart/LineChart'
import Horizontal from './Horizontal'
import CollectionList from './CollectionList'

// Turn off rendering during SSR
const PieChart = dynamic(() => import('../chart/PieChart'), {
  ssr: false,
})

const Card = (props: ICard) => {

  const { data } = props;
  if (!data) {
    return (
      <div className="error-message">
        <p>Data is undefined</p>
      </div>
    );
  }

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
            <div className={`font-semibold pr-[5px] ${data.isPaid ? ' text-primary-success text-xl  -translate-y-[5px]' : 'text-2xl '} `}>
              {data.isCurrency ? formatterDouble.format(Number(data.total)) : data.total}
            </div>

            {
              data.growth !== undefined &&
              <div className={`text-xl translate-y-[2px] ${data.isTrend ? 'text-primary-success' : 'text-primary-danger'}`}>
                {data.isTrend ? '\u2191' : '\u2193'}{data.growth}%
              </div>
            }
          </div>

        </div>
        <div className='card card-body'>

          {data.upcoming !== undefined && <CollectionList dataset={data.upcoming} />}

          {data.line !== undefined && <LineChart dataset={data.line} />}

          {data.pie !== undefined && <PieChart dataset={data.pie} id={data.pieId} />}

          {data.horizontal !== undefined && <Horizontal dataset={data.horizontal} />}

        </div>

      </div>


    </div>
  )
}

export default Card  