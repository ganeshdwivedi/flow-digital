"use client"
import RecaptchaSVG from '@/assets/RecaptchaSVG'
import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";

const ReadyToStart = () => {
    function onChange(value) {
        console.log("Captcha value:", value);
    }

    return (
        <div className='grid grid-cols-1 z-10 xl:grid-cols-2 pb-[120px] xl:gap-x-[120px] xl:px-[130px] px-[25px]'>

            <div className='lg:text-left text-center flex flex-col'>
                <h3 className='lg:text-[40px] xl:order-none order-2 font-[600] text-[24px]'>Ready to Start?<br />
                    <span className='ChooseYourCard-text-design'> Share Your Project!</span></h3>
                <p className='lg:text-[16px] xl:order-none order-3 mt-[32px] text-[14px] font-[400]'>Get a customized quote for your project as our UI/UX Design offers a range of customised services to meet your business needs.</p>
                <div className='w-[80vw] md:w-[40vw] self-center mt-[120px] xl:w-[399px] xl:mt-[96px] xl:h-[284px]'>
                    <img className='w-full h-full object-cover' src='https://s3-alpha-sig.figma.com/img/3191/90dc/0ff1a4aeca2986c27e8d10c4298ed660?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZjK0dVMfQ6OWrslHqnuOamSEndi4MJaa4QQpMqN5I8bn0ZHFnKDTMxUQWyWcL6UlPzhBaUmd7riGgjuLDbwqGyCTaE214yk23DtIjUNYN403PzBaN5CQEQxLsJ~ssyJCvb1YdkYN8OMWbX66b4mBctoR~zkLSk2MRTXphFucP-LJltJjX6FWQjoxiEtbASzQ5NVgdDQ~Jk6AJgvdifwbrmx~9qRKG2KCzZjlE9dqvUtzmBzUoGOxfS~VH8jWgYMi8X-~eXMxn7RpIcGfB25Jyi3TYrnoWQdWzN3kKW3xgtH5MJqOR-V36cRLpjnlQBBpQRic55fLrFqKQ7GmajJH2A__' alt='' />
                </div>
            </div>
            <div className='mt-[51px] xl:mt-0'>
                <form className='flex flex-col gap-y-[20px]'>
                    <div className='flex flex-col md:flex-row gap-x-[20px]'>
                        <div className='flex flex-col gap-y-[8px]'>
                            <label>Name</label>
                            <input className='w-full md:w-[278px] px-[16px] py-[15px] rounded-[10px] border' type="text" name="name" placeholder='Your Name' />
                        </div>
                        <div className='flex flex-col gap-y-[8px]'>
                            <label>Company Name</label>
                            <input className='w-full  md:w-[278px] px-[16px] py-[15px] rounded-[10px] border' type="text" name="name" placeholder='Your Company Name' />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-x-[20px]'>
                        <div className='flex flex-col gap-y-[8px]'>
                            <label>Email</label>
                            <input className='w-full md:w-[278px] px-[16px] py-[15px] rounded-[10px] border' type="text" name="name" placeholder='Your Email' />
                        </div>
                        <div className='flex flex-col gap-y-[8px]'>
                            <label>Contact Number</label>
                            <input className='w-full md:w-[278px] px-[16px] py-[15px] rounded-[10px] border' type="text" name="name" placeholder='Contact Number' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-[8px]'>
                        <label>Tell us about Your Project*</label>
                        <textarea className='w-full md:w-[580px]  resize-none h-[160px] px-[16px] py-[15px] rounded-[10px] border' placeholder='Describe your project and project goals' />
                    </div>
                    <div className='pt-[24px] z-10'>
                        <ReCAPTCHA
                            data-callback='onSubmit'
                            sitekey='6LfGTlIpAAAAAKq_wKqSjkO8O6ejOQoCoAYbmuVr'
                            onChange={onChange}
                        />
                        {/* <div className='flex flex-row items-center gap-x-5'>
                            <input type='checkbox' />
                            <p className='text-[13px] font-medium'>I'm not a robot</p>
                        </div>

                        <div className='flex items-center flex-col'>
                            <RecaptchaSVG />
                            <p className='text-[10px] text-[#4d4c4c]'>reCAPTCHA</p>
                            <p className='text-[8px] text-[#4d4c4c]'>Privacy - Terms</p>
                        </div> */}

                    </div>
                    <div className='pt-[48px] z-10 lg:pt-[56px]'>
                        <button className='bg-[#556EE6] hover:bg-white hover:border-[#556EE6] border hover:text-[#556EE6] text-white w-[180px] h-[56px] rounded-[10px] text-[16px] font-[600]'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ReadyToStart