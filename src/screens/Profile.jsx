import "./Profile.css";
import { FaBeer } from 'react-icons/fa';
import { BsFillEyeFill, BsPencilFill, BsXLg } from "react-icons/bs";
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
import { publishPhoto, resetMessage, getUserPhotos, deletePhoto, updatePhoto } from "../slices/photoSlice";

export default function Profile() {

    const { id } = useParams()

    const dispatch = useDispatch()

    const { user, loading } = useSelector((state) => state.user)
    const { user: userAuth } = useSelector((state) => state.auth)
    const { photos, loading: loadingPhoto, message: messagePhoto, error: errorPhoto } = useSelector((state) => state.photo)

    console.log("isso é photos" + photos)

    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [editId, setEditId] = useState("")
    const [editImage, setEditImage] = useState("")
    const [editTitle, setEditTitle] = useState("")

    // new form and edit form refs
    const newPhotoForm = useRef()
    const editPhotoForm = useRef()


    //load user data
    useEffect(() => {
        dispatch(getUserDetails(id));
        dispatch(getUserPhotos(id));
    }, [dispatch, id]);

    //function reset component message
    const resetComponentMessage = () => {
        setTimeout(() => {
            dispatch(resetMessage())
        }, 2000);
    }


    const handleFile = (e) => {
        //image previw
        const image = e.target.files[0]
        setImage(image);
    }


    const submitHandle = (e) => {
        e.preventDefault()

        const photoData = {
            title,
            image
        }

        //build form data
        const formData = new FormData()

        const photoFormData = Object.keys(photoData).forEach((key) => formData.append(key, photoData[key]));

        formData.append("photo", photoFormData)

        dispatch(publishPhoto(formData))

        setTitle("");

        resetComponentMessage()
    }

    //delete a photo
    const handleDelete = (id) => {
        dispatch(deletePhoto(id));
        resetComponentMessage();

    }

    //show or hide forms
    const hideOrShowForms = () => {
        newPhotoForm.current.classList.toggle("hide")
    }

    //update a photo
    const handleUpdate = (e) => {
        e.preventDefault();

        const photoData = {
            title: editTitle,
            id: editId
        }

        dispatch(updatePhoto(photoData))

        resetComponentMessage();

    };

    //open edit form
    const handleEdit = (photo) => {
        if(editPhotoForm.current.classList.contains("hide")){
            hideOrShowForms()
        }
        setEditId(photo._id);
        setEditTitle(photo.title);
        setEditImage(photo.image);
    }

    const handleCancelEdit = (e) => {
        hideOrShowForms();
    };

    

    if (loading) {
        return <p>Carregando...</p>
    }

    return (
        <div id="profile">
            <div className="profile-header">
                {user.profileImage && (<img src={`${uploads}/users/${user.profileImage}`} alt={user.name} />)}
            </div>
            <div className="profile-description">
                <h2>@{user.name}</h2>
                <p>Quem sou eu:{user.bio}</p>
            </div>
            {id === userAuth._id && (
                <>
                    <div className="new-photo" ref={newPhotoForm}>
                        <h3>Compartilhe algo com todos:</h3>
                        <form onSubmit={submitHandle}>
                            <label>
                                <span>Titulo do Post:</span>
                                <input type="text" placeholder="O que você quer compartilhar?" onChange={(e) => setTitle(e.target.value)} value={title || ""} />
                            </label>
                            <label>
                                <span>Imagem:</span>
                                <input type="file" onChange={handleFile} />
                            </label>
                            {!loadingPhoto && <input type="submit" value="Postar" />}
                            {loadingPhoto && <input type="submit" disabled value="Aguarde" />}
                        </form>
                    </div>
                    <div className="edit-photo hide" ref={editPhotoForm}>
                        <p>Editar post:</p>
                        {editImage && (
                            <img src={`${uploads}/photos/${editImage}`} alt={editTitle} />
                        )}
                        <form onSubmit={handleUpdate}>
                            <input type="text" placeholder="Insira uma nova message." onChange={(e) => setEditTitle(e.target.value)} value={editTitle || ""} />
                            <input type="submit" value="Atualizar" />
                            <button className="cancel-btn" onClick={handleCancelEdit}> Cancelar a edição</button>
                        </form>
                    </div>
                    {errorPhoto && <Message msg={errorPhoto} type="error" />}
                    {messagePhoto && <Message msg={messagePhoto} type="sucess" />}
                </>
            )}
            <div className="user-photos">
                <h2>Post publicados:</h2>
                <div className="photos-container">
                    {photos && photos.map((photo) => (
                        <div className="photo" key={photo._id}>
                            {photo.image && (<img src={`${uploads}/photos/${photo.image}`} alt={photo.title} />)}
                            {id === userAuth._id ? (<div className="actions">
                                <Link to={`/photos/${photo._id}`}>
                                    <BsFillEyeFill className="icon" fill="black" />
                                </Link>
                                <BsPencilFill className="icon"  onClick={() => handleEdit(photo)}/>
                                <BsXLg className="icon" onClick={() => handleDelete(photo._id)} />
                            </div>) : (<Link className="btn" to={`/photos/${photo._id}`}></Link>)}
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}
