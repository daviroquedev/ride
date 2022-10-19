import React from 'react'
import CardFeedPost from '../components/CardFeedPost'
import Header from '../components/Header'


export default function FeedPost() {



  return (
    <div>
      <Header/>
      <div className='flex justify-around mt-3'>
      
        <CardFeedPost/>
      </div>

    </div>
  )
}
