"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, EffectCoverflow, Navigation, EffectCreative } from 'swiper/modules';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

const FeaturedP = () => {

    const Data = [{
        imgsrc: 'https://s3-alpha-sig.figma.com/img/30f3/fe0b/c61b49ef6810b7849218759a800f3b1e?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z55wjkOCWNtm04y72kJGtSfPuXPddPskDwg0lEDgR3iIZJrvkwo1PAqI9CuA3Q29j2ILuEmemss73Y7vp2WaeSY-FxqoRVMcJjqOhpBfYnuxuDH4l1M4FBhnacqwS9JLIvoYCl5-m3g6MR606UOIPe~GwzalXXM3BxUjkA-XgNeZGDDZZbRbk3mR8YxtHUX8Y4VeDV3pOK2JYpPk62eISnJijSvedZxRZMe8vTO6cmF-f~CTnWw3GLn21q-ZwyJMUrPrO4VJxDnPTYCmR2fnGOrEqoPvIAzObbfIqww6cdok2giF9Vysc5O5Yc-crw3dha8ZT~b1QTt4yKcAnUiiGg__',
    }, {
        imgsrc: 'https://s3-alpha-sig.figma.com/img/cb0d/ce25/40f1e1fb27fe4172bbe2e6d08e1df14d?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oXqU9IZpwdzDPlitrqTbendG0~LRgfr2ZvAmExqJo7dXSAakSFsL2Ai9jlfG3Qs1BzIcCKcGLDYaZAHXkyvkjzLBVYNMRHFkAQJ3F2rsQSSCMePm27grSXWeCPSgYiqMmxWAx2ojtVuKT6q1shcXVleKLWgF2fseUubgS9FnzDW804EUGylYNkurH2BAWql60OHZN8X7ON~hG9bkRWv2Reu3ugBEI4O9GEfm4ka8~x0FjoJEHmtq5O8mIXY9HioBn3jcXYIjHNTkLcPyCnGW8mjPm978bO20zACYairZYW7RdJ7bKYqM7i5nAic61lhC46mwh0MGj2m6TOWFSFp65Q__'
    }, {
        imgsrc: 'https://s3-alpha-sig.figma.com/img/50e4/fc84/2278fad9111da4057bf86f467973f57f?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gWtUteND6zsWYoi5kJe7FyYBORvGJKnIFLEDBiPj7t9WmbOMbR-Z3WCDpZmqlTVBQ4S2clDV961qVBc7ch2lPHpyhlqKkV6J-jJhacoLXuETjF62sJWQ-2X77uLf3s6KwiCGYd8RzJGeICtIDFu6b16-nCfVoMZhGtdTvUv6FaAzyySsNwJ-2DJEEJ7Iol3VnT8SqqylBLgM4zH~vTByoFsBl-ENLZOOXDbHGxRhxRep3oxGYcDbfQ5qCx1~KL181fklSMSdBdX60lUN0DYiQqC2bp2cOZhFjMflxnn5ARAVp0Q26O0eNYmJTJ-onW54Q6BPrVf80o2Ti1ekpmCIKw__'
    }, {
        imgsrc: 'https://s3-alpha-sig.figma.com/img/e069/d925/27e1fea093491e9385614638d93332fa?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eyDi~qMzgaAi5GpuOeVzZZam3j2FQt6SoFf~jPtlShnG1nANNiPAIOb6cHn7Fft9pkxGfr51lToKuZP-3xEjPIm9k8ulI-XhZWfjJpM9ZOZWowYc3nkH87C41hTV3zlI3ZqFIUN8zhI6c1wHknFi6LcoEtZx8BazuxHfBN6MKtoYL4YP1cSD4w5xP2uG0lAnABoJT5gu3SJ~3tjelyRlBCGgasoAu-JrgjF0C1QihVhLkowX1elDLC1lY5-Cslg6M9Toa-MncDYsPqkrAGuzGgc0VwmWinxLp8cPRSfKMTswgQuUXmdJE9w6-LOjc2j0VMoKw8TOf9RW3Z8TdKjepg__'
    }, {
        imgsrc: 'https://s3-alpha-sig.figma.com/img/3488/7d5f/8efb098f058418ced05ef64c65d2af9c?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PY1FmgoSPebU4GsfFsMFRQR3EOs3mQiw7~NmH-wGfq9zAAoRQfep62I2y9wZv79Z~aQTcJncsIRlNtIsrKvX8s7PIZpi1ucuR1f3F~nlYIbxZmzGFagArzMswQGlsx~YmN2rq38wTqpd3mt2qxtnTY3~ZQbKerCYp4VmVm3UbCUGb8Z9ZYitAQZypnhRMeqdSg2yIXxXtJUBxXoZSRrbqa5jKKAdC4i~hzj5ef0~gZ96vpS89-da7iIySPyzUn3-z64vUFJZtmiktYMRnrfzbkc5qSGtW~nAra-10tOKvjq33VW9EJVuzklLgz9bucjKyz0~Zzkq~ZWLerkU7fKqeA__'
    }, {
        imgsrc: 'https://s3-alpha-sig.figma.com/img/3488/7d5f/8efb098f058418ced05ef64c65d2af9c?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PY1FmgoSPebU4GsfFsMFRQR3EOs3mQiw7~NmH-wGfq9zAAoRQfep62I2y9wZv79Z~aQTcJncsIRlNtIsrKvX8s7PIZpi1ucuR1f3F~nlYIbxZmzGFagArzMswQGlsx~YmN2rq38wTqpd3mt2qxtnTY3~ZQbKerCYp4VmVm3UbCUGb8Z9ZYitAQZypnhRMeqdSg2yIXxXtJUBxXoZSRrbqa5jKKAdC4i~hzj5ef0~gZ96vpS89-da7iIySPyzUn3-z64vUFJZtmiktYMRnrfzbkc5qSGtW~nAra-10tOKvjq33VW9EJVuzklLgz9bucjKyz0~Zzkq~ZWLerkU7fKqeA__'
    }]

    const [swiperRef, setSwiperRef] = useState(null);

    const prevHandler = () => {
        swiperRef.slidePrev();
    };

    const nextHandler = () => {
        swiperRef.slideNext();
    };
    return (
        <div className='relative'>
            <h3 className='xl:px-[130px] px-[25px]  text-[24px] font-[600] lg:text-[40px] mb-[80px]'>Featured Works</h3>
            <div className='absolute top-[23rem] z-30 2xl:left-[3vw] flex-row xl:flex hidden lg:gap-x-[85vw]'>
                <div className='hover:shadow-md p-5 rounded-full cursor-pointer' onClick={prevHandler}><ArrowBackIosIcon className='text-white' /></div>
                <div className='hover:shadow-md  cursor-pointer p-5 rounded-full' onClick={nextHandler}><ArrowForwardIosIcon className='text-white' /></div>
            </div>
            <div className='absolute top-[14rem] md:top-[18rem] pl-[2vw] md:pl-[3vw] z-30 flex-row xl:hidden flex gap-x-[75vw] md:gap-x-[85vw]'>
                <div className='hover:shadow-md bg-[#222744] bg-opacity-40 p-2 rounded-full cursor-pointer' onClick={prevHandler}><KeyboardArrowLeftOutlinedIcon className='text-white' /></div>
                <div className='hover:shadow-md  cursor-pointer bg-[#222744] bg-opacity-40 p-2 rounded-full' onClick={nextHandler}><KeyboardArrowRightOutlinedIcon className='text-white' /></div>
            </div>
            <Swiper
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    500: {
                        slidesPerView: 2,
                        spaceBetween: -150,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: -280,
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
                {
                    Data.map((item) => <SwiperSlide className=' xl:px-0 px-[25px] lg:h-full lg:w-full '>
                        <div className='lg:w-[682px] relative lg:h-[512px] md:h-[350px] h-[250px] overflow-hidden'>
                            <img className='w-full h-full object-cover' src={item.imgsrc} alt='' />
                            <div className='FeaturedSliderContainer inset-0'></div>
                        </div>

                    </SwiperSlide>)
                }
                <div className='mt-[15px] px-[25px] lg:text-center lg:px-[130px]'>
                    <p className='text-[18px] lg:text-[24px] font-[600] capitalize'>Write your project title here</p>
                    <p className='text-[15px] lg:text-[16px] lg:font-medium text-[#706f6f] font-[400]'>View All Works </p>
                </div>
            </Swiper>
        </div >
    )
}

export default FeaturedP