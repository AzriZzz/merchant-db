import React from 'react'
import dynamic from 'next/dynamic'
import LineChart from './LineChart'
import Fpxpayout from './Fpxpayout'

// Turn off rendering during SSR
const PieChart = dynamic(() => import('./PieChart'), {
  ssr: false,
})

interface CardType {
  title: string,
  collection?: string,
  transaction?: number,
  payouts?: string,
  growth?: string,
  trend?: boolean,
  fpxPayout?: string,
  pieChart?: boolean,
  displayOnly?: boolean,
  pieId?: number,
  dataset?: {
    item: string,
    value: number,
    color: string
  }[]
}
const Card = (props: CardType) => {
  return (
    <div className=' w-full md:w-[374px] h-[312px] bg-neutral-white rounded-lg mt-5 p-5 shadow-card'>

      {/* Card Header */}

      <div className='flex flex-col justify-between h-full space-between'>
        <div>
          <div className='flex justify-between space-between'>
            <div className='font-bold'>
              {props.title}
              {/* Add a conditional icon here */}
            </div>
            <div className='font-bold text-primary-blue'>
              {/* Conditional statement based on See Details or View All */}
              {!props.displayOnly && ('View All')}

            </div>
          </div>

          <div className='mt-2.5'>
            <div className='flex flex-row items-center text-2xl '>
              <div className='pr-[5px] font-semibold'>{props.collection || props.payouts || props.transaction || props.fpxPayout}</div>
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
          {props.transaction || props.collection || props.payouts ? (<LineChart />) : ''}

          {/* Payout Stuff */}
          {props.fpxPayout !== undefined && (<Fpxpayout />)}

          {/* 3D Pie Chart */}
          {props.pieChart !== undefined && (<PieChart dataset={props.dataset} id={props.pieId} />)}

          {/* {props.fpxPayout ? (<Fpxpayout />) : ''} */}

        </div>
      </div>





    </div>
  )
}

export default Card  