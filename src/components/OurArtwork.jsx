"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, EffectCoverflow, Navigation, EffectCreative } from 'swiper/modules';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import Rectangle from '@/assets/Design/Rectangle';
import Cylinder from '@/assets/Design/Cylinder';
import AddCircleIcon from '@mui/icons-material/AddCircle';


const OurArtwork = () => {

    const Data = [
        { imgsrc: 'https://s3-alpha-sig.figma.com/img/4d24/0249/a9c850e5f21288b5dd454a917ce273cd?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M2E6AUUhnE9DWopywPhPCCqyQjzXnd~mmRWCxTn-3FdoCtSv27oG54a0ST7nxiJEXJtrNgiFQwoqlgU6V8BSNcvHarmwvImzNOw3ROZTJRoW7MoNB-uptZpNJP7TnPO3yHAb1cbWqOIxsMtpMhmuL6xxbPIvE~JoFFaTZ8LAAIQBytccymFdX0jm88HpRk7UEznokry~5XK~QRiy1whVLTda73GrYIkndC31xzc0RhRW82W99OowuIsV1Op9P34N7UnjOzRuGjieZPz6lc0Uvlk8VR02Om5AqFjec3OykB4s001VZVF-MiDWsodYXiGPExYvCqU6UADVrehRBVuGCg__' }, { imgsrc: 'https://s3-alpha-sig.figma.com/img/2ee6/62a8/14b12153ebdb3937c4eb88495fce118b?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SuQ4gU~XGGku9IlSSvFN7pbVb1B-0F1aq-bS2umbqWRWu1KIPeUJ7IUhF03R6bKnRKMlhUndkOMZq-2S0CWzEON7lpLtUA-7lsU696AN5uSLTPeMCQMbNrFtlOYzE3VTdOh5AkfSE3qkleR0Orxi3a7HuBS1VTTrJ-Jq3C7KmUth6CS-NbDyHrbzCD7-pcZDjrAJZvQYS7e64gxTK~1Ta6Zkj7vhDudWB25ogHBjJl12gsWcMEASVS1rNPkOQH~wyndRdD-MuhNpV78hp8hiPP9YCaomsjN6ZEriJOZTDGs1rt1x7Bd4P-D6o2-YFYYL82d2OiwngrnkFbxeWj2O4Q__' }, { imgsrc: 'https://s3-alpha-sig.figma.com/img/5772/34de/29fd6358f578dd9c9b2ae15e5136389d?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QEc1wjTKmwFTODVrMskMFga6n8cYYKiKZG9UqEGmPKRYJU4P-VqZWeFZsMquvLdNqSb2zMA9p4iv9TIfLUuaB0nnAA3R2HgKZ8QzH1QayPhyJ89b0dDUHfr4qdUC6WEirVNdoYMOgJ8F7jV0CXHeqi0VuT-kzV3FCe~6kNmC5rbTMMWho8J2gkzTTtp8Q5rCm53lxo~wYpwx-ZsXq0mtbabBHgYw2XiAm2U8V5lM6e19JULObe4RjXWaYIoHntjLDwY5OdN70qM9DrUEo5Z8yQM7JhsWRqbqEt67DEh-GPnU4Y94WrB9XhLQi7GMY5~a8tpXU2rhnfVbadVuXIWpVw__' }, { imgsrc: 'https://s3-alpha-sig.figma.com/img/cf9c/a635/ff3ee9e4ccb323cecfe38fc61b3d3df2?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QjCXb5ovv-QSvKPjlvlq6g83~7Na819Eu1M5-spEqqQDfgR-3Msg8B2ww80dD6NTTj~GkTUzt28TACqByaBgv1IISRw3M2AdYhg91Y5JiDhjIMuO2IKfjqmKaDHj~bXv5lR9fTbPfw856f4nKWl6jRO4Ln8T9ZLAPWC8S7S~3rgV8nLiq3lYLCwl0CsK4PnjFD5I8YZFaLiHXrZ3tugtENJKC3CIlL0GdGvabAdRdHCx1ZgUMpsNYfnmDwgoanTKR3KptjlTQPSOQTfIWsGHCFRzpbtaN~atOCH~riEp1aKCHOhdGcCaBYdQ2U5lxetq8KTF3BFoyaHdQ6exJfQW6g__' }
    ]


    const [swiperRef, setSwiperRef] = useState(null);

    const prevHandler = () => {
        swiperRef.slidePrev();
    };

    const nextHandler = () => {
        swiperRef.slideNext();
    };

    return (
        <div className='px-[25px] mt-[90px] relative xl:px-[130px] xl:mt-[300px]'>
            <Rectangle className={"-right-10 w-32 blur-sm -top-32"} />
            <Cylinder className={"-left-16 blur-sm w-32 -bottom-40 rotate-[30deg]"} />
            <h3 className='text-[24px] lg:text-[40px] font-[600]'>Our Artworks</h3>
            <div className='hidden 2xl:flex mt-[32px] items-center 2xl:justify-center flex-row gap-x-[20px]'>
                <div className='flex flex-col gap-y-[20px]'>
                    <div className='w-[580px] relative hover:scale-[1.02] delay-100 transition-all h-[955px] overflow-hidden'><img className='object-cover object-top w-full h-full' src='https://s3-alpha-sig.figma.com/img/4d24/0249/a9c850e5f21288b5dd454a917ce273cd?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M2E6AUUhnE9DWopywPhPCCqyQjzXnd~mmRWCxTn-3FdoCtSv27oG54a0ST7nxiJEXJtrNgiFQwoqlgU6V8BSNcvHarmwvImzNOw3ROZTJRoW7MoNB-uptZpNJP7TnPO3yHAb1cbWqOIxsMtpMhmuL6xxbPIvE~JoFFaTZ8LAAIQBytccymFdX0jm88HpRk7UEznokry~5XK~QRiy1whVLTda73GrYIkndC31xzc0RhRW82W99OowuIsV1Op9P34N7UnjOzRuGjieZPz6lc0Uvlk8VR02Om5AqFjec3OykB4s001VZVF-MiDWsodYXiGPExYvCqU6UADVrehRBVuGCg__' alt='' />
                        <div className="absolute w-full h-full inset-0 bg-black hover:opacity-40 opacity-0 transition-opacity delay-100">
                            <div className='relative top-[50%] left-[50%]  cursor-pointer '><AddCircleIcon className='text-white text-[3rem]'
                            /></div>
                        </div>


                    </div>

                    <div className='w-[580px]  hover:scale-[1.02] relative delay-100 transition-all h-[392px] overflow-hidden'>
                        <img className='w-full h-full object-cover object-top' src='https://s3-alpha-sig.figma.com/img/cf9c/a635/ff3ee9e4ccb323cecfe38fc61b3d3df2?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QjCXb5ovv-QSvKPjlvlq6g83~7Na819Eu1M5-spEqqQDfgR-3Msg8B2ww80dD6NTTj~GkTUzt28TACqByaBgv1IISRw3M2AdYhg91Y5JiDhjIMuO2IKfjqmKaDHj~bXv5lR9fTbPfw856f4nKWl6jRO4Ln8T9ZLAPWC8S7S~3rgV8nLiq3lYLCwl0CsK4PnjFD5I8YZFaLiHXrZ3tugtENJKC3CIlL0GdGvabAdRdHCx1ZgUMpsNYfnmDwgoanTKR3KptjlTQPSOQTfIWsGHCFRzpbtaN~atOCH~riEp1aKCHOhdGcCaBYdQ2U5lxetq8KTF3BFoyaHdQ6exJfQW6g__' alt='' />
                        <div className="absolute w-full h-full inset-0 bg-black hover:opacity-40 opacity-0 transition-opacity delay-100">
                            <div className='relative  top-[45%] left-[45%]  cursor-pointer '> <AddCircleIcon className='text-white text-[3rem]'
                            /></div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-y-[20px]'>
                    <div className='w-[580px] h-[392px] relative hover:scale-[1.02] delay-100 transition-all overflow-hidden'>
                        <img className='w-full h-full object-cover object-top' src='https://s3-alpha-sig.figma.com/img/2ee6/62a8/14b12153ebdb3937c4eb88495fce118b?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SuQ4gU~XGGku9IlSSvFN7pbVb1B-0F1aq-bS2umbqWRWu1KIPeUJ7IUhF03R6bKnRKMlhUndkOMZq-2S0CWzEON7lpLtUA-7lsU696AN5uSLTPeMCQMbNrFtlOYzE3VTdOh5AkfSE3qkleR0Orxi3a7HuBS1VTTrJ-Jq3C7KmUth6CS-NbDyHrbzCD7-pcZDjrAJZvQYS7e64gxTK~1Ta6Zkj7vhDudWB25ogHBjJl12gsWcMEASVS1rNPkOQH~wyndRdD-MuhNpV78hp8hiPP9YCaomsjN6ZEriJOZTDGs1rt1x7Bd4P-D6o2-YFYYL82d2OiwngrnkFbxeWj2O4Q__' alt='' />
                        <div className="absolute w-full h-full inset-0 bg-black hover:opacity-40 opacity-0 transition-opacity delay-100">
                            <div className='relative  top-[45%] left-[45%]  cursor-pointer '><AddCircleIcon className='text-white text-[3rem]'
                            /></div>
                        </div>
                    </div>
                    <div className='w-[580px] relative hover:scale-[1.02] delay-100 transition-all h-[955px] overflow-hidden'>
                        <img className='w-full  h-full object-cover object-top' src='https://s3-alpha-sig.figma.com/img/5772/34de/29fd6358f578dd9c9b2ae15e5136389d?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QEc1wjTKmwFTODVrMskMFga6n8cYYKiKZG9UqEGmPKRYJU4P-VqZWeFZsMquvLdNqSb2zMA9p4iv9TIfLUuaB0nnAA3R2HgKZ8QzH1QayPhyJ89b0dDUHfr4qdUC6WEirVNdoYMOgJ8F7jV0CXHeqi0VuT-kzV3FCe~6kNmC5rbTMMWho8J2gkzTTtp8Q5rCm53lxo~wYpwx-ZsXq0mtbabBHgYw2XiAm2U8V5lM6e19JULObe4RjXWaYIoHntjLDwY5OdN70qM9DrUEo5Z8yQM7JhsWRqbqEt67DEh-GPnU4Y94WrB9XhLQi7GMY5~a8tpXU2rhnfVbadVuXIWpVw__' alt='' />
                        <div className="absolute w-full h-full inset-0 bg-black hover:opacity-40 opacity-0 transition-opacity delay-100">
                            <div className='relative  top-[45%] left-[45%]  cursor-pointer '><AddCircleIcon className='text-white text-[3rem]'
                            /></div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='relative mt-[32px]'>
                <div className='absolute top-[8rem] md:top-[10rem] z-30 flex-row 2xl:hidden flex gap-x-[75vw] xl:-left-20 xl:gap-x-[85vw] lg:gap-x-[80vw] lg:left-[3rem] -ml-[1rem] md:ml-6 md:gap-x-[80vw]'>
                    <div className='hover:shadow-md bg-[#222744] bg-opacity-40 p-2 rounded-full cursor-pointer' onClick={prevHandler}><KeyboardArrowLeftOutlinedIcon className='text-white' /></div>
                    <div className='hover:shadow-md  cursor-pointer bg-[#222744] bg-opacity-40 p-2 rounded-full' onClick={nextHandler}><KeyboardArrowRightOutlinedIcon className='text-white' /></div>
                </div>
                <div className='2xl:hidden block'>
                    <Swiper
                        breakpoints={{
                            300: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                                centeredSlides: 'true'
                            },
                            500: {
                                slidesPerView: 2,
                                spaceBetween: -150,
                            },
                        }}
                        onSwiper={(swiper) => setSwiperRef(swiper)}
                        slidesPerView={4}
                        autoplay={true}
                        loop={true}
                        navigation={true}
                        spaceBetween={-280}
                        centeredSlides={true}
                        modules={[Autoplay, EffectCoverflow, EffectCreative, Pagination, Navigation]}
                        className="FeaturedSwipper"
                    >
                        {Data.map((item) => <SwiperSlide className=' xl:px-0  lg:h-full lg:w-full w-full'>
                            <div className='relative w-full h-[345px] md:w-auto overflow-hidden'>
                                <img className='w-full h-full object-top object-cover' src={item.imgsrc} alt='' />
                            </div>

                        </SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default OurArtwork
