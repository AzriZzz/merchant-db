import { subscribeButton, subscriptionData } from '@/constants/data'
import React from 'react'
import { formatterZero } from '@/constants/injector'

const SubscriptionCard = (props: any) => {
    const { info } = props;

    // Card popularity behaviour
    const cardPopularity = info.plan !== subscriptionData.standard.plan ? 'sub-card-popular' : 'sub-card-non-popular';

    // Current and Subscribe Button Behaviour
    const buttonBehaviour = info.plan === subscriptionData.basic.plan ? 'sub-card-btn-non-active' : 'sub-card-btn-active';

    // Button text behaviour
    const buttonText = info.plan === subscriptionData.basic.plan ? subscribeButton.current : subscribeButton.subscribe;

    return (
        <div className={`w-full md:w-[300px]  trans fill rounded-xl shadow-subsCard transition-all duration-300 ease-in-out bg-neutral-white lg:hover:scale-105 lg:hover:-translate-y-2 flex flex-col justify-between ${cardPopularity} }`}
        >
            {info.plan === 'Standard' && (<div className='w-full py-1 text-xs text-center uppercase rounded-t-lg bg-primary-blue text-neutral-white'>Popular</div>)}
            <div className='px-[30px]'>
                <div className={`w-full text-center ${info.plan === 'Standard' ? `mt-[5px] ` : `mt-[62px] `} `}>
                    <h6 className='font-bold uppercase pb-[15px]'>
                        {info.plan}
                    </h6>
                    <p className='text-3xl font-bold text-primary-blue'>
                        {formatterZero.format(info.price)}
                    </p>
                    <p className=' text-primary-blue'>{info.renewal}</p>
                </div>
                <div className='text-center border-b-[1px] border-neutral-white-smoke my-[30px]'></div>
                <p className=' uppercase text-xs text-neutral-silver font-bold pb-[5px]'>Access To</p>
                <ul>
                    {info.features.map((feature: any, index: any) => (
                        <li className=' py-[5px] text-xs text-neutral-dim-grey' key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
            <div className='px-[30px]'>
                <button className={`w-full focus:pointer-events-auto font-semibold mb-5 text-sm py-[10px] rounded-lg ${buttonBehaviour} `}>
                    {buttonText}
                </button>
            </div>
        </div>
    )
}

export default SubscriptionCard