import React from 'react'
import CardFeed from '../components/CardFeed'
import Header from '../components/Header'
import CardPerfil from '../components/cardPerfil'
import Andre from '../assets/andre.jpg'
import Mulher from '../assets/mulher.jpg'
import Saullo from '../assets/saullo.jpg'
import Davi from '../assets/davi.jpg'

function Feed() {

    const posts = [
        {
            id: 1,
            author: {
                id: 1,
                name: 'Davi Roque',
                username: 'daviroquedev',
                avatar: Davi,
                curso: "ADS"
            },
            title: "Procuro carona",
            date: "26/08/2022",
            description: "Preciso de carona agora para a uninassau...",
            hastags: "#carona",
            image: "image"
        },
        {
            id: 2,
            author: {
                id: 2,
                name: 'Larissa Santos',
                username: 'laridev',
                avatar: Mulher,
                curso: "enfermagem"
            },
            title: "ofereco carona",
            date: "26/08/2022",
            description: "Ofereço carona agora...",
            hastags: "#nassau",
            image: "image"
        },
        {
            id: 3,
            author: {
                id: 3,
                name: 'Andre Ba',
                username: 'andredev',
                avatar: Andre,
                curso: "ads"
            },
            title: "transito....",
            date: "26/08/2022",
            description: "Esta tudo engarrafado...",
            hastags: "#nassau",
            image: "image"
        },      
        {
            id: 4,
            author: {
                id: 4,
                name: 'Saullo',
                username: 'saullo',
                avatar: Saullo,
                curso: "ADS"
            },
            title: "Bora la..",
            date: "26/08/2022",
            description: "testetes...",
            hastags: "#jajaja",
            image: "image"
        },
      
    ]


    return (
        <div>
            <Header />
            <div className='flex justify-around mt-2'>
                <CardPerfil />
                <div className="flex flex-col ">
                {
                    posts.map((post) => (
                        <CardFeed hastags={post.hastags} name={post.author.name} description={post.description} key={post.id} avatar={post.author.avatar}/>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default Feed;