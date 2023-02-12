import React, { useEffect } from 'react'
import HorizontalChart from './HorizontalChart';

const Collection = (props: any) => {
  
  return (
    <div className='h-60'>
      <ul className='flex flex-col justify-between h-full'>
        {props.data.map((item: any, index: number) => (
          <HorizontalChart key={index} item={item} delay={index * 200}/>
        ))}
      </ul>
    </div>
  )
}

export default Collection