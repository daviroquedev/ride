import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';




export default function CardPerfil() {
    
    return (
        <Card>
            <CardContent>
                <div className='flex flex-col items-center bg-[#EEEEEE] ml-2 mt-2 py-3 px-3'>
                    <Stack direction="row" spacing={2}>

                        <Avatar
                            alt="Davi Roque"
                            src="/static/images/avatar/1.jpg"
                            sx={{ width: 156, height: 156 }}
                        />
                    </Stack>
                    <p className="font-semibold">Davi Roque</p>
                    <p className="font-semibold">Analise e desenvolvimento de sistemas</p>
                    <p className="font-semibold">016997-3</p>
                </div>
            </CardContent>
            <CardContent>
            <div className='flex flex-col items-center bg-[#EEEEEE] ml-2 mt-2 py-3 px-3'>
                <span className="text-lg font-semibold">POST RECENTES</span>
                <p>POST 1</p>
                <p>POST 1</p>
                <p>POST 1</p>
                <p>POST 1</p>
            </div>
            </CardContent>
        </Card>
    )
}
