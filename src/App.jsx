import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import FeedPost from './screens/FeedPost'
import Cadastro from './screens/Cadastro'
import Home from './screens/Home'
import Feed from './screens/Feed'

//hooks
import { useAuth } from './hooks/useAuth'
import HeaderAll from './components/HeaderAll'
import EditProfile from './screens/EditProfile'
import Profile from './screens/Profile'

// import api from './Api';
// import { useEffect } from 'react'


export default function App() {

  const { auth, loading } = useAuth()

  console.log(`logado? ${auth}`)


  if (loading) {
    return <p>Carregando...</p>
  }

  // useEffect(()=>{
  //   api.get('/').then(res=>{
  //     console.log(res.data);
  //   })
  // },[])



  return (
    <Router>
      <HeaderAll />
      <Routes>
        <Route path="/" element={!auth ? <Home /> : <Navigate to="/feed" />} />
        <Route path="/cadastro" element={!auth ? <Cadastro /> : <Navigate to="/feed" />}
        />
        <Route path="/sendpost" element={auth ? <FeedPost /> : <Navigate to="/" />}
        />
        <Route path="/profile" element={auth ? <EditProfile /> : <Navigate to="/" />}
        />
        <Route path="/users/:id" element={auth ? <Profile/> : <Navigate to="/" />}
        />
        <Route path="/home" element={!auth ? <Home /> : <Navigate to="/feed" />}
        />
        <Route path="/feed" element={auth ? <Feed /> : <Navigate to="/" />}
        />

      </Routes>
    </Router>

  )
}

