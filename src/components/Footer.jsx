"use client"
import FacebookSVG from '../assets/SocialIcons/FacebookSVG'
import InstagramSVG from '../assets/SocialIcons/InstagramSVG'
import WhatsAppSVG from '../assets/SocialIcons/WhatsAppSVG'
import React from 'react'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined'; import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import FooterLogo from '@/assets/FooterLogo'
import PurpleShadeSVG from '@/assets/Design/PurpleShadeSVG'

const Footer = () => {
    const footerlinkcss = "cursor-pointer z-10 text-[14px] font-[400] hover:scale-105 transition-transform"
    return (
        <div className='bg-[#222744] text-white relative gap-x-[80px] xl:gap-x-[100px] grid grid-cols-1 lg:grid-cols-4 pt-[100px] xl:pt-[236px] pb-[80px] overflow-hidden px-[25px] xl:px-[130px]'>
            <PurpleShadeSVG className={"right-0 z-0"} />
            <div className='flex flex-col gap-y-[32px]'>
                <FooterLogo className={"w-20 group"} />
                <p className='text-[14px] hover:scale-105 transition-transform lg:text-[16px] font-[400]'>Flow Digital is the top digital talent community and platform, here to take your business to the next level.</p>
                <div className='flex flex-row gap-x-[24px]'>
                    <div className='hover:scale-110 transition-transform'><FacebookSVG /></div>
                    <div className='hover:scale-110 transition-transform'><InstagramSVG /></div>
                    <div className='hover:scale-110 transition-transform'> <WhatsAppSVG /></div>
                </div>
                <p className={footerlinkcss + " mt-20"}>© 2023 Flow Digital</p>
            </div>
            <div className='xl:mt-0 mt-[30px]'>
                <h3 className='text-[16px] lg:text-[18px] font-[600]'>Company</h3>
                <ul className='flex flex-col mt-[24px] gap-y-[16px]'>
                    <li className={footerlinkcss}>About</li>
                    <li className={footerlinkcss}>Our Work</li>
                    <li className={footerlinkcss}>Join Us</li>
                    <li className={footerlinkcss}>Blog</li>
                    <li className={footerlinkcss}>Flow Academy</li>
                </ul>
            </div>
            <div className='xl:mt-0 mt-[30px]'>
                <h3 className='text-[16px] lg:text-[18px] font-[600]'>Services</h3>
                <ul className='flex flex-col mt-[24px] gap-y-[16px]'>
                    <li className={footerlinkcss}>Web Development</li>
                    <li className={footerlinkcss}>UI/Ux Design</li>
                    <li className={footerlinkcss}>Social Media Management</li>
                    <li className={footerlinkcss}>SEO Marketing</li>
                    <li className={footerlinkcss}>E-Commerce Development</li>
                </ul>
            </div>
            <div className='xl:mt-0 mt-[30px]'>
                <h3 className='text-[16px] lg:text-[18px] font-[600]'>Get In Touch</h3>
                <ul className='flex mt-[24px] flex-col gap-y-[16px]'>
                    <li className={`${footerlinkcss} flex flex-row gap-x-5`}><MailOutlineOutlinedIcon /> hello@flowdigital,my</li>
                    <li className={`${footerlinkcss} flex flex-row gap-x-5`}><LocalPhoneOutlinedIcon /> +60 10 8861055</li>
                    <li className={`${footerlinkcss} flex flex-row gap-x-5`}><PlaceOutlinedIcon /> 28-3 Jalan PJU 5/4, Dataran Sunway, Kota Damansara, Petaling Jaya 47810 Selangor, Malaysia.</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer