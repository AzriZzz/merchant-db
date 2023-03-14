import React from 'react'
import Image from "next/image";

const Loader = ({ width, height }: { width: number, height: number }) => {

  const pulse = `
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
  `;

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-white">
      <style>{pulse}</style>
      <Image
        src="/images/billplz-logo.svg"
        alt="Billplz Logo"
        className="relative transition-all duration-500 transform animate-pulse"
        width={width}
        height={height}
      />
    </div>
  );
}

export default Loader;