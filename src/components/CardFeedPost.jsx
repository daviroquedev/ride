import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Maps from './Maps'


export default function CardFeedPost() {
    return (
        <Card sx={{ width: 1500 }}>
            <CardContent>
                <div className='bg-[#EEEEEE] w-full flex-col ml-2 mt-2 pb-5'>
                    <div className='flex items-center flex-col'>
                        <span className='mt-2 mb-2 text-xl'>Do que você está precisando?</span>
                        {/* <input type="text" className='w-[550px] h-[250px] leading-tight  px-2 py-2 border border-black mt-3 ' placeholder='Digite algo...'></input> */}
                        <form>
                            <textarea className='w-[700px] h-[100px]'>Preciso de carona para Uninassau...</textarea>
                        </form>
                        <div className='flex-col text-end'>
                            <p className='text-sky-500 '>Max 240 caracteres</p>
                            <Maps />
                        </div>
                        <div className='mt-4'>
                            <button className="bg-[#08B5CE] hover:bg-[#19e0fe] text-white font-bold py-2 px-4 rounded">
                                Pedir Carona
                            </button>
                        </div>
                    </div>
                </div>
            </CardContent>

        </Card>
    );
}