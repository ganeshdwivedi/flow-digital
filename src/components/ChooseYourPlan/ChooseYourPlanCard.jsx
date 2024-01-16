import BlueShadeSVG from '@/assets/Design/BlueShadeSVG'
import React from 'react'

const ChooseYourPlanCard = () => {

    const Data = [{
        type: 'Basic',
        title: 'RM 2,000',
        description: ["Basic 1-3 Pages Website", "Functional website", " Responsive design", "Content upload", "Fully Mobile Responsive page", " Landing Page."]
    }, {
        type: 'Standard',
        title: 'RM 3,000',
        description: ["Included Basic Package", "Standard 5 Pages Website", " Laravel Blogs or portfolio websites.", "Design customisation."]
    }, {
        type: 'Premium',
        title: 'RM 5,000',
        description: ["Included Standard Package", "E-commerce functionality", "10 products"]
    }, {
        type: 'Custom',
        title: 'RM 5,000',
        description: ["Included Standard Package", "E-commerce functionality", "10 products"]
    }]
    return (
        <div className='grid relative lg:place-items-center md:gap-x-[300px] overflow-x-scroll overflow-y-hidden lg:px-0 px-[50px] xl:overflow-visible scrollbar-hide xl:gap-x-[28px] grid-cols-4'>

            {
                Data.map((item) =>
                    <div className='w-[274px] z-10 ChooseYourCard relative flex flex-col border bg-white py-[48px] px-[28px] h-[491px]'>

                        <p className='text-[18px] font-medium  text-[#556EE6]'>{item.type}</p>
                        <h3 className='text-[32px] text-transparent ChooseYourCard-text-design font-[600]'>{item.title}</h3>

                        <ol className='list-disc mt-[32px] ml-[20px]'>
                            {
                                item.description.map((li, index) => <li key={index}>{li}</li>)
                            }
                        </ol>
                        <button className='bg-[#556EE6] text-white py-[10px] px-[40px] absolute bottom-[56px] rounded-[10px] text-[16px] font-[600]'>Choose Plan</button>
                    </div>)
            }
            <BlueShadeSVG className={"-top-[24rem] -left-[8rem]"} />
        </div>

    )
}

export default ChooseYourPlanCard