import React, {useState, useEffect} from 'react';

//Estilos
import './App.css';

//Componentes
import {List, Medium, Instagram, Linkedin} from 'react-bootstrap-icons';

//Páginas
import Home from './pages/Home';
import About from './pages/About';

function App() {

  

  const [aboutVisible, setAboutVisible] = useState(false);

  useEffect(() => {
    console.log('alterou');
  }, [aboutVisible]);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
