import React from 'react';
import homeimg from '../assets/homeimg/cargoimg.jpg';
import left from '../assets/homeimg/left.png';
import right from '../assets/homeimg/right.png';
import aboutus from '../assets/aboutus/aboutus.png';
import './home.css'; 
import ship from '../assets/serviceimg/ship.jpg';
import servicearrow from '../assets/serviceimg/servicearrow.png';
import plane from '../assets/serviceimg/plane.jpg';
import logo1 from '../assets/logo/logo 1.png';
import logo2 from '../assets/logo/logo 2.png';
import logo3 from '../assets/logo/logo 3.png';
import logo4 from '../assets/logo/logo 4.png';
import logo5 from '../assets/logo/logo 5.png';
import news1 from '../assets/news/news1.jpg';
import news2 from '../assets/news/news2.jpg';
import news3 from '../assets/news/news3.jpg';
import news4 from '../assets/news/news4.jpg';
import message from '../assets/news/message.png';
import why from '../assets/news/why.jpeg';

const Home = () => {
  return (
    <div>

<div id="hero" className="container-fluid">
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-1 content-container">
                        <div className="text-center text-lg-start" data-aos="fade-up">
                            <div className="red-background"><br /><br /><br /><br /><br /><br /><br />
                                <h6 className='yellow-square'>LOGISTIC</h6>
                                <h1 className='best'>Best Shipping</h1>
                                <h1 className='partner'><b>Partner</b></h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum id repellat ut? Aliquid molestiae asperiores assumenda. Excepturi totam, deleniti quod ab assumenda optio illum eius nostrum beatae voluptatum illo placeat!</p>
                                <a href="#about" className="btn btn-get-started scrollto" style={{ marginBottom: '20px' , fontSize: '13px'}}><b>DISCOVER MORE</b></a> {/* Added marginBottom */}
                                <div className="text-left " style={{ marginTop: '120px' }}> {/* Added marginTop */}
                                    <a href="#new-section" className="btn btn-secondary btn-lg new">2 / 2 <img src={left}  alt="Admin Icon" width="18" height="18"/> <img src={right}  alt="Admin Icon" width="18" height="18"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-1 img-container">
                        <img src={homeimg} className="img-fluid" alt="" data-aos="fade-left" style={{ width: '100%', height: '600px' }} />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  
      <div id="hero" className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2" style={{ position: 'relative', zIndex: '2' }}>
            <div className="text-center text-lg-start" data-aos="fade-up" >
             
              <h2>TransMax Logistucs</h2>
              <h2>Around <span className='world'>the World </span></h2>
              <h6>Traqnsmax is the world's driving worldwide coordinations supplier -- we upholad industry and exchange the
                 worldwide trade of merchandise through land transport.</h6>
                 <p>Our worth added adminstrations guarantee the progress of products proceed consistently and supply chain stay lean and streamlined for progress</p>
              <a href="#about" className="btn  aboutbtn scrollto">MORE ABOUT US</a>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1" style={{ position: 'relative', zIndex: '1' }}>
            <img src={aboutus} className="img-fluid" alt="" data-aos="fade-left" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </div><br /><br /><br /><br />
    
      <div class="service">
        <h6>Real Solution,Real Fast!</h6>
        <h3><b>Best Global Logistics Solutions.</b></h3><br />
    </div>

    <div class="container">
    <div class="row justify-content-center mb-2">
      <div class="col-md-6">
        <div class="row g-0 border rounded-0 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative custom-card">
          <div class="col-auto d-none d-lg-block">
            <img src={ship} alt="Thumbnail" width="250" height="250"/>
          </div>
          <div class="col p-4 d-flex flex-column position-static">
            <h6 class="mb-0"><b>Air Freight Services</b></h6><br />
            <p class="card-text mb-auto">At our Auto Service garage, we fully appreciate how difficult it is for people to find.</p>
            <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
    <img src={servicearrow} alt="Your Image" class="icon-image" width="20" height="20"/> 
    <b> Read More </b> 
</a>


          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="row g-0 border rounded-0 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative custom-card">
          <div class="col-auto d-none d-lg-block">
            <img src={plane} alt="Thumbnail" width="250" height="250"/>
          </div>
          <div class="col p-4 d-flex flex-column position-static">
            <h6 class="mb-0"><b>Drone Services</b></h6><br />
            <p class="mb-auto">There are unique and often they differ from one industry to the other. Our logistic expertise.</p>
            <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
    <img src={servicearrow} alt="Your Image" class="icon-image" width="20" height="20"/> 
    <b> Read More </b> 
</a>


        </div>
      </div>
    </div>
    <p>Logistic & Transport Solution Saves Your Time.<b>Find Your Solutions</b>  <img src={servicearrow} alt="Your Image" class="icon-image" width="20" height="20"/> </p>
  </div>
</div><br /><br /><br /><br />

{/*<div class="container">
              <h1 class="text-effect">890   137   740   600 </h1>
          </div>*/}

<div className="container stats-container">
  <div className="row">
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="d-flex flex-column justify-content-center align-items-center text-center">
        <span className="stat" style={{ fontSize: '39px' }}><b>890</b></span>
        <span className="stat2" style={{ fontSize: '16px' }}>Delivered Packages</span>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="d-flex flex-column justify-content-center align-items-center text-center">
        <span className="stat" style={{ fontSize: '39px' }}><b>137</b></span>
        <span className="stat2" style={{ fontSize: '16px' }}>Countries Covered</span>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="d-flex flex-column justify-content-center align-items-center text-center">
        <span className="stat" style={{ fontSize: '39px' }}><b>740</b></span>
        <span className="stat2" style={{ fontSize: '16px' }}>Tons of Goods</span>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="d-flex flex-column justify-content-center align-items-center text-center">
        <span className="stat" style={{ fontSize: '39px' }}><b>600</b></span>
        <span className="stat2" style={{ fontSize: '16px' }}>Satisfied Clients</span>
      </div>
    </div>
  </div>
</div>





<br /><br /><br /><br />

<div class="container bg-white">
    <div class="row align-items-md-stretch">
        <div class="col-md-6">
            <div class="h-100 p-5 text-black rounded-3">
                <h4 class='trust'>TRUSTED CLIENTS</h4>
                <h6 class='why'>Lorem ipsum dolor sit amet consectetur.</h6>
                <img src={why} alt="Image description" class="img-fluid float-start me-3"/>
            </div>
        </div>
        <div class="col-md-6">
            <div class="h-100 p-5 bg-white rounded-3">
                <h4 class='trust'>WHO CHOSE US</h4> 
                <h6 class='why'>Lorem ipsum dolor sit amet consectetur.</h6> 
                <br />
                <hr /> 
                <div class="points">
                    <div>Lorem ipsum dolor sit amet consectetur.<span class="plus-mark">+</span></div>
                    <hr /> 
                    <div>Lorem ipsum dolor sit amet consectetur.<span class="plus-mark">+</span></div>
                    <hr /> 
                    <div>Lorem ipsum dolor sit amet consectetur.<span class="plus-mark">+</span></div>
                    <hr /> 
                    <div>Lorem ipsum dolor sit amet consectetur.<span class="plus-mark">+</span></div>
                    <hr /> 
                </div>
            </div>
        </div>
    </div>
</div>

<br /><br /><br /><br />


<div class="custom-row">
  <div class="col-md-2">
    <img src={logo1} alt="Client Logo" class="img-fluid" />
  </div>
  <div class="col-md-2">
    <img src={logo2} alt="Client Logo" class="img-fluid" />
  </div>
  <div class="col-md-2">
    <img src={logo3} alt="Client Logo" class="img-fluid" />
  </div>
  <div class="col-md-2">
    <img src={logo4} alt="Client Logo" class="img-fluid" />
  </div>
  <div class="col-md-2">
    <img src={logo5} alt="Client Logo" class="img-fluid" />
  </div>
</div>

<br /><br /><br /><br /><br />

<div class="news">
  <h3><b>LATEST NEWS</b></h3>
  <h6><span class="blue-square"></span>INTEGER CONGUE ELIT</h6>
</div><br /><br />


    <div class="container">
    <div class="row justify-content-center mb-2">
        <div class="col-md-6">
            <div class="row g-0 border rounded-0 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative custom-card">
                <div class="col-auto d-none d-lg-block">
                    <img src={news1} alt="Thumbnail" width="250" height="250"/>
                </div>
                <div class="col p-4 d-flex flex-column position-static card-content">
                    <h5 class="mb-0">Lorem ipsum dolor.</h5><br />
                    <p>Admin <span><img src={message}  alt="Admin Icon" width="18" height="18"/></span> 15</p>
                    <p class="card-text mb-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit.  repellendus corrupti.</p>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="row g-0 border rounded-0 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative custom-card">
                <div class="col-auto d-none d-lg-block">
                    <img src={news2} alt="Thumbnail" width="250" height="250"/>
                </div>
                <div class="col p-4 d-flex flex-column position-static card-content">
                    <h5 class="mb-0">Lorem ipsum dolor.</h5><br />
                    <p>Admin <span><img src={message}  alt="Admin Icon" width="18" height="18"/></span> 15</p> 
                    <p class="card-text mb-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit.  repellendus corrupti</p>
                    
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="row g-0 border rounded-0 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative custom-card">
                <div class="col-auto d-none d-lg-block">
                    <img src={news3} alt="Thumbnail" width="250" height="250"/>
                </div>
                <div class="col p-4 d-flex flex-column position-static card-content">
                    <h5 class="mb-0">Lorem ipsum dolor.</h5><br />
                    <p>Admin <span><img src={message}  alt="Admin Icon" width="18" height="18"/></span> 15</p> 
                    <p class="card-text mb-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit.  repellendus corrupti</p>
                    
                </div>
            </div>
        </div>


        <div class="col-md-6">
            <div class="row g-0 border rounded-0 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative custom-card">
                <div class="col-auto d-none d-lg-block">
                    <img src={news4} alt="Thumbnail" width="250" height="250"/>
                </div>
                <div class="col p-4 d-flex flex-column position-static card-content">
                    <h5 class="mb-0">Lorem ipsum dolor.</h5><br />
                    <p>Admin <span><img src={message} alt="Admin Icon" width="18" height="18"/></span> 15</p> 
                    <p class="card-text mb-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit.  repellendus corrupti</p>
                    
                </div>
            </div>
        </div>
  </div>
</div><br /><br /><br />



  </div> 
  );
};

export default Home;
