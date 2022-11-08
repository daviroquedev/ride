import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import HeaderLogout from '../components/HeaderLogout'
import Logo from '../components/Logo'
// import api from '../Api'

export default function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [tokenAuth,setTokenAuth]= useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }


    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    // const login = () => {
    //     api.post('/', {
    //         email: email,
    //         password: password
    //     })
    //         .then(function (response) {
    //             console.log(response);
    //             // setTokenAuth = response.data.token
                
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }

    // useEffect(() => {
    //     localStorage.setItem("chave",tokenAuth)
    // },[tokenAuth])
 

return (
    <div>
        <HeaderLogout />
        <div className='flex justify-center items-center p-10  mt-30' >
            <Logo />
            <div className='flex flex-col'>
                <div className='ml-4  flex flex-col justify-center'>
                    <h3 className='text-[#08B5CE] text-4xl font-bold mb-3'> Acesse seu perfil </h3>
                    <input type="email" value={email} required onChange={(e) => { handleEmailChange(e) }} className="bg-[#08B5CE] mb-3 w-96 h-12 font-bold p-2 text-white placeholder-[#AFD9FF] rounded-[10px]" placeholder='Digite seu email' />
                    <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} className="bg-[#08B5CE] mb-3 w-96 h-12 font-bold p-2 text-white  placeholder-[#AFD9FF] rounded-[10px]" placeholder='Digite sua senha' />
                </div>
                <div className='flex justify-around'>
                    <div>
                        <input type="button" value="Entrar"  className='bg-[#08B5CE] hover:bg-[#19e0fe]  font-bold w-40 h-10 text-[#FFFFFF] rounded-[10px] cursor-pointer' />
                    </div>
                    <Link to='/cadastro'>
                        <input type="button" value="Cadastre-se" className='bg-[#08B5CE]  hover:bg-[#19e0fe] font-bold w-40 h-10 text-[#FFFFFF] rounded-[10px] cursor-pointer' />
                    </Link>

                </div>
                <div className='flex justify-around mt-5'>
                    <Link to="/">
                        <h3 className='text-[#08B5CE] underline p-1 hover:text-[#19e0fe]'>Esqueci a senha</h3>
                    </Link>
                    <Link to="/">
                        <h3 className='text-[#08B5CE] underline p-1 hover:text-[#19e0fe]'>Preciso de ajuda</h3>
                    </Link>

                </div>
            </div>
        </div>
    </div>
)
}
