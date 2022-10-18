import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import FeedPost from './screens/FeedPost'
import Cadastro from './screens/Cadastro'
import Home from './screens/Home'
import Feed from './screens/Feed'


export default function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/sendpost" element={<FeedPost/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/feed" element={<Feed/>}/>
      </Routes>
    </Router>
    
  )
}

