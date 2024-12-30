import  { useEffect } from 'react';
import './App.css'
import AOS from 'aos';
import Home from './Pages/Home/Home';


function App() {

  // AOS :--------
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);



  return (
    <>
      <Home/>
    </>
  )
}

export default App
