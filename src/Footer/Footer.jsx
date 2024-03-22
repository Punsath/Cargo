import React, { useState } from 'react';
import './footer.css';
import plane from '../assets/footer/footer.jpg';
import fb from '../assets/footer/fb.png';
import inster from '../assets/footer/inster.png';
import tweet from '../assets/footer/tweet.png';
import linkedin from '../assets/footer/linkedin.png';
import wp from '../assets/footer/wp.png';
import phone from '../assets/footer/phone.png';
import location from '../assets/footer/location.png';
import arrow from '../assets/footer/arrow.png';
import thumbsup from '../assets/footer/thumbsup.png';
import arrow2 from '../assets/footer/arrow2.png';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <div>
      <div className='footerall'><br />
        <div className="container">
          <div className='search'>
            <div className="row justify-content-center"> 
              <div className="col-md-7">
                <h2>Weekly Newsletter</h2>
                <p>There are many variations of passages of Lorem Ipsum available</p>
              </div>
              <div className="col-md-5"> 
                <form className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <input id="newsletter1" type="text" name="email" className="form-control rounded-3" placeholder="Enter Your Mail" style={{borderRadius: '2%'}} />
                  <button className="btn btn-yellow sub" type="submit" style={{border: 'none'}}>Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br />
        <footer className="py-5">
        <div className="container">
    <div className="row justify-content-center">
      <div className="col-6 col-md-3 mb-3">
        <h5 className="yellow-underline" >About Us</h5><br /><br />
        <ul className="nav flex-column">
          <li className="nav-item mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li><br />
          <li className="nav-item mb-2">
          <img src={phone} alt="Image 3" width="22" height="22" />  |  (+94)11 434 7575</li>
          <li className="nav-item mb-2">
          <img src={location} alt="Image 3" width="22" height="22" />  |  42 Lily Ave, Colombo 00600</li>
        </ul>
      </div>
      <div className="col-6 col-md-3 mb-3">
        <h5 className="yellow-underline">Latest News</h5><br /><br />
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
          <img src={arrow} alt="Image 3" width="20" height="20" /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, dolorum. <br /><br />5 Miniutes Ago</li><br />
          <li className="nav-item mb-2">
          <img src={arrow} alt="Image 3" width="20" height="20" /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dicta. <br /><br />5 Miniutes Ago</li>
        </ul>
      </div>
      <div className="col-6 col-md-3 mb-3">
        <h5 className="yellow-underline">Customer Service</h5><br /><br />
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><img src={thumbsup} alt="Image 3" width="20" height="20" /> Support Forums</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><img src={thumbsup} alt="Image 3" width="20" height="20" /> Communication</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><img src={thumbsup} alt="Image 3" width="20" height="20" /> FAQS</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><img src={thumbsup} alt="Image 3" width="20" height="20" /> Privacy Policy</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><img src={thumbsup} alt="Image 3" width="20" height="20" /> Rules & Condition</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><img src={thumbsup} alt="Image 3" width="20" height="20" /> Contact Us</a></li>
        </ul>
              </div>
              <div className="col-6 col-md-3 mb-3">
  <h5 className="yellow-underline">Customer Service</h5><br /><br />
  <img src={plane} alt="Customer Service" className="img-fluid" />
</div>
    
            </div><br /><br />
            <div className="d-flex flex-column flex-sm-row justify-content-between py-0 my-2">
              <p>Copyright © 2021 All rights reserved. Site By Xiteb</p>
              <ul className="list-unstyled d-flex">
              <li className="ms-3"><a className="link-dark" href="#"><img src={tweet} alt="Twitter" width="24" height="24" /></a></li>
    <li className="ms-3"><a className="link-dark" href="#"><img src={inster} alt="Instagram" width="24" height="24" /></a></li>
    <li className="ms-3"><a className="link-dark" href="#"><img src={fb} alt="Facebook" width="24" height="24" /></a></li>
    <li className="ms-3"><a className="link-dark" href="#"><img src={wp} alt="wp" width="24" height="24" /></a></li>
    <li className="ms-3"><a className="link-dark" href="#"><img src={linkedin} alt="ln" width="24" height="24" /></a></li>
    </ul>
            </div>
          </div>
        </footer>
      </div>

     <button className="scroll-top-btn" onClick={scrollTop}>
          <img src={arrow2} alt="Scroll to Top" width="30" height="30" />
        </button>
    </div>
  );
};

export default Footer;
