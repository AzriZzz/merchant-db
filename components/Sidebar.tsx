import classNames from 'classnames';
import React, { useEffect, useMemo, useState } from 'react';
import Image from "next/image";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { menuFooterItems, menuItems } from '@/constants/data';


const Sidebar = (props: any) => {

  const router = useRouter()
  const activeMenu = useMemo((): any => menuItems.find(menu => menu.link === router.pathname), [router.pathname])

  const wrapperclassname = classNames(
    'flex flex-col absolute z-10 bg-neutral-white lg:relative space-between justify-between h-screen pb-5 lg:bg-primary-backgroud-blue w-80 font-dark lg:translate-x-0 transition-all duration-500 ease-in-out',
    {
      '-translate-x-[400px]': !props.toggleNav,
      'translate-x-0': props.toggleNav,
    }
  )

  const getSideItemClasses = (menu: any) => {
    return classNames('flex flex-row items-center transition duration-1000 ease-in-out rounded-lg cursor-pointer hover:bg-primary-hover-blue hover:text-primary-blue',
      {
        ['text-primary-blue bg-primary-hover-blue']: activeMenu.id === menu.id
      })
  }

  return (
    // Navigation desktop & Mobile
    <div className={wrapperclassname}>
      <div className='mb-2.5'>
        <div className='hidden lg:px-4 lg:pt-4 lg:block'>
          {/* Dashboard Icon */}
          <Image
            src="/images/billplz-logo.svg"
            alt="Billplz Logo"
            className="relative"
            width={217}
            height={34}
          />
        </div>

        {/* Organization Store And Name  */}
        <div className='lg:mt-2.5 px-4 flex items-center h-[75px] border-b-[1px] border-neutral-white-smoke mb-5 lg:border-0'>
          <div className='-translate-x-1 '>
            <Image
              src="/images/icons/store.svg"
              alt="Close Icon"
              className="relative"
              width={42}
              height={42}

            />
          </div>
          <div className='p-[8px] w-full pl-0 font-bold flex flex-row justify-between'>
            <h6>
              Joy and Supply Store
            </h6>
            <button className='cursor-pointer lg:hidden' onClick={() => props.setToggleNav(!props.toggleNav)}>
              <Image
                src="/images/icons/close.svg"
                alt="Close Icon"
                className="relative"
                width={30}
                height={30}

              />
            </button>
          </div>
        </div>

        {/* Main Menu */}
        <div className='mx-4'>
          {menuItems.map(({ ...menu }) => {
            const classes = getSideItemClasses(menu);
            return (
              <Link href={menu.link} key={menu.id}>
                <div className={classes} >
                  <div className='pr-2.5 pt-[9px] pl-2 pb-2'>
                    <Image
                      src={menu.icon}
                      alt={menu.label}
                      className="relative"
                      width={18}
                      height={18}
                    />
                  </div>
                  <div className='p-[8px] pl-0'>{menu.label}</div>
                </div>
              </ Link>
            )
          })}

        </div>
      </div>
      {/* Secondary Menu */}
      <div className='pt-2.5 mx-4'>
        {menuFooterItems.map(({ ...menu }) => {
          const classes = getSideItemClasses(menu);
          return (
            <div className={classes} key={menu.id}>
              <div className='pr-2.5 pt-[9px] pl-2 pb-2 '>
                <Image
                  src={menu.icon}
                  alt={menu.label}
                  className="relative hover:fill-primary-hover-blue"
                  width={18}
                  height={18}
                />
              </div>
              <div className='p-[8px] pl-0 flex items-center'>{menu.label}</div>
            </div>
          )
        })}

      </div>
    </div >
  )
}

export default Sidebar