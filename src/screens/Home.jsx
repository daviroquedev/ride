import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import HeaderLogout from '../components/HeaderLogout'
import Logo from '../components/Logo'
import Message from '../components/Message'

// import api from '../Api'
//redux
import { login, reset } from './../slices/authSlice'
export default function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const dispatch = useDispatch()

    const { loading, error } = useSelector((state) => state.auth)

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }


    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            email,
            password,
        };

        dispatch(login(user));
    };

    //clean all auth states
    useEffect(() => {
        dispatch(reset())
    }, [dispatch])

    return (
        <div>
            {/* <HeaderLogout /> */}
            <div className='flex justify-center items-center p-10  mt-30' >
                <Logo />
                <div className='flex flex-col'>
                    <form onSubmit={handleSubmit}>
                        <div className='ml-4  flex flex-col justify-center'>
                            <h3 className='text-[#08B5CE] text-4xl font-bold mb-3'> Acesse seu perfil </h3>
                            {error && <Message msg={error} type="error" />}
                            <input type="email" value={email} required onChange={(e) => { handleEmailChange(e) }} className="bg-[#08B5CE] mb-3 mt-2 w-96 h-12 font-bold p-2 text-white placeholder-[#AFD9FF] rounded-[10px]" placeholder='Digite seu email' />
                            <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} className="bg-[#08B5CE] mb-3 w-96 h-12 font-bold p-2 text-white  placeholder-[#AFD9FF] rounded-[10px]" placeholder='Digite sua senha' />
                        </div>
                        <div className='flex justify-around'>
                            <div>
                                {!loading && <input type="submit" value="Entrar" className='bg-[#08B5CE] hover:bg-[#19e0fe] font-bold w-40 h-10 text-[#FFFFFF] rounded-[10px] cursor-pointer' />}
                                {loading && <input type="submit" value="Aguarde.." disabled className='bg-[#08B5CE] hover:bg-[#19e0fe] font-bold w-40 h-10 text-[#FFFFFF] rounded-[10px] cursor-pointer' />}
                            </div>
                            <Link to='/cadastro'>
                                <input type="button" value="Cadastre-se" className='bg-[#08B5CE]  hover:bg-[#19e0fe] font-bold w-40 h-10 text-[#FFFFFF] rounded-[10px] cursor-pointer' />
                            </Link>

                        </div>
                    </form>
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
