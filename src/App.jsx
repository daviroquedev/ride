import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../src/components/Header'
import Feed from '../src/screens/Feed'
import Cadastro from './screens/Cadastro'


export default function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cadastro/>} />
        <Route path="/feed" element={<Feed/>} />
      </Routes>
    </Router>
    
  // {/* <Header/> */ }
  // {/* <Feed/> */ }
  // {/* <Cadastro/> */ }
    
  )
}

