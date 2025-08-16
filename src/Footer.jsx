import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='hidden lg:block w-full h-10 shadow-top bg-white mt-5'>
        <h1 className='relative top-[10px] ml-90 text-lg font-bold'> © 2025 SELVA . All rights reserved.Designed & Developer by <span className='text-blue-500'>SELVA BHARATH .</span></h1>
      </div>
      <div className='lg:hidden block w-full h-15 shadow-top bg-white'>
        <h1 className='relative top-[10px] ml-10 text-md font-bold'> © 2025 SELVA . All rights reserved.Designed & <span className='ml-15'>Developer by <span className='text-blue-500'>SELVA BHARATH .</span></span></h1>
      </div>
    </div>
  )
}

export default Footer
