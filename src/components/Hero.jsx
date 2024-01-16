import Curly from '@/assets/Design/Curly'
import Cylinder from '@/assets/Design/Cylinder'
import Rectangle from '@/assets/Design/Rectangle'
import React from 'react'

const Hero = () => {
    return (
        <div className='flex flex-col py-[70px] xl:flex-row items-center gap-x-[56px] justify-between lg:pt-[88px] lg:pb-[128px] px-[25px] lg:px-[130px]'>
            <div className='mt-[64px] lg:mt-0 relative'>
                <p className='text-[16px] font-[500] text-[#556EE6]'>UI/UX Design</p>
                <h3 className='font-[600] text-[32px] lg:text-[48px]'>Stunning Designs meet <span className='hero-text-design'>User-friendly Experiences</span></h3>
                <Rectangle className={"z-0 w-[80px] bottom-0 -left-28"} />
                <Curly className={"z-[1] w-20 xl:w-[200px] bottom-[-20rem] -left-[2rem] xl:-left-40 xl:top-52 -scale-x-100"} />
            </div>
            <div className='relative'>
                <Cylinder className={"z-20 w-20 bottom-[-10rem] xl:bottom-[-14rem] xl:w-32 rotate-12 right-0 xl:top-48"} />
                <p className='lg:text-[16px] text-[14px] font-[400]'>At Flow Digital, we create captivating experiences that keep your<br /> customers coming back. Our UI/UX design service helps businesses level up their digital presence with stunning, user-friendly designs.</p>

                <button className='border transition-colors w-full md:w-auto mt-[56px] hover:text-white hover:bg-[#556EE6] border-[#556EE6] text-[14px] lg:text-[16px] font-[600] rounded-[10px] px-[40px] py-[10px]'>Discuss Your Project</button>
            </div>

        </div>
    )
}

export default Hero