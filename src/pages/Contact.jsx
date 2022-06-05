import { useEffect, useState } from 'react';

//Componentes
import {ShareFill, PhoneFill,
  EnvelopeCheckFill, 
  MapFill, Instagram, Linkedin, Medium} from 'react-bootstrap-icons';

const Contact = () => {

  const [visible, setVisible] = useState('');
  useEffect(() => {
    setTimeout(() => setVisible('section-show'), 350);
  }, []);

  return (
    <section id="contact" className={`contact ${visible}`}>
      <div className="container">
        <div className="section-title">
          <h2>Entre em contato</h2>
        </div>

        <div className="row mt-2">

        <div className="col-md-6 d-flex align-items-stretch">
          <div className="info-box">
            <MapFill size="30" color="#18d26e" />
            <div>
              <h3>My Address</h3>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
          <div className="info-box">
            <ShareFill size="30" color="#18d26e" />
            <div>
              <h3>Social Profiles</h3>
              <div className="social-links">
                <a href="#" className="instagram"><Instagram color="#18d26e" /></a>
                <a href="#" className="twitter"><Medium color="#18d26e" /></a>
                <a href="#" className="linkedin"><Linkedin color="#18d26e" /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 mt-4 d-flex align-items-stretch">
          <div className="info-box">
            <EnvelopeCheckFill size="30" color="#18d26e" />
            <div>
              <h3>Email Me</h3>
              <p>contact@example.com</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-4 d-flex align-items-stretch">
          <div className="info-box">
            <PhoneFill size="30" color="#18d26e" />
            <div>
              <h3>Call Me</h3>
              <p>+1 5589 55488 55</p>
            </div>
          </div>
        </div>
      </div>



      </div>
    </section>
  );
}


export default Contact;