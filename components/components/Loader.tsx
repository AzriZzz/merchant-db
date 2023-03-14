import React from 'react'
import Image from "next/image";

const Loader = ({ width, height }: { width: number, height: number }) => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-white">
      <Image
        src="/images/billplz-logo.svg"
        alt="Billplz Logo"
        className="relative mx-auto translate-x-8 animate-pulse"
        width={width}
        height={height}
      />
    </div>
  );
}

export default Loader;
