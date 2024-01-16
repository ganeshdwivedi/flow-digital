import FirstSVG from '@/assets/OurExpertiseSVG/FirstSVG'
import React from 'react'

const Card = () => {
    return (
        <div className='p-[25px] OurExpertiseCard bg-white shadow-md my-[35px] w-[237px] h-[219px] lg:w-[277px] lg:h-[267px]'>
            <p className='text-[16px] lg:text-[18px] pr-[90px] font-[600] text-[#556EE6]'>Information Architecture</p>
            <div className='flex flex-row items-end gap-x-5 text-[#43444D]'>
                <p className='text-[14px] lg:text-[16px] mt-[10px] lg:mt-[16px] font-[400]'>We analyze data and user behavior to create ideal wireframes for your needs.</p>
                <FirstSVG />
            </div>
        </div>
    )
}

export default Card