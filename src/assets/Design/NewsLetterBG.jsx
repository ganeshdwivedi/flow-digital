import Image from 'next/image'
import React from 'react'
import NewsLetter from '../images/NewsLetter.png'

const NewsLetterBG = ({ className }) => {
    return (
        <div className={`${className} absolute overflow-hidden`}>
            <Image className='w-full h-full object-cover z-0' src={NewsLetter} alt='HalfDonut' />
        </div>
    )
}

export default NewsLetterBG