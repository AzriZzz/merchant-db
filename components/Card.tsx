import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import LineChart from './LineChart'
import Fpxpayout from './Fpxpayout'
import Collection from './Collection'
import { collectionLineChart, transactionChart, upcomingPayout, totalPayout, totalBill, cardState, totalPaid, performingCollection } from '@/constants/data'
import { CardType } from '@/models/config'
import { formatterDouble } from '@/constants/services'

// Turn off rendering during SSR
const PieChart = dynamic(() => import('./PieChart'), {
  ssr: false,
})

function findTotalCollection(data: any) {
  return data.reduce((acc: any, item: any) => {
    return acc + parseFloat(item.collection);
  }, 0);
}

const Card = (props: CardType) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (props.apiCollections !== undefined) {
      const totalCollection = findTotalCollection(props.apiCollections);
      setTotal(totalCollection)
    }
    
    return () => {
    }
  }, [props.amount, props.apiCollections])



  return (
    <div className={`w-full md:w-[374px] ${props.state === cardState[0] ? `h-[93px]` : `h-[312px]` }  bg-neutral-white rounded-lg mt-5 p-5 shadow-card`}>

      {/* Card Header */}

      <div className='flex flex-col justify-between h-full space-between'>
        <div>
          <div className='flex justify-between space-between'>
            <div className={`${props.state === cardState[0] ? '' : 'font-bold'} `}>
              {props.title}
              {/* Add a conditional icon here */}
            </div>
            <div className='font-bold text-primary-blue'>
              {/* Conditional statement based on See Details or View All */}
              {
                props.title === collectionLineChart.title || 
                props.title === transactionChart.title || 
                props.title === totalPayout.title || 
                props.title === totalBill.title ? `View All` :
                props.title === upcomingPayout.title ? `See details` : ''
              }

            </div>
          </div>

          <div className='mt-2.5'>
            <div className='flex flex-row items-center text-2xl '>
              <div className={`pr-[5px] font-semibold ${props.state === cardState[0] ? ' text-lg text-primary-success -translate-y-2' : '' }`}>
                {
                  props.title === collectionLineChart.title ? formatterDouble.format(Number(total)) :
                  props.title === totalPaid.title ? formatterDouble.format(Number(props.amount)) :
                  props.title === transactionChart.title ? (`${props.transaction}`) :
                  props.title === upcomingPayout.title ? formatterDouble.format(Number(props.fpxPayout))  :
                  props.title === totalPayout.title || 
                  props.title === totalBill.title ? formatterDouble.format(Number(props.payouts)) : ('')
                }
              </div>
              <div>
                {
                  props.trend !== undefined && (
                    <div className={`text-xl ${props.trend ? 'text-primary-success' : 'text-primary-danger'}`}>
                      {props.trend ? '\u2191' : '\u2193'}{props.growth}%
                    </div>
                  )
                }
              </div>
            </div>


          </div>
          {/* Add secondary title here according to the type of information card display */}
        </div>

        {/* Below is the body, where we show most data, charts and other stuff */}
        <div>
          {/* Feed API data to the line chart to make it dynamic */}

          {/* Line Chart Stuff */}
          { props.transaction || props.title === collectionLineChart.title || props.payouts ? (<LineChart dataset={props.apiCollections} />) : ''}

          {/* Payout Stuff */}
          { props.fpxPayout !== undefined && (<Fpxpayout />)}

          {/* 3D Pie Chart */}
          { props.pieChart !== undefined && (<PieChart dataset={props.dataset} id={props.pieId} />)}

          {/* Performing Collection */}
          { props.performance !== undefined && (<Collection data={props.performance} />)}


        </div>
      </div>





    </div>
  )
}

export default Card  