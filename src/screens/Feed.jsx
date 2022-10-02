import React from 'react'
import CardPerfil from '../components/cardPerfil'
import CardFeed2 from '../components/CardFeed2'
import Header from '../components/Header'



export default function Feed() {



  return (
    <div>
      <Header/>
      <div className='flex justify-around '>
        <CardPerfil />
        <CardFeed2  />
      </div>

    </div>
  )
}
