import './App.css';
import Navbar from './components/estaticos/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/estaticos/Footer/Footer'


function App() {
  return (
    <>
      <Navbar />
        <Home/>
      <Footer />
    </>
  );
}

export default App;
