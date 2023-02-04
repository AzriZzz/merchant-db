import React, { useState } from 'react'
import Image from 'next/image';

interface Navheader {
  toggle: boolean
}

const NavHeader = ( props: { toggle: (arg0: boolean) => void; }) => {
  const [ active, setActive ] = useState<boolean>(false);

  const handleToggle = (active: boolean): void => {
    console.log('Handle Toggle :', active)
    setActive(active);
    props.toggle(active);
  }

  return (
    <div className='relative flex flex-row p-5 border-b z-1 border-neutral-white-smoke lg:hidden'>
      <div className='flex items-center mr-5'>
        <button>
          <Image
            src="/images/icons/menu.svg"
            alt="Billplz Logo"
            className="relative"
            width={24}
            height={24}
            onClick={() => handleToggle(!active)}
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