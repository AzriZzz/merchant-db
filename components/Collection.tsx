import React, { useEffect } from 'react'
import HorizontalChart from './HorizontalChart';

const Collection = (props: any) => {
  
  return (
    <div className='h-60'>
      <ul className='flex flex-col justify-between h-full'>
        {props.data.map((item: any, index: number) => (
          // 'delay' value to set the timeout for the animation gap for each component called
          <HorizontalChart key={index} item={item} delay={index * 100}/>
        ))}
      </ul>
    </div>
  )
}

export default Collection