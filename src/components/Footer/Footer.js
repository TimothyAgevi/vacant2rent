import React, { Component } from "react";
import { Helmet } from "react-helmet";
import logo from 'assets/images/logo-removebg.png'
import '../Footer/Footer.css'

class Footer extends Component {
  render() {
    return (
      <>
        <Helmet>
          <style type="text/css">{`
            ul {
                margin: 0px;
                padding: 0px;
            }
            .footer-section {
              background-color: rgba(76, 0, 130, 0.7);
              position: relative;
              color: white;
            }
            .footer-cta {
              border-bottom: 1px solid #373636;
            }
            .single-cta i {
              color: #ff5e14;
              font-size: 30px;
              float: left;
              margin-top: 8px;
            }
            .cta-text {
              padding-left: 15px;
              display: inline-block;
            }
            .cta-text h4 {
              color: #fff;
              font-size: 20px;
              font-weight: 600;
              margin-bottom: 2px;
            }
            .cta-text span {
              color: #fff;
              font-size: 15px;
            }
            .footer-content {
              position: relative;
              z-index: 2;
            }
            .footer-pattern img {
              position: absolute;
              top: 0;
              left: 0;
              height: 330px;
              background-size: cover;
              background-position: 100% 100%;
            }
            .footer-logo {
              margin-bottom: 30px;
            }
            .footer-logo img {
                max-width: 200px;
            }
            .footer-text p {
              margin-bottom: 14px;
              font-size: 14px;
                  color: #fff;
              line-height: 28px;
            }
            .footer-social-icon span {
              color: #fff;
              display: block;
              font-size: 20px;
              font-weight: 700;
              font-family: 'Poppins', sans-serif;
              margin-bottom: 20px;
            }
            .footer-social-icon a {
              color: #fff;
              font-size: 16px;
              margin-right: 15px;
            }
            .footer-social-icon i {
              height: 40px;
              width: 40px;
              text-align: center;
              line-height: 38px;
              border-radius: 50%;
            }
            .facebook-bg{
              background: white;
            }

            .instagram-bg{
              background:white
            }
            .twitter-bg{
              background: white;
            }
            .linkedin-bg{
              background: white;
            }
            .footer-widget-heading h3 {
              color: #fff;
              font-size: 20px;
              font-weight: 600;
              margin-bottom: 40px;
              position: relative;
            }
            .footer-widget-heading h3::before {
              content: "";
              position: absolute;
              left: 0;
              bottom: -15px;
              height: 2px;
              width: 50px;
              background: #ff5e14;
            }
            .footer-widget ul li {
              display: inline-block;
              float: left;
              width: 50%;
              margin-bottom: 12px;
            }
            .footer-widget ul li a:hover{
              color: #ff5e14;
            }
            .footer-widget ul li a {
              color: #fafafa;
              text-transform: capitalize;
            }
            .subscribe-form {
              position: relative;
              overflow: hidden;
            }
            .subscribe-form input {
              width: 100%;
              padding: 14px 28px;
              background: #2E2E2E;
              border: 1px solid #2E2E2E;
              color: #fff;
            }
            .subscribe-form button {
                position: absolute;
                right: 0;
                background: #ff5e14;
                padding: 13px 20px;
                border: 1px solid #ff5e14;
                top: 0;
            }
            .subscribe-form button i {
              color: #fff;
              font-size: 22px;
              transform: rotate(-6deg);
            }
            .copyright-area{
              background: #202020;
              padding: 25px 0;
            }
            .copyright-text p {
              margin: 0;
              font-size: 14px;
              color: #f8fcfc;
            }
            .copyright-text p a{
              color: #ff5e14;
            }
            .footer-menu li {
              display: inline-block;
              margin-left: 20px;
            }
            .footer-menu li:hover a{
              color: #ff5e14;
            }
            .footer-menu li a {
              font-size: 14px;
              color: #f1f5f5;
            }
              `}</style>
        </Helmet>

        <footer className="footer-section">
          <div className="container">
            <div className="footer-cta pt-5 pb-5">
              <div className="row">
                <div className="col-xl-4 col-md-4 mb-30" style={{backgroundColor:"re"}}>
                  <div className="single-cta">
                    <div className="footer-logo" style={{marginTop:"-5em", marginLeft:"-6em"}}>
                        <img src={logo} alt="footer-logo-image" style={{height:"auto", width:"80%", maxWidth:"20em"}} />
                    </div>

                    <div className="footer-social-icon" style={{color:"white"}}>
                      {/* <span>Follow us</span> */}
                      <a href="#" style={{color:"whitesmoke"}}>
                        <i className="fab fa-facebook facebook"></i>
                      </a>

                      <a href="#">
                        <i className="fab fa-instagram instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin linkedin"></i>
                      </a>
                    </div>

                    {/* <i className="fas fa-map-marker-alt"></i> */}
                    {/* <div className="cta-text">
                      <h4>Find us</h4>
                      <span>Sliver Park, Block A3 No15</span>
                      <h5>Eldama Ravine Road</h5>
                      <span>Westlands, Nairobi, Kenya</span>
                    </div> */}
                  </div>
                </div>

                {/* our office */}
                <div className="col-xl-4 col-md-4 mb-30 ">
                  <div className="single-cta">
                    {/* <i className="fas fa-phone"></i> */}
                    <div className="cta-text ml-0 our-office">
                      <h4>Our office</h4>

                      <div className="mt-4">
                      <span>Silver Park, Block A3 No15,</span>
                      <h6>Eldama Ravine Road,</h6>
                      <p class="mt-0">Westlands, Nairobi, Kenya</p >
                    </div>


                    <h4 className="mt-3">
                      Subscribe to our newsletter
                    </h4>

                    <div className="subscribe-form mt-1">
                      <form action="#">
                        <input type="text" placeholder="Email Address" style={{width:"20em"}}/>
                        <button className="btn btn-rounded">Submit</button>
                      </form>
                    </div>

                      {/* <h4>Contact us</h4> */}
                      {/* <span>0712345678</span> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30 ml-0 opening-hours" style={{marginLeft:"-4em"}}>
                  <div className="single-cta">
                    {/* <i className="far fa-envelope-open"></i> */}
                    <div className="cta-text">
                      <h4>Opening hours</h4>
                      {/* <h4>Mail us</h4> */}
                      {/* <span>info@vacant2rent.com</span> */}
                     <ul className="mt-4">
                       <li>
                         8am-5pm Mon-Fri
                       </li>

                       <li>
                         8am-1pm Saturdays
                       </li>
                     </ul>

                      <div className="mt-4">
                        <span style={{fontSize:"20px"}}>Contact us</span>
                      </div>

                      <ul className="nmt-3">
                        <li>
                          Tel: <span style={{color:"whitesmoke"}}>
                            <a href="tel: +254 712345678" style={{color:"white"}}> 0712345678</a>
                          </span>
                        </li>
                        <li>
                          Email: <span >
                            <a href="mailto:info@vacant2rent.com" style={{color:"white"}}>info@vacant2rent.com</a>
                          </span>
                        </li>
                      </ul>

                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-md-4 mb-30 mt-5" >
                    <div className="single-cta">
                        <h4>Feedback</h4>

                        <div className="feedback-form">
                          <form action="#">
                              <input type="email"className="rounded" placeholder="Email address" style={{backgroundColor:"rgba(76, 0, 130, 0.7)", color:"white"}}/>
                              
                              <textarea className="rounded" cols="40" rows="5" name="message" className="mt-2" style={{backgroundColor:"rgba(76, 0, 130, 0.7)"}}>
                                Enter your message
                              </textarea>
                          </form>

                          <div className="mt-4 sub-footer-button" >
                            <button className="btn btn-rounded" style={{backgroundColor:"orange", borderRadius:"20px", float:"right",marginRight:"2em"}}>
                              Submit
                            </button>
                          </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-md-4 mb-30 ml-3 mt-5 explore">
                    <div className="single-cta">
                        <h4>Explore</h4>

                        <ul>
                          <li>
                            <a href="#" style={{color:"white"}}>About us</a>
                          </li>

                          <li>
                            <a href="#" style={{color:"white"}}>List property</a>
                          </li>

                          <li>
                            <a href="#" style={{color:"white"}}>Rent</a>
                          </li>

                          <li>
                            <a href="#" style={{color:"white"}}>Buy</a>
                          </li>

                          <li>
                            <a href="#" style={{color:"white"}}>Terms and conditions</a>
                          </li>


                        </ul>
                    </div>
                </div>
              </div>
            </div>
            {/* <div className="footer-content pt-5 pb-5">
              <div className="row">
                <div className="col-xl-4 col-lg-4 mb-50">
                  <div className="footer-widget">
                    <div className="footer-text">
                      <img
                        width="200px"
                        src={
                          "https://images.pexels.com/photos/2235130/pexels-photo-2235130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        }
                        alt=""
                      /> */}

                      {/* <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.</p> */}
                    </div>

                    {/* footers were here */}

                  {/* </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                  <div className="footer-widget">
                    <div className="footer-widget-heading">
                      <h3>Opening hours</h3>
                    </div>
                    <ul>
                      <li>8am - 5pm</li>
                      <li>Monday</li>
                      <li>9am - 1pm</li>
                      <li>saturday</li>
                    </ul>
                  </div>
                </div> */}
                {/* <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                  <div className="footer-widget">
                    <div className="footer-widget-heading">
                      <h3>Subscribe</h3>
                    </div>
                    <div className="footer-text mb-25">
                      <p>
                        Don’t miss to subscribe to our new feeds, kindly fill
                        the form below.
                      </p>
                    </div> */}
                    {/* <div className="subscribe-form">
                      <form action="#">
                        <input type="text" placeholder="Email Address" />
                        <button className="btn btn-rounded">Submit</button>
                      </form>
                    </div> */}
                  {/* </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="copyright-area">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">Terms</a>
                      </li>
                      <li>
                        <a href="#">Privacy</a>
                      </li>
                      <li>
                        <a href="#">Policy</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </footer>
      </>
    );
  }
}

export default Footer;
