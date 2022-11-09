import React from 'react'
import './EditProfile.css'
import { uploads } from "./../utils/config";

//hooks
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//redux
import { profile, resetMessage, updateProfile } from './../slices/userSlice';

//components
import Message from './../components/Message';


export default function EditProfile() {
    const dispatch = useDispatch()

    const { user, message, error, loading } = useSelector((state) => state.user)

    //states
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [matricula, setMatricula] = useState("")
    const [password, setPassword] = useState("")
    const [profileImage, setImageProfile] = useState("")
    const [bio, setBio] = useState("")
    const [previewImage, setPreviewImage] = useState("")

    //load user data
    useEffect(() => {
        dispatch(profile())
    }, [dispatch])

    //Fill form with user data
    useEffect(() => {
        if (user) {
            setName(user.name)
            setEmail(user.email)
            setMatricula(user.matricula)
            setBio(user.bio)
        }
    }, [user]);



    const handleSubmit = async (e) => {
        e.preventDefault();
        //gather user data from states
        const userData = {
            name
        }

        if (profileImage) {
            userData.profileImage = profileImage
        }

        if (bio) {
            userData.bio = bio
        }

        if (password) {
            userData.password = password;
        }

        //build form data
        const formData = new FormData()
        Object.keys(userData).forEach((key) => formData.append(key, userData[key]))
        dispatch(updateProfile(formData));
        setTimeout(() => {
            dispatch(resetMessage())
        }, 2000)

    };

    const handleFile = (e) => {
        //image previw
        const image = e.target.files[0]

        setPreviewImage(image);

        //upade image state
        setImageProfile(image);
    }

    return (
        <div id="edit-profile">
            <h2>
                Edite seus dados
            </h2>
            <p className='subtitle'>Adicione uma imagem de Perfil e conte mais sobre você</p>
            {(user.profileImage || previewImage) && (
                <img src={
                    previewImage ? URL.createObjectURL(previewImage) : `${uploads}/users/${user.profileImage}`
                } alt={user.name} className="profile-image" />
            )}
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="file" onChange={handleFile} />
                </label>
                <input type="text" placeholder="Nome" required onChange={(e) => setName(e.target.value)} value={name || ""} className="bg-[#08B5CE] mb-3 mt-2  font-bold p-2 text-white placeholder-[#AFD9FF] rounded-[10px]" />
                <input type="email" placeholder="Email" value={email || ""} disabled className="bg-[#08B5CE] mb-3 mt-2 font-bold p-2 text-white placeholder-[#AFD9FF] rounded-[10px]" />
                <input type="email" placeholder="Matricula" value={matricula || ""} disabled className="bg-[#08B5CE] mb-3 mt-2 font-bold p-2 text-white placeholder-[#AFD9FF] rounded-[10px]" />
                <label>
                    <input type="text" placeholder="Descrição do Perfil" onChange={(e) => setBio(e.target.value)} value={bio || ""} className="bg-[#08B5CE] mb-3 mt-2 font-bold p-2 text-white placeholder-[#AFD9FF] rounded-[10px]" />
                </label>
                <label>
                    <input type="password" placeholder='Digite sua nova senha' onChange={(e) => setPassword(e.target.value)} value={password || ""} className="bg-[#08B5CE] mb-3 mt-2 font-bold p-2 text-white placeholder-[#AFD9FF] rounded-[10px]" />
                </label>
           
                {!loading && <input type="submit" value="Atualizar" className='bg-[#08B5CE] hover:bg-[#19e0fe] font-bold w-40 h-10 text-[#FFFFFF] rounded-[10px] cursor-pointer' />}
                {loading && <input type="submit" value="Aguarde.." disabled className='bg-[#08B5CE] hover:bg-[#19e0fe] font-bold w-40 h-10 text-[#FFFFFF] rounded-[10px] cursor-pointer' />}
                {error && <Message msg={error} type="error" />}
                {message && <Message msg={message} type="sucess" />}
            </form>
        </div>
    )
}
