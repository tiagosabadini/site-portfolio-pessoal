import { useEffect, useState } from 'react';

//Componentes
import {WindowStack} from 'react-bootstrap-icons';

const Portfolio = () => {

  const [visible, setVisible] = useState('');
  useEffect(() => {
    setTimeout(() => setVisible('section-show'), 350);
  }, []);

  return (
    <section id="portfolio" className={`portfolio ${visible}`}>
      <div className="interests container">
        <div className="section-title">
          <h2>Portfolio</h2>
        </div>
        
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="icon-box">
              <WindowStack color="#18d26e" />
              <h3>Projeto Um</h3>
              <a href="https://projetoum.com.br" target="_blank" className="" rel="noreferrer">https://projetoum.com.br</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
            <WindowStack color="#18d26e" />
              <h3>Projeto Dois</h3>
              <a href="https://projetodois.com.br" target="_blank" className="" rel="noreferrer">https://projetodois.com.br</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
            <WindowStack color="#18d26e" />
              <h3>Projeto Três</h3>
              <a href="https://projetotres.com.br" target="_blank" className="" rel="noreferrer">https://projetotres.com.br</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
            <div className="icon-box">
            <WindowStack color="#18d26e" />
              <h3>Projeto Quatro</h3>
              <a href="https://projetoquatro.com.br" target="_blank" className="" rel="noreferrer">https://projetoquatro.com.br</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Portfolio;