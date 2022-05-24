import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Servicos } from "./pages/Servicos";
import { Header } from './components/Header'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/servicos' element={<Servicos />} />
      </Routes>
  </Router>
  )
}

export default App
