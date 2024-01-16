import React from 'react'

const Plus = ({ className }) => {
    return (
        <div className={className}><svg xmlns="http://www.w3.org/2000/svg" className='w-full h-full' viewBox="0 0 40 40" fill="none">
            <ellipse cx="20.0002" cy="19.9999" rx="16.6667" ry="16.6667" fill="white" fill-opacity="0.2" />
            <path d="M25 20L20 20M20 20L15 20M20 20L20 15M20 20L20 25" stroke="white" fillOpacity="1" stroke-width="1.5" stroke-linecap="round" />
        </svg></div>
    )
}

export default Plus