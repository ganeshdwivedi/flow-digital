import React from 'react'

const PurpleShadeSVG = ({ className }) => {
    return (
        <div className={`${className} absolute`}><svg width="712" height="1341" viewBox="0 0 712 1341" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_409_5301)">
                <ellipse cx="882.5" cy="838" rx="682.5" ry="733" fill="url(#paint0_radial_409_5301)" />
            </g>
            <defs>
                <filter id="filter0_f_409_5301" x="0" y="-95" width="1765" height="1866" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_409_5301" />
                </filter>
                <radialGradient id="paint0_radial_409_5301" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(859.329 838) rotate(-32.3178) scale(476.357 492.15)">
                    <stop stop-color="#393C89" />
                    <stop offset="1" stop-color="#393C89" stop-opacity="0" />
                </radialGradient>
            </defs>
        </svg>
        </div>
    )
}

export default PurpleShadeSVG