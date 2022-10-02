
import React, { useState } from 'react'
import logo from '../assets/logo.png'
import HeaderLogout from '../components/HeaderLogout';



export default function Cadastro() {

    const [name, setName] = useState('');
    const [matricula, setMatricula] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    // function to update state of name with 
    // value enter by user in form
    const handleChange = (e) => {
        setName(e.target.value);
    }
    // function to update state of matricula with value 
    // enter by user in form
    const handleAgeChange = (e) => {
        setMatricula(e.target.value);
    }
    // function to update state of email with value
    // enter by user in form
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    // function to update state of password with 
    // value enter by user in form
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    // function to update state of confirm password 
    // with value enter by user in form
    const handleConfPasswordChange = (e) => {
        setConfPassword(e.target.value);
    }
    // below function will be called when user 
    // click on submit button .
    const handleSubmit = (e) => {
        if (password != confPassword) {
            // if 'password' and 'confirm password'
            // does not match.
            alert("Senhas não são iguais!");
        }
        else {
            // display alert box with user 
            // 'name' and 'email' deatils .
            alert('A form was submitted with Name :"' + name +
                '" ,matricula :"' + matricula + '" and Email :"' + email + '"');
        }
        e.preventDefault();

    }

    return (
        <div>
            <HeaderLogout />
            <div className="flex justify-center mt-40 bg-[#EEEEEE] h-full w-full">
                <header className="flex-col flex items-center justify-center w-full h-full center">
                    <form onSubmit={(e) => { handleSubmit(e) }}>
                        {/*when user submit the form , handleSubmit() 
            function will be called .*/}
                        <div className='flex justify-center items-center p-10'>
                            <div className='mr-10'>
                                <img src={logo} className="max-w-md" />
                            </div>
                            <div className='ml-4  flex flex-col justify-center'>
                                <h3 className='text-[#08B5CE] text-4xl font-bold mb-4'> CADASTRAR </h3>
                                <input type="text" value={name} required onChange={(e) => { handleChange(e) }} className="bg-[#08B5CE] w-96 h-12 mb-2 font-bold p-2 text-white placeholder-[#AFD9FF] rounded-[10px]" placeholder='Digite seu Nome' />
                                { /*when user write in name input box , handleChange()
                  function will be called. */}
                                <input type="text" value={matricula} required onChange={(e) => { handleAgeChange(e) }} className="bg-[#08B5CE] mb-2 w-96 h-12 font-bold p-2 text-white placeholder-[#AFD9FF] rounded-[10px]" placeholder='Qual sua matricula Uninassau' />
                                { /*when user write in name input box , handleChange()
                  function will be called. */}
                                <input type="email" value={email} required onChange={(e) => { handleEmailChange(e) }} className="bg-[#08B5CE] mb-2 w-96 h-12 font-bold p-2 text-white placeholder-[#AFD9FF] rounded-[10px]" placeholder='Digite seu email' />
                                {/* when user write in email input box , handleEmailChange() 
                  function will be called.*/}
                                <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} className="bg-[#08B5CE] mb-2 w-96 h-12 font-bold p-2 text-white  placeholder-[#AFD9FF] rounded-[10px]" placeholder='Digite sua senha' />
                                {/* when user write in password input box ,
                      handlePasswordChange() function will be called.*/}

                                <input type="password" value={confPassword} required onChange={(e) => { handleConfPasswordChange(e) }} className="bg-[#08B5CE] mb-2 w-96 h-12 font-bold p-2 text-white placeholder-[#AFD9FF] rounded-[10px]" placeholder='Confirme seu senha' />
                                {/* when user write in confirm password  input box ,
                        handleConfPasswordChange() function will be called.*/}
                                <div className='flex justify-around'>
                                    <input type="submit" value="Cadastrar" className='bg-[#08B5CE] font-bold w-40 h-10 text-[#FFFFFF] rounded-[10px]' />
                                    <a href="/home">
                                        <input type="button" value="Voltar" className='bg-[#08B5CE] font-bold w-40 h-10 text-[#FFFFFF] rounded-[10px]' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </form>
                </header>
            </div>
        </div>
    );
}