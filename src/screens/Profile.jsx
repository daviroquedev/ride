import "./Profile.css";

import { uploads } from "../utils/config";

//components
import Message from "../components/Message";
import { Link } from "react-router-dom";

//hooks
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

//redux
import { getUserDetails } from "../slices/userSlice";

export default function Profile() {

    const { id } = useParams()

    const dispatch = useDispatch()

    const { user, loading } = useSelector((state) => state.user)
    const { user: userAuth } = useSelector((state) => state.auth)

    // new form and edit form refs
    const newPhotoForm = useRef()
    const editPhotoForm = useRef()


    //load user data
    useEffect(() => {
        dispatch(getUserDetails(id));
    }, [dispatch, id]);

    const submitHandle = (e) => {
        e.preventDefault()
    }

    if(loading) {
        return <p>Carregando...</p>
    }

    return (
        <div id="profile">
            <div className="profile-header">
                {user.profileImage && (<img src={`${uploads}/users/${user.profileImage}`} alt={user.name} />)}
            </div>
            <div className="profile-description">
                <h2>{user.name}</h2>
                <p>{user.bio}</p>
            </div>
            {id===userAuth._id && (
                <>
                    <div className="new-photo" ref={newPhotoForm}>
                        <h3>Compartilhe algo com todos:</h3>
                        <form onSubmit={submitHandle}>
                            <label>
                                <span>Titulo do Post:</span>
                                <input type="text" placeholder="O que você quer compartilhar?" />
                            </label>
                            <label>
                                <span>Imagem:</span>
                                <input type="file" />
                            </label>
                            <input type="submit" value="Postar" />
                        </form>
                    </div>
                </>
            )}
        </div>
    )
}
