import React from 'react'
import './App.css'

import NavAndHeroComponent from './components/navAndHeroComponent/NavAndHeroComponent'
import Aos from "aos";
import "aos/dist/aos.css";
import PropiedadesComponent from './components/propiedadesComponent/PropiedadesComponent';
import NavBar from './components/navbarComponent/navBar';

function App() {
  React.useEffect(() => {
    Aos.init({ duration: 1000 ,once: true});
  }, []);
 

  return (
    <>
    <NavBar />
    <NavAndHeroComponent />
    <PropiedadesComponent />
    
   
      
    </>
  )
}

export default App
