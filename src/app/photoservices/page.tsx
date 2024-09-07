'use client'
import React from 'react'

const page = () => {
    return (
        <div className='w-full h-auto antialiased py-28'>
            <h1 className="text-4xl md:text-8xl text-center font-sans font-bold mb-8 text-white">
                Services
            </h1>
            <div className='w-full h-auto antialiased grid grid-cols-1 grid-rows-2 lg:grid-cols-3 md:grid-cols-2 md:grid-rows-1 gap-4 md:gap-10 justify-center p-4 md:p-10'>
                <div className='max-w-[700px] border-white border-2 rounded-xl p-5'>
                    <h2 className='text-2xl md:text-5xl font-semibold dark:text-white text-black '>Pre-Wedding</h2>
                    <p className='dark:text-white text-sm md:text-base mt-2 md:mt-5 '>Capture the essence of your love story before the big day with our Pre-Wedding Photography services. Our professional photographer brings a creative touch to each session, ensuring your unique connection shines through. Enjoy beautifully edited photos that showcase your personality and romance, all at a reasonable price. Let us help you create lasting memories before you say &quot;I do&quot;</p>
                </div>
                <div className='md:max-w-[700px]  border-white border-2 rounded-xl p-5'>
                    <h2 className='text-2xl md:text-5xl font-semibold dark:text-white text-black'>Wedding Photography</h2>
                    <p className='dark:text-white text-sm md:text-base mt-2 md:mt-5'>Celebrate your special day with stunning Wedding Photography that captures every precious moment. Our experienced photographer offers a blend of traditional and contemporary styles, ensuring your wedding day is documented beautifully and artistically. With high-quality editing and a commitment to excellent service, we provide exceptional value and a flawless portrayal of your celebration.</p>
                </div>
                <div className='md:max-w-[700px] border-white border-2 rounded-xl p-5'>
                    <h2 className='text-2xl md:text-5xl font-semibold dark:text-white text-black'>Kids Photography</h2>
                    <p className='dark:text-white text-sm md:text-base mt-2 md:mt-5'>Preserve the joy and innocence of childhood with our Kids Photography services. Our professional photographer excels in capturing the playful spirit and personality of your children, creating images that are both vibrant and memorable. Enjoy top-notch quality and creativity, all at a reasonable price, ensuring you get the best value for your precious memories.</p>
                </div>
                <div className='md:max-w-[700px] border-white border-2 rounded-xl p-5'>
                    <h2 className='text-2xl md:text-5xl font-semibold dark:text-white text-black'>Maternity Photography</h2>
                    <p className='dark:text-white text-sm md:text-base mt-2 md:mt-5 '>Celebrate the beauty of your journey with our Maternity Photography sessions. We offer a blend of elegance and creativity to highlight the joy and anticipation of expecting a new addition to your family. Our professional photographer will guide you through poses and settings that reflect your unique experience, with high-quality editing and an affordable price that makes capturing this special time easy.</p>
                </div>
                <div className='md:max-w-[700px] border-white border-2 rounded-xl p-5'>
                    <h2 className='text-2xl md:text-5xl font-semibold dark:text-white text-black'>Indoor Photography and Outdoor Photography</h2>
                    <p className='dark:text-white text-sm md:text-base mt-2 md:mt-5'>Embrace the beauty of nature with our Outdoor Photography sessions. Our expert photographer utilizes natural light and scenic settings to create breathtaking photos that highlight the essence of your occasion. From stunning landscapes to urban backdrops, we deliver high-quality, artistically edited images at a price that provides outstanding value and Transform any indoor space into a stunning backdrop with our Indoor Photography services. Whether it&apos;s for a portrait, event, or special occasion, our professional photographer uses expert techniques to make the most of your environment. Expect crisp, high-quality images and a touch of creativity, all while enjoying exceptional value and service</p>
                </div>
            </div>
        </div>
    )
}

export default page