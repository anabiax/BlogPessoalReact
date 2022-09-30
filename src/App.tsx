import './App.css';
import Navbar from './components/estaticos/Navbar/Navbar'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Footer from './components/estaticos/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
        <Navbar />
          <div style={{ minHeight: '100vh'}}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route />
              <Route />
            </Routes>
          </div>
        <Footer />
      </BrowserRouter>
  )
}

export default App
