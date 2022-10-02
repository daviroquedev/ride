import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Feed from '../src/screens/Feed'
import Cadastro from './screens/Cadastro'
import Home from './screens/Home'


export default function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/procurando_carona" element={<Feed/>} />
        <Route path="/feed" element={<Feed/>} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
    
  )
}

