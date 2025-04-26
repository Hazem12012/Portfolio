import React from 'react'

function Hero({children}) {
    return (
        <div className='pb-20 pt-36'>
            <div className='pb-20 pt-36'>
            <p className=''>HI!I'm Hazem, a Next.js Developer </p>
            <h1 className=''>We turn ideas into interactive experiences.</h1>
            <p className="">Welcom In My Portfolio </p>
            <button className=''>see my work 😎</button>
            <div className="image_section max-w-7xl w-full h-full absolute"></div>
            </div>
            <div>{children}</div>
        </div>
    )
}



export default Hero