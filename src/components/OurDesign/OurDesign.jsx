"use client"
import Image from 'next/image'
import React from 'react'
import Phonemockups from '../../assets/images/Phonemockups.png'
import OurDesignAccordion from './OurDesignAccordion'

const OurDesign = () => {
    return (
        <div className='px-[30px] pt-[77px] mb-[70px] lg:-mb-16 grid grid-cols-1 md:grid-cols-2 md:gap-x-[20px] place-items-start 2xl:gap-x-[133px] lg:px-[130px]'>
            <div className='flex md:items-start items-center flex-col'>
                <h3 className='text-[24px] xl:text-[40px] font-[600] text-[#222744]'>Our Design Process</h3>
                <p className='text-[14px] lg:text-[16px] text-[#43444D] mt-[32px]'>To deliver top-tier quality, we embark on a comprehensive journey, understanding your needs and goals from both customer and business perspectives.</p>
                <div className='xl:w-[437px] md:w-[30vw] sm:w-[40vw] xs:w-[80vw] xl:h-[622px] mt-[60px] xl:mt-[106px]'>
                    <Image
                        src={Phonemockups}
                        alt="Picture of the author"
                        className='w-full h-full'
                    />
                </div>
            </div>
            <div className='Accordion w-full lg:mt-0 mt-[50px]'>
                <OurDesignAccordion />
            </div>
        </div>
    )
}

export default OurDesign
