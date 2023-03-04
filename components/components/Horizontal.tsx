import React from 'react'
import HorizontalChart from '../chart/HorizontalChart';

const Horizontal = (props: any) => {
  
  return (
    <div className='h-60'>
      <ul id={props.horizontalId} className='flex flex-col justify-between h-full'>
        {props.dataset.map((item: any, index: number) => (
          // 'delay' value to set the timeout for the animation gap for each component called
          <HorizontalChart key={index} item={item} delay={index * 100}/>
        ))}
      </ul>
    </div>
  )
}

export default Horizontal