import React from 'react'





function CardFeed({ name, description, hastags }) {
    return (
        <div>
            
            <h1>{name}</h1>
            <h2>{description}</h2>
            <h2>{hastags}</h2>
        </div>
    )
}

export default CardFeed