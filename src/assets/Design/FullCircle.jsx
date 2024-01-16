import React from 'react'

const FullCircle = ({ className }) => {
    return (
        <div className={`${className} absolute overflow-hidden`} >
            <img className='w-full h-full object-cover' src='https://s3-alpha-sig.figma.com/img/024d/7e66/a274148fc1041c1913362d9213b6ebf2?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Np72ForAfCFTOHcIktaJ4YHIDEx6GtTaDz79bmm1ylWu1NulDvJoQc5-cDFOYjbf3rRHyAdsMPSe8R7PQFiLT1jzIvbNJ-XmRnFZj1r2wJPwvbNdx-k-sRZtpH6CoNWQXQr0258jqBOfoXExZ12A5yNsOzhKjW9U7g9WdNMw7F8LwEbxyiixirObnW3D787huZZKyBVbv-VNEBr4xnE8UHxl20OBBPJqunRZPtF2WWUnMI2KRz4BdaE1qXDwLhbJFT1R3GvINxHai4HGGmj8zNlU62L08aKm-bTqOAzSE7TtWLuaPEOsaTiDC8V4lAx~EsdfsnmNfHp1NGvsZW3HTA__' alt='Circle' /></div>
    )
}

export default FullCircle