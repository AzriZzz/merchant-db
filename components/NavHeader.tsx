import React, { useState } from 'react'
import Image from 'next/image';

interface Navheader {
  toggleNav: boolean
}

const NavHeader = ((props:any ) => {
  return (
    <div className='relative flex flex-row p-5 border-b z-1 border-neutral-white-smoke lg:hidden'>
      <div className='flex items-center mr-5'>
        <button onClick={() => props.setToggleNav(!props.toggleNav)}>
          <Image
            src="/images/icons/menu.svg"
            alt="Billplz Logo"
            className="relative"
            width={24}
            height={24}
          />
        </button>
      </div>
      {/* Logo Icon */}
      <div className='-translate-y-1 '>
        <Image
          src="/images/billplz-logo.svg"
          alt="Billplz Logo"
          className="relative"
          width={217}
          height={24}
        />
      </div>
    </div>
  )
});

export default NavHeader