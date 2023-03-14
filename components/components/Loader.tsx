import React from 'react'
import Image from "next/image";

const Loader = ({ width, height } : any) => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-white">
      <Image
        src="/images/billplz-logo.svg"
        alt="Billplz Logo"
        className="relative animate-pulse"
        width={width}
        height={height}
      />
    </div>)
}

export default Loader