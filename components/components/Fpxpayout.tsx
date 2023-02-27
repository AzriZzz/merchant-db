import { upcomingPayout } from '@/constants/data'
import Image from 'next/image'
import React from 'react'

const Fpxpayout = () => {
  const dashedLines = {
    marginTop: '10px',
    color: 'rgba(233, 233, 233, 1)',
    padding: '1px',
    backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='ghostwhite' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`
  }

  return (
    <div className='mt-2.5 -translate-y-7'>
      <p className='text-xs mt-2.5'>
        {upcomingPayout.statement}
      </p>
      <div className='my-2.5' style={dashedLines}></div>

      <div className='pt-2.5'>
        <h6 className='text-xs font-bold uppercase text-neutral-silver'>{upcomingPayout.bodyTitle}
        </h6>

        <ul className='text-sm '>
          <li className='flex flex-row justify-between py-1.5'>
            <div>9 September 2021</div>
            <div className='font-bold'>RM1,000.00</div>
          </li>
          <li className='flex flex-row justify-between py-1.5'>
            <div>10 September 2021</div>
            <div className='font-bold'>RM500.00</div>
          </li>
          <li className='flex flex-row justify-between py-1.5'>
            <div>11 September 2021</div>
            <div className='font-bold'>RM100.00</div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Fpxpayout