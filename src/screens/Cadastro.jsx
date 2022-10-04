
import React, { useState } from 'react'
import Logo from '../components/Logo'
import HeaderLogout from '../components/HeaderLogout';
import { Link } from 'react-router-dom';



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
            alert('O formulario foi enviado com  Nome :"' + name +
                '" ,matricula :"' + matricula + '" e Email :"' + email + '"');
        }
        e.preventDefault();

    }

    return (
        <div>
            <HeaderLogout />
            <div className="flex justify-center mt-35 h-full w-full">
                <header className="flex-col flex items-center justify-center w-full h-full center">
                    <form onSubmit={(e) => { handleSubmit(e) }}>
                        {/*when user submit the form , handleSubmit() 
            function will be called .*/}
                        <div className='flex justify-center items-center p-10'>
                            <Logo />
                            <div className='ml-4  flex flex-col justify-center'>
                                <h3 className='text-[#08B5CE] text-4xl font-bold mb-4'> CADASTRE-SE </h3>
                                <input type="text" value={name} required onChange={(e) => { handleChange(e) }} className="bg-[#08B5CE] w-96 h-12 mb-2 font-bold p-2 text-white placeholder-[#AFD9FF] rounded-[10px]" placeholder='Digite seu Nome' />
                                { /*when user write in name input box , handleChange()
                  function will be called. */}
                                <input type="text" value={matricula} required onChange={(e) => { handleAgeChange(e) }} className="bg-[#08B5CE] mb-2 w-96 h-12 font-bold p-2 text-white placeholder-[#AFD9FF] rounded-[10px]" placeholder='Digite sua matricula Uninassau' />
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
                                <Link className='flex justify-end m-3'>
                                    <div class="flex items-center">
                                        <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#08B5CE] bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-red-900 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label for="link-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Eu declaro que li e aceito os <Link to="/" className="text-[#08B5CE] dark:text-blue-500 hover:underline">termos e condições</Link>.</label>
                                    </div>
                                </Link>

                                <div className='flex justify-around'>
                                    <input type="submit" value="Cadastrar" className='bg-[#08B5CE] hover:bg-[#19e0fe] font-bold w-40 h-10 text-[#FFFFFF] rounded-[10px] cursor-pointer' />
                                    <Link to="/">   
                                        <input type="button" value="Voltar" className='bg-[#08B5CE] hover:bg-[#19e0fe] font-bold w-40 h-10 text-[#FFFFFF] rounded-[10px] cursor-pointer' />
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </form>
                </header>
            </div>
        </div>
    );
}