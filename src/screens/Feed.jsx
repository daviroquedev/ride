import React from 'react'
import CardPerfil from '../components/cardPerfil'
import CardFeed from '../components/CardFeed'
import Maps from '../components/Maps'



export default function Feed() {



  return (
    <div>

      <div className='flex justify-around '>
        <CardPerfil />
        <CardFeed/>
      </div>

    </div>
  )
}
