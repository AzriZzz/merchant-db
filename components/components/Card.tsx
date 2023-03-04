import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { ICard } from '@/models/interface'
import { formatterDouble } from '@/constants/serviceUtils'
import LineChart from '../chart/LineChart'
import Horizontal from './Horizontal'
import CollectionList from './CollectionList'

// Turn off rendering during SSR
const PieChart = dynamic(() => import('../chart/PieChart'), {
  ssr: false,
})

const Card = (props: ICard) => {

  const { card } = props;
  if (!card) {
    return (
      <div className="error-message">
        <p>Card is undefined</p>
      </div>
    );
  }

  return (
    <div className={`w-full md:w-[374px] ${card.isSimple ? `h-[93px]` : `h-[312px]`}  bg-neutral-white rounded-lg mt-5 p-5 shadow-card`}>
      <div className='flex flex-col h-full space-between'>
        <div className='card card-header'>
          <div className='flex justify-between space-between'>
            <div className={`${card.isSimple ? '' : 'font-bold'} `}>
              <h1>{card.title}</h1>
            </div>
            <div className='font-bold cursor-pointer text-primary-blue '>
              <span>{card.isCollapse ? card.buttonTitle : null}</span>
            </div>
          </div>
          <div className={`flex flex-row mt-2.5 `}>
            <div className={`font-semibold pr-[5px] ${ card.isCurrency && card.isPaid ? 'text-primary-success text-xl -translate-y-[5px]' :
                card.isCurrency ? 'text-2xl' : 'text-xl -translate-y-[5px]'} `}>
              <span>
                {card.isCurrency ? formatterDouble.format(Number(card.total)) : card.total}
              </span>
            </div>
            { card.growth !== undefined &&
              <div className={`text-xl translate-y-[2px] ${card.isTrend ? 'text-primary-success' : 'text-primary-danger'}`}>
                <span>{card.isTrend ? '\u2191' : '\u2193'}{card.growth}%</span>
              </div>
            }
          </div>
        </div>
        <div className='card card-body'>
          {card.line !== undefined && <LineChart dataset={card.line} id={card.chartId} />}
          {card.pie !== undefined && <PieChart dataset={card.pie} id={card.chartId} />}
          {card.horizontal !== undefined && <Horizontal dataset={card.horizontal} id={card.chartId} />}
          {card.upcoming !== undefined && <CollectionList dataset={card.upcoming} />}
        </div>
      </div>
    </div>
  )
}

export default Card  