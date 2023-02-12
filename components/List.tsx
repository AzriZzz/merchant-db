import { formatterDouble } from '@/constants/injector'
import React from 'react'

const List = ({ item, color, value, id}: any) => {

  return (
    <li key={item} className='font-semibold'>
      <div className='flex flex-row items-center'>
        <div style={{ backgroundColor: color }} className={`w-[9px] mr-[5px] h-[9px] rounded-full`}></div>
        <h6>{item}</h6>
      </div>
      <p className='font-normal ml-[14px] text-neutral-dim-grey'>
        {id === 1 ? (`${formatterDouble.format(value)}`) : value}
      </p>
    </li>
  )
}

export default List