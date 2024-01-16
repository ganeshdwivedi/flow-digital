"use client"
import React from 'react'
import GpBattries from './GpBattries'
import Hspace from './Hspace'
import Kef from './Kef'
import Mdec from './Mdec'
import Mog from './Mog'
import Cuckoo from './Cuckoo'

const TrustedPart = () => {
    return (
        <div className='lg:px-[130px] lg:mb-[100px] px-[30px] py-[40px] '>
            <p className='text-center text-[18px] font-[600] text-[#222744]'>Trusted By</p>
            <div className='grid grid-flow-col-dense overflow-x-scroll md:overflow-hidden scrollbar-hide lg:gap-x-0 gap-x-8 mt-[32px] place-items-center'>
                <GpBattries />
                <Hspace />
                <Kef />
                <Mdec />
                <Mog />
                <Cuckoo />
            </div>

        </div>
    )
}

export default TrustedPart