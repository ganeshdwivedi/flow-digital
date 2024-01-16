import React from 'react'
import ChooseCard from './ChooseCard'
import HalfCircle from '@/assets/Design/HalfCircle'
import RectangleTwo from '@/assets/Design/RectangleTwo'
import FullCircle from '@/assets/Design/FullCircle'
import Curly from '@/assets/Design/Curly'
import MobileExpertiseAccordion from './MobileAccordion'

const WhyChooseUs = () => {
    return (
        <div className='bg-[#222744] px-[30px] py-[100px] w-full flex flex-col lg:flex-row justify-between lg:items-center xl:px-[130px] lg:py-[142px]'>
            <div className='flex flex-col gap-y-[32px] relative'>
                <RectangleTwo className={"w-[104.057px] -top-32 -left-16"} />
                <h3 className='text-[24px] lg:text-[40px] font-[600] text-white'>Why Choose Us?</h3>
                <p className='text-white lg:text-[16px] text-[14px]'>Elevate Your Digital Experience: Providing Outstanding<br />
                    UI/UX Design Services in Malaysia for Unparalleled Results.</p>
                <button className="rounded-[13px] py-[10px] xl:w-[180px] bg-[#556EE6] hover:border hover:border-[#556EE6] hover:text-[#556EE6] hover:bg-[white] transition-colors lg:py-[14px]  relative text-white font-medium">
                    Get A Quote
                </button>
            </div>
            <div className='grid grid-cols-1  lg:grid-cols-2 gap-5 relative'>
                <Curly className={"w-[138px] hidden lg:block right-32 -top-[13rem] "} />
                <HalfCircle className={"xl:-right-[12rem] -right-[20rem] -top-[23rem]   xl:-top-[12rem] w-[264px]"} />
                <FullCircle className={"-left-[7rem] hidden lg:block -bottom-[5rem] blur-sm w-[264px]"} />
                <ChooseCard /><ChooseCard /><ChooseCard /><ChooseCard />
            </div>
            <div className='lg:hidden block w-full mt-[50px]'>
                <MobileExpertiseAccordion />
            </div>
        </div>
    )
}

export default WhyChooseUs