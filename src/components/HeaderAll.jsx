import { useState } from 'react';
import { useAuth } from '../hooks/useAuth'
import { useDispatch, useSelector } from 'react-redux';
import "./HeaderAll.css";
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';



//redux
import { logout, reset } from '../slices/authSlice';

export default function HeaderAll() {
    const { auth } = useAuth();
    const { user } = useSelector((state) => state.auth)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
        dispatch(reset())

        navigate("/");
    }


    return (
        <nav id="nav">
            <Link to="/"> RIDESOCIAL</Link>
            <ul id="nav-links">
                {auth ? (
                    <>
                        <li>
                            <NavLink to="/feed">
                                FEED
                            </NavLink>
                        </li>


                        {
                            user && (
                                <li>
                                    <NavLink to={`/users/${user._id}`}>
                                        ENVIAR POST
                                    </NavLink>
                                </li>
                            )
                        }
                        {
                            user && (
                                <li>
                                    <NavLink to={`/users/${user._id}`}>
                                        PROFILE
                                    </NavLink>
                                </li>
                            )
                        }
                        <li>
                            <NavLink to="/help">AJUDA</NavLink>
                        </li>
                        <li>
                            <span onClick={handleLogout}>
                                SAIR
                            </span>
                        </li>
                        <li>
                            <NavLink to="/profile">
                                <Avatar/>
                            </NavLink>
                        </li>

                    </>
                ) : (
                    <>
                        <li>
                            <NavLink to="/help">AJUDA</NavLink>
                        </li>
                    </>
                )}

            </ul>
        </nav>
    )
}
