import React, { useEffect } from 'react'
import { formatterDouble } from '@/constants/injector'

const HorizontalChart = ({ item, delay }: any) => {

  const transitionBar = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    let width = 0;
    function animateWidth() {
      if (!transitionBar.current) {
        return;
      }

      // control the animation speed
      width += 2;
      transitionBar.current.style.width = `${width}%`;
      if (width < item.width) {
        // to perform the animation as soon as possible, rather than waiting for the next repaint.
        window.requestAnimationFrame(animateWidth);
      }
    }
    setTimeout(() => animateWidth(), delay);
  }, [item.width, delay]);

  return (
    <li className='flex flex-col text-xs'>
      <span className='uppercase text-neutral-dim-grey'>{item.store}</span>
      <div className='flex flex-row items-center h-5 '>
        <div className='w-[100%] bg-neutral-grey-smoke'>
          <div
            ref={transitionBar}
            style={{
              width: `0%`,
              backgroundColor: '#3784F4'
            }}
            className={`relative z-0 text-neutral-white pl-[6px] py-[2.5px] `}>
            {formatterDouble.format(item.totalRevenue)}
            <div className='absolute bottom-0 right-0 w-[5px] h-full bg-neutral-after-blue'></div>
          </div>
        </div>
        <div className='flex justify-end w-[40px]'>
          <span className='flex justify-center font-bold'>{item.percentage}%</span>
        </div>
      </div>
    </li>
  )
}

export default HorizontalChart