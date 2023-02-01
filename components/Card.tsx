import React from 'react'

const Card = () => {
  return (
    <div className='w-[374px] h-[312px] bg-neutral-white rounded-lg mt-5 p-5 shadow-card'>

      {/* Card Header */}
      <div className='flex justify-between space-between'>
        <div className='font-bold'>Total Collections</div>
        <div className='font-bold text-primary-blue'>View All</div>
      </div>

      <div className='mt-2.5 flex flex-row flex- items-center text-2xl '>
        <div className='pr-[5px] font-semibold'>RM1,200.00</div>
        <div className='text-xl text-primary-success'>&#8593; 2.6%</div>
      </div>

    </div>
  )
}

export default Card  