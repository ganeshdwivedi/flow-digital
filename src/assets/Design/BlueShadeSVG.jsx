import React from 'react'

const BlueShadeSVG = ({ className }) => {
    return (
        <div className={`${className} absolute z-0`}><svg width="1440" height="1192" viewBox="0 0 1440 1192" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_409_5398)">
                <ellipse cx="720" cy="659" rx="622" ry="409" fill="url(#paint0_radial_409_5398)" />
            </g>
            <defs>
                <filter id="filter0_f_409_5398" x="-152" y="0" width="1744" height="1318" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_409_5398" />
                </filter>
                <radialGradient id="paint0_radial_409_5398" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(720 659) rotate(90) scale(339.462 516.247)">
                    <stop stop-color="#AEE2FF" />
                    <stop offset="1" stop-color="#AEE2FF" stop-opacity="0" />
                </radialGradient>
            </defs>
        </svg>
        </div>
    )
}

export default BlueShadeSVG