
import React from 'react'
import CardFeed from '../components/CardFeed'
import Header from '../components/Header'
import CardPerfil from '../components/cardPerfil'


function Feed() {

    const posts = [
        {
            id: 1,
            author: {
                id: 1,
                name: 'Davi Roque',
                username: 'daviroquedev',
                avatar: 'img',
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
                avatar: 'img',
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
                name: 'Larissa Santos',
                username: 'laridev',
                avatar: 'img',
                curso: "enfermagem"
            },
            title: "Engarrafamento",
            date: "26/08/2022",
            description: "Esta tudo engarrafado...",
            hastags: "#nassau",
            image: "image"
        },
    ]


    return (
        <div>
            <Header />
            <div className='flex justify-around mt-2'>
                <CardPerfil/>
                <div className="flex flex-col ">
                {
                    posts.map((post) => (
                        <CardFeed hastags={post.hastags} name={post.author.name} description={post.description} key={post.id} />
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default Feed;