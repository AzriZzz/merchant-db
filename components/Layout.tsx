import classNames from 'classnames';
import React, { useState } from 'react'
import Sidebar from './Sidebar'

const Layout = ({ children, topBar }: any) => {

  const [dropdown, setDropdown] = useState<boolean>(false);
  const [toggleMonth, setToggleMonth] = useState<boolean>(false)

  const buttonWrapper = classNames('flex w-[118px] bg-neutral transition-all duration-300 ease-in-out  bg-neutral-white border-[1px] border-neutral-white  rounded-md text-primary-dark-blue items-center hover:cursor-pointer hover:border-neutral-white-smoke', {
    'border-neutral-white-smoke': dropdown,
    '': !dropdown
  })

  const clickDropdown = (dropdown: boolean) => {

    if (!dropdown) {
      setDropdown(true)
      setToggleMonth(true)
    } else {
      setDropdown(false)
      setToggleMonth(false)
    }

  }

  return (
    <div className='flex flex-row justify-start h-screen '>
      <Sidebar />
      <div className='flex-1 p-4 pt-6 overflow-auto'>
        {/* Topbar */}
        <div className='flex flex-row justify-between space-between'>

          <div className='flex text-2xl font-bold '>
            {topBar}
          </div>

          <div className='flex items-center text-sm '>
            <div className={classNames(buttonWrapper)} onClick={() => clickDropdown(dropdown)}>
              <div className='pl-[10px] pr-[5px] py-[9px]'>

                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16 2V6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8 2V6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3 10H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div className='w-auto'>
                This Month
              </div>

            </div>
            {!toggleMonth ? '' :
              <>
                <ul className='flex flex-col cursor-default justify-evenly absolute list-none translate-y-[90px] rounded-md border-[1px] border-neutral-white-smoke shadow-3xl bg-neutral-white w-[150px] h-[127px] pl-2.5 text-primary-dark-blue'>
                  <li>Today</li>
                  <li>Last 7 Days</li>
                  <li>This Month</li>
                  <li>This Year</li>
                </ul>
              </>
            }
            <div className='text-neutral-dim-grey pl-2.5'>Compared to previous Month</div>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Layout