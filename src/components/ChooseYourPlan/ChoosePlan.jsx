import React from 'react'
import ChooseYourPlanCard from './ChooseYourPlanCard'
import Curly from '../../assets/Design/Curly'
import DonutHalf from '../../assets/Design/donutHalf'

const ChoosePlan = () => {
    return (
        <div className='xl:px-[130px] pt-[120px] xl:pt-[240px] relative py-[50px] xl:pb-[240px]'>

            <Curly className={"w-32 top-40  "} />
            <DonutHalf className={"-bottom-10 w-[300px] -right-[13rem] rotate-[80deg] -scale-x-100"} />
            <div className='text-center px-[25px]'>
                <h3 className='text-[24px] lg:text-[40px] text-[#222744] font-[600]'>Choose Your Plan</h3>
                <p className='text-[14px] lg:text-[16px] font-[400]'>Select the Perfect Plan to Unlock the Full Potential of Our Services</p>
            </div>
            <div className='mt-[88px]'>
                <ChooseYourPlanCard />
            </div>
        </div>
    )
}

export default ChoosePlan
