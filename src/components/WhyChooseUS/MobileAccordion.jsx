"use client"
import React from 'react'
import { Accordion, AccordionItem } from '@nextui-org/react'

const MobileExpertiseAccordion = () => {

  const itemClasses = {
    base: "py-0 w-full",
    title: "text-[#C1D3F5] text-[16px] font-[600]",
  };

  return (
    <div className='w-full'>
      <Accordion itemClasses={itemClasses} className='MobileExpertiseAccordion'>
        <AccordionItem key={1} aria-label='Expertise You Can Trust' title={'Expertise You Can Trust'}>
          <p className='text-white font-[400] text-[14px]'>Years of experience, talented designers, superior UI/UX solutions.</p>
        </AccordionItem>
        <AccordionItem key={2} aria-label='Innovation' title={'Innovation'}>
          <p className='text-white font-[400] text-[14px]'>Years of experience, talented designers, superior UI/UX solutions.</p>
        </AccordionItem>
        <AccordionItem key={3} aria-label='Stand Out' title={'Stand Out'}>
          <p className='text-white font-[400] text-[14px]'>Years of experience, talented designers, superior UI/UX solutions.</p>
        </AccordionItem>
        <AccordionItem key={4} aria-label='Client Satisfaction' title={'Client Satisfaction'}>
          <p className='text-white font-[400] text-[14px]'>Years of experience, talented designers, superior UI/UX solutions.</p>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default MobileExpertiseAccordion