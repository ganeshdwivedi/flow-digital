import React from 'react'

const NotSure = () => {
    return (
        <div className='lg:mx-[130px] md:mx-[30px] z-20 mb-0 relative md:-mb-[135px] not-sure-container justify-between items-start py-[64px] flex flex-col md:flex-row px-[25px] lg:px-[100px]'>

            <div>
                <h3 className='text-[24px] lg:text-[40px] leading-[150%] text-white font-[600]'>Not Sure What You are Looking For?</h3>
            </div>
            <div className='pt-[12px]'>
                <p className='lg:text-[16px] text-[14px] text-white'>Call us to schedule a free consultation and discuss your needs with our experts.</p>
                <button className='md:px-[40px] mt-[36px] w-full md:w-auto py-[10px] border hover:bg-white hover:text-[#556EE6] border-white rounded-[10px] text-white'>Book a Free Consultation</button></div>
        </div>
    )
}

export default NotSure