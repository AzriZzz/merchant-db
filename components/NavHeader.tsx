import React from 'react'
import Image from 'next/image';

const NavHeader = () => {
  return (
    <div className='flex flex-row p-5 border-b border-neutral-white-smoke lg:hidden'>
      <div className='flex items-center mr-5'>
        <button>
          <Image
            src="/images/icons/menu.svg"
            alt="Billplz Logo"
            className="relative"
            width={24}
            height={24}
            onClick={ ()=> {console.log('click')}}
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
}

export default NavHeader