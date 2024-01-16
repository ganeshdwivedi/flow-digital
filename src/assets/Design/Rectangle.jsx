import React from 'react'

const Rectangle = ({ className }) => {
    return (
        <div className={`${className} absolute overflow-hidden`} >
            <img className='w-full h-full object-cover' src='https://s3-alpha-sig.figma.com/img/6d92/7fed/461c3d32d7c7d39c0a275e3d5209e32f?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SwiaXfRMoHFFud5~6f7-CBQm8KeVXaQw-EABd4OVD5-EebHMDG5sYbJUMvH8H2eYSPW9w2oPAC7Nx60JxCBigwtjwEAjegOddxUD8biI~KH-nJOaNwsvRzfftcwIB-r0~y9B~bsYCncUZROaNmZcd3dYiD-blptaeHLk~dq4znvrGSFzqgPNhWrVQS6dRRHd~WN~wHuLHmeBieItg96Q83RL9HD2sE~XjIwLazEVJFbTy7a0ZCxI8VYNEO6KJGnwgkioHCI6Fh4JerdA--aTgzyC8~~obhj~1RmqFSxEkW5c1Z~xgg7tpYpEQV1mnNoNFckWYaR-B-IBJ2EX9zVtig__' alt='Rectangle' /></div>
    )
}

export default Rectangle