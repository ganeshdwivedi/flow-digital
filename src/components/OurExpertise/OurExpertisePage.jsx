import React from 'react'
import Card from './Card'
import Image from 'next/image'
import HeroBackground from '../../assets/images/HeroBackground.png'
import HeroPictureBg from '../../assets/images/HeroPictureBg.png'
import MobileHeroBg from '../../assets/images/MobileHeroBg.png'

import Donut from '@/assets/Design/Donut'


const OurExpertisePage = () => {
    return (
        <div className="w-full relative flex flex-col items-center ourExpertise">
            <div className='w-full overflow-hidden'>
                <Image priority={false} className='w-full md:block hidden' src={HeroPictureBg} alt='ExpertiseBackground' />
                <Image className='w-full h-[700px] block md:hidden' src={MobileHeroBg} alt='ExpertiseBackground' />
            </div>
            <div className='absolute ExpertiseOkay inset-0 bg-gradient-to-b from-transparent via-[#fff] to-[white]'>
                <div className='xl:px-[450px] px-[25px] xl:pt-[200px] pt-[100px]  text-center'> <h3 className='text-[24px] lg:text-[40px] font-[600] text-white'>Our Expertise</h3>
                    <p className='text-white text-[14px] lg:text-[16px] font-medium'>Unlocking Seamless Experiences with Professional UI/UX Solutions for Your Digital Success.</p></div>
                <div className='flex overflow-x-scroll px-[50px] xl:overflow-hidden xl:justify-center scrollbar-hide flex-row gap-x-10 mt-[80px]'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>

            </div>
            <Donut className={"w-40 xl:w-[180px] -z-10 -right-20 blur-sm bottom-32"} />
        </div>
    )
}

export default OurExpertisePage