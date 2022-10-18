
import React from 'react'
import CardFeed from '../components/CardFeed'
import Header from '../components/Header'
import CardPerfil from '../components/CardPerfil'


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
            description: "esse é a descrição",
            hastags: "#carona",
            image: "image"
        },
        {
            id: 2,
            author: {
                id: 1,
                name: 'larissa',
                username: 'laridev',
                avatar: 'img',
                curso: "enfermagem"
            },
            title: "ofereco carona",
            date: "26/08/2022",
            description: "esse é a descrooição",
            hastags: "#carona",
            image: "image"
        },
    ]


    return (
        <div>
            <Header />
            <div className='flex mt-3'>
                <CardPerfil/>
                <div className="flex flex-col m-1">
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