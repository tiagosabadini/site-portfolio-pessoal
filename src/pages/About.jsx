import {useEffect, useState} from 'react';

const About = () => {

  const [visible, setVisible] = useState('');
  useEffect(() => {
    setTimeout(() => setVisible('section-show'), 350);
  }, []);

  return (
    <section id="about" className={`about ${visible}`}>
        <div className="about-me container">
            <div className="section-title">
              <h2>Sobre mim</h2>
              <p>
                Sou apaixonado por duas coisas: desenvolver pessoas e resolver problemas. 
              </p>
            </div>

            <div className="row">
              <div className="col-lg-2" data-aos="fade-right">
                <img src="https://www.byecar.com.br/assets/images/brand/logo.webp" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-10 pt-4 pt-lg-0 content" data-aos="fade-left">
                <h3><a href="https://www.byecar.com.br/">Co-founder BYeCAR</a></h3>
                <p className="fst-italic">
                  Somos o primeiro marketplace de carros por assinatura do Brasil. 
                  Desenhamos uma jornada digital para oferecer aos nossos clientes as melhores ofertas de acordo com a sua localização.
                </p>
              </div>
            </div>
            <div className="row mt-4">
            <div className="col-lg-2" data-aos="fade-right">
                <img src="https://miro.medium.com/max/700/1*5yZdslfHQlA2r8WHwesZMg.jpeg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-10 pt-4 pt-lg-0 content" data-aos="fade-left">
                <h3><a href="https://tiagosabadini.medium.com">Criação de conteúdo</a></h3>
                <p className="fst-italic">
                  Uma das formas de cumprir meu propósito é publicar conteúdos técnicos e de desenvolvimento pessoal. Mantenho pelo menos duas publicações por mês em meu blog.
                </p>
              </div>
            </div>
        </div>
      </section>
  );
}


export default About;