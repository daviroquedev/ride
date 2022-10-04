import React from 'react'
import CardPerfil from '../components/cardPerfil'
import CardFeed from '../components/CardFeed'
import Header from '../components/Header'



export default function Feed() {



  return (
    <div>
      <Header/>
      <div className='flex justify-around mt-3'>
        <CardPerfil />
        <CardFeed  />
      </div>

    </div>
  )
}
