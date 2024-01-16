import React from 'react'

const HalfCircle = ({ className }) => {
    return (
        <div className={`${className} absolute overflow-hidden`}>
            <img className='w-full h-full object-cover' src='https://s3-alpha-sig.figma.com/img/fb65/9187/d153c8ea619a7aafd92b7f6d3d65a9f6?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qx3QiatJHw0kprR5Nw6o7ct6C87NI~VxQ8IG8aVeDzyE82YRRKeKmkKNzL-Yt1q9H1Z~dKTTUDphzP3jEwoQ9W88SjZ4iraeHO3PUz9WrG1uc0pa6i5eRRlwtz9mZyYGsWfr-OBI~q-XTx1oJPVsAHZDr4K8JlGWHWcs6YjFNPz5I0xkakGx1xrE4g~Av7yJPXLXqIy3JEcC1rXlFFG4MwNFukCm3rDs0y9TW7ArDPVey0S8cmFhSxZTT3PAnkgBNayeWMhnb05hVqK1lX9NM3FpEJLpO3bDnjtt4ET4-7uYaJuT2PxDakIxTWzIYyU3j6UVpSaPQLgzsMXfvuh6Qw__' alt='HAlfEllipse' />
        </div>
    )
}

export default HalfCircle