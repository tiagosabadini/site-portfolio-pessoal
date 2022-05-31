import { useEffect, useState } from 'react';

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
              <i className="ri-store-line" style={{color: '#ffbb2c'}}></i>
              <h3>Lorem Ipsum</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="ri-bar-chart-box-line" style={{color: '#5578ff'}}></i>
              <h3>Dolor Sitema</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="ri-calendar-todo-line" style={{color: '#e80368'}}></i>
              <h3>Sed perspiciatis</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
            <div className="icon-box">
              <i className="ri-paint-brush-line" style={{color: '#e361ff'}}></i>
              <h3>Magni Dolores</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-database-2-line" style={{color: '#47aeff'}}></i>
              <h3>Nemo Enim</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-gradienter-line" style={{color: '#ffa76e'}}></i>
              <h3>Eiusmod Tempor</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-file-list-3-line" style={{color: '#11dbcf'}}></i>
              <h3>Midela Teren</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-price-tag-2-line" style={{color: '#4233ff'}}></i>
              <h3>Pira Neve</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-anchor-line" style={{color: '#b2904f'}}></i>
              <h3>Dirada Pack</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-disc-line" style={{color: '#b20969'}}></i>
              <h3>Moton Ideal</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-base-station-line" style={{color: '#ff5828'}}></i>
              <h3>Verdo Park</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-fingerprint-line" style={{color: '#29cc61'}}></i>
              <h3>Flavor Nivelanda</h3>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


export default Portfolio;