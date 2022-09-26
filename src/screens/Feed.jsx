import React from 'react'
import CardPerfil from '../components/cardPerfil'


export default function Feed() {
  return (
    <div>

      <div className='flex justify-around '>
        <CardPerfil />
        <div className='bg-[#090909] w-full h-auto'>
          <input type="text" className='w-80 h-80 flex flex-col'></input>
          
        </div>
      </div>

    </div>
  )
}
