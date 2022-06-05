import {Outlet, Link} from 'react-router-dom';
import {useEffect, useState} from 'react';

//Componentes
import {List, Instagram, Linkedin, Medium, X} from 'react-bootstrap-icons';


const Home = () => {
  const {pathname} = window.location;
  const [headerTop, setHeaderTop] = useState('');

  useEffect(() => {
    if(pathname !== "/"){
      setHeaderTop('header-top');
    }
  }, []);

  const handleClick = (event) => {
    const idElement = event.target.id;
    if(idElement !== 'to-home'){
      setHeaderTop('header-top');
    }else{
      setHeaderTop('');
    }
    document.querySelectorAll(".nav-link").forEach(item => {
      item.classList.remove('active');
    });
    event.target.classList.add('active');    
  }

  const handleToggleNavbar = (e) => {
    document.getElementById("navbar").classList.toggle('navbar-mobile');
    document.getElementsByClassName('menu-close-navbar-mobile')[0].classList.toggle('d-none');
    document.getElementsByClassName('menu-list-navbar-mobile')[0].classList.toggle('d-none');
  }

  return (
    <>
      <header id="header" className={headerTop}>
        <div className="container">
          <h1><a href="http://">Tiago Sabadini</a></h1>
          <h2>Construindo <span>projetos notáveis</span> com tecnologia e pessoas incríveis.</h2>
        
          <nav id="navbar" className="navbar">
            <ul>
              <li><Link id="to-home" to="/" onClick={(e) => handleClick(e)} className="nav-link">Home</Link></li>
              <li><Link id="to-about" to="/about" onClick={(e) => handleClick(e)} className="nav-link">About</Link></li>
              <li><Link id="to-portfolio" to="/portfolio" onClick={(e) => handleClick(e)} className="nav-link">Portfolio</Link></li>
              <li><Link id="to-contact" to="/contact" onClick={(e) => handleClick(e)} className="nav-link">Contact</Link></li>
            </ul>
            <List className="mobile-nav-toggle menu-list-navbar-mobile" onClick={(e) => handleToggleNavbar(e)}/>
            <X className="mobile-nav-toggle menu-close-navbar-mobile d-none" size="35" onClick={(e) => handleToggleNavbar(e)} />
          </nav>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/tiago-sabadini/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="linkedin"><Linkedin /></a>

            <a href="tiagosabadini.medium.com/"
              target="_blank" 
              rel="noopener noreferrer" 
              className="medium"><Medium /></a>

            <a href="https://www.instagram.com/tiagosabadini/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="instagram"><Instagram /></a>
          </div>
        </div>
      </header>

      <Outlet />
    </>    
  );
}

export default Home;