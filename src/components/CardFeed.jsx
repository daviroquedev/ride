import React from 'react'
import Maps from './Maps'


export default function cardFeed() {
  return (
    <div className='bg-[#EEEEEE] w-full flex-col ml-2 mt-2'>
      <div className='flex items-center flex-col'>
        <span className='mt-2'>Do que você está precisando?</span>
        {/* <input type="text" className='w-[550px] h-[250px] leading-tight  px-2 py-2 border border-black mt-3 ' placeholder='Digite algo...'></input> */}
        <form>
          <textarea className='w-[700px] h-[100px]'>Some text...</textarea>
        </form>
        <div className='flex-col text-end'>
          <p className='text-sky-500 '>Max 240 caracteres</p> 
          <Maps/>
        </div>
      </div>
      <div>
        <h2 className='border-b-2 border-black justify-start '>FEED</h2>
        <p>LARISSA</p>
        <span>aaaaaaaaag</span>
      </div>
    </div>
  )
}
