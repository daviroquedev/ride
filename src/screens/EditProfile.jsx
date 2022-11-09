import React from 'react'
import './EditProfile.css'
import {uploads} from "./../utils/config";

//hooks
import { useEffect,useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';

//redux
import {profile,resetMessage} from './../slices/userSlice';

//components
import Message from './../components/Message';

export default function EditProfile() {
    const dispatch = useDispatch()

    const {user,message,error,loading} = useSelector((state) => state.user)

    //states
    const [name,setName] = useState("")
    const [email, setEmail] = useState("")
    const [matricula, setMatricula] = useState("")
    const [password, setPassword] = useState("")
    const [profileImage, setImageProfile] = useState("")
    const [bio, setBio] = useState("")
    const [previewImage, setPreviewImage] = useState("")

    //load user data
    useEffect(()=>{
        dispatch(profile())
    },[dispatch])

    //Fill form with user data
    useEffect(()=>{
        if(user){
            setName(user.name)
            setEmail(user.email)
            setMatricula(user.matricula)
            setBio(user.bio)
        }
    },[user])

    

    const handleSubmit = (e) => {
        e.preventDefault()
    };

    return (
        <div id="edit-profile">
            <h2>
                Edite seus dados
            </h2>
            <p className='subtitle'>Adicione uma imagem de Perfil e conte mais sobre você</p>
            {/* Preview da imagem */}
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="file" />
                </label>
                <input type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)} value={name || ""} className="bg-[#08B5CE] mb-3 mt-2  font-bold p-2 text-white placeholder-[#AFD9FF] rounded-[10px]" />
                <input type="email" placeholder="Email"  value={email || ""} disabled className="bg-[#08B5CE] mb-3 mt-2 font-bold p-2 text-white placeholder-[#AFD9FF] rounded-[10px]" />
                <input type="email" placeholder="Matricula" value={matricula || ""} disabled className="bg-[#08B5CE] mb-3 mt-2 font-bold p-2 text-white placeholder-[#AFD9FF] rounded-[10px]" />
                <label>
                    <input type="text" placeholder="Descrição do Perfil" onChange={(e) => setBio(e.target.value)} value={bio || ""} className="bg-[#08B5CE] mb-3 mt-2 font-bold p-2 text-white placeholder-[#AFD9FF] rounded-[10px]" />
                </label>
                <label>
                    <input type="password" placeholder='Digite sua nova senha' onChange={(e) => setPassword(e.target.value)} value={password || ""} className="bg-[#08B5CE] mb-3 mt-2 font-bold p-2 text-white placeholder-[#AFD9FF] rounded-[10px]" />
                </label>
                <label>
                    <input type="submit" value="Atualizar" />
                </label>
            </form>
        </div>
    )
}
