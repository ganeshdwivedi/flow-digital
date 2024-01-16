"use client"
import React from 'react'
import { Accordion, AccordionItem } from "@nextui-org/react";
import NewsLetterBG from '../assets/Design/NewsLetterBG';

const Faq = () => {

    const Data = [
        { title: 'What is UI/UX design?', description: 'UI/UX design refers to the process of creating visually appealing user interfaces (UI) and designing seamless user experiences (UX) for digital products. It involves understanding user behavior, conducting research, and implementing design principles to create intuitive and engaging interfaces' },
        {
            title: 'Why is UI/UX design important for my business?', description: 'UI/UX design refers to the process of creating visually appealing user interfaces (UI) and designing seamless user experiences (UX) for digital products. It involves understanding user behavior, conducting research, and implementing design principles to create intuitive and engaging interfaces'
        }, {
            title: 'How long does it typically take to complete a UI/UX design project?',
            description: 'UI/UX design refers to the process of creating visually appealing user interfaces (UI) and designing seamless user experiences (UX) for digital products. It involves understanding user behavior, conducting research, and implementing design principles to create intuitive and engaging interfaces'
        }, {
            title: 'How do you ensure that the UI/UX design is user-friendly and intuitive?', description: 'UI/UX design refers to the process of creating visually appealing user interfaces (UI) and designing seamless user experiences (UX) for digital products. It involves understanding user behavior, conducting research, and implementing design principles to create intuitive and engaging interfaces'
        }, {
            title: 'How do you determine the cost of a UI/UX design project?', description: 'UI/UX design refers to the process of creating visually appealing user interfaces (UI) and designing seamless user experiences (UX) for digital products. It involves understanding user behavior, conducting research, and implementing design principles to create intuitive and engaging interfaces'
        }
    ]
    const itemClasses = {
        title: 'font-[500] text-[16px] lg:text-[18px]'
    }

    return (
        <div className='relative'>
            <NewsLetterBG className={"w-[100vw] xl:-top-[30rem] 2xl-top-[33.6rem] left-0"} />

            <div className='bg-[#222744] relative pt-[100px] lg:pt-[300px]  px-[25px] xl:px-[130px]'>
                <h3 className='text-center text-[20px] text-white lg:text-[40px] font-[600] '>FAQ</h3>
                <div>
                    <Accordion itemClasses={itemClasses} className='FAQAccordion mt-[40px]'>
                        {Data.map((item, index) =>
                            <AccordionItem className='mt-[32px]' aria-label={item.title} title={item.title}>
                                <p className='text-white font-[400] lg:text-[16px]'>{item.description}</p>
                            </AccordionItem>
                        )}
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Faq