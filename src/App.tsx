import './App.css';
import Navbar from './components/estaticos/Navbar/Navbar'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Footer from './components/estaticos/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CadastroUsuario from './pages/CadastroUsuario/CadastroUsuario'
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
          <div style={{ minHeight: '100vh'}}>
            <Routes>
              <Route path="/" element={ <Login /> } />
              <Route path="/login" element={ <Login /> } />
              <Route path="/home" element={ <Home /> } />
              <Route path="/cadastrousuario" element={ <CadastroUsuario /> } />
              <Route path="/temas" element={< ListaTema />} />
              <Route path="/posts" element={< ListaPostagem />}/>
            </Routes>
          </div>
        <Footer />
      </BrowserRouter>
  )
}

export default App
