import { subscriptionData } from '@/constants/data'
import React from 'react'

const SubscriptionCard = (props: any) => {
    const { info } = props;

    // Normal and Popular card behaviour
    const normalCard = 'border border-neutral-white-smoke'
    const popularCard = 'border-2 border-primary-blue';

    // Current and Subscribe Button Behaviour
    const currentButton = 'bg-neutral-white-smoke border-neutral-white-smoke border-2 text-neutral-dim-grey';
    const normalButton = 'bg-primary-blue border-primary-blue border-2 shadow-button text-neutral-white';

    console.log(info)
    return (
        <div className={`w-[300px] h-[449px] fill rounded-xl shadow-subsCard  bg-neutral-white flex flex-col justify-between  
        ${info.plan === subscriptionData.standard.plan ? popularCard : normalCard}`}
        >
            {info.plan === 'Standard' && (<div className=' bg-primary-blue text-neutral-white uppercase text-center w-full text-xs py-1'>Popular</div>)}
            <div className='px-[30px]'>
                <div className={`w-full text-center ${info.plan === 'Standard' ? `mt-[0px] ` : `mt-[62px] `} `}>
                    <h6 className='font-bold uppercase pb-[15px]'>
                        {info.plan}
                    </h6>
                    <p className=' text-primary-blue font-bold text-3xl'>RM{info.price}</p>
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

                <button className={`w-full cursor-pointer focus:pointer-events-auto font-semibold mb-5 text-sm  py-[10px] rounded-lg  ${info.plan === subscriptionData.basic.plan ? currentButton : normalButton}`}>
                    {info.plan === subscriptionData.basic.plan ? (`Current Plan`) : (`Subscribe plan`)}
                </button>
            </div>
        </div>
    )
}

export default SubscriptionCard