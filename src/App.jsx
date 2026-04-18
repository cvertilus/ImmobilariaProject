import React from 'react'
import './App.css'

import NavBar from './components/navbarComponent/navBar'
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  React.useEffect(() => {
    Aos.init({ duration: 1000 ,once: true});
  }, []);
 

  return (
    <>
    <NavBar />
      
    </>
  )
}

export default App
