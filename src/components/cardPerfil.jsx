import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


export default function cardPerfil() {
    return (
        <div className='flex flex-col items-center bg-[#EEEEEE]'> 
            <Stack direction="row" spacing={2}>
            
            <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 156, height: 156 }}
            />
        </Stack>
        <p className="font-semibold">Andre Queiroz</p>
        <p class="font-semibold">Analise e desenvolvimento de sistemas</p>
        <p class="font-semibold">016997-3</p>
        </div>
    )
}
