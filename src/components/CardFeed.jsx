import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';




function CardFeed({ name, description, hastags, avatar }) {
    return (
        <Card sx={{ width: 1500, marginBottom:1,  flexWrap:'no-wrap'}} >
            <CardContent>
                <div className='flex flex-col items-center bg-[#EEEEEE] ml-2 mt-2 py-3 px-3'>
                    <Avatar src={avatar}/>
                    <h1>{name}</h1>
                    <h2>{description}</h2>
                    <h2>{hastags}</h2>
                </div>
            </CardContent>
        </Card>

    )
}

export default CardFeed