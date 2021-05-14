import Navbar from "../Search/Navbar";
import Footer from "../components/Footer/Footer";
import React, { Component } from "react";
import contactForm from '../../src/assets/contact-form.png'
import '../../src/Contact/Contact.css'

class Contact extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div>
          <section
            className="relative block py-24  bg-white-900 contact-form-section"
            style={{ paddingTop: "20rem" }}
          >
            <div className="container mx-auto px-4 contact-form-container">
              <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-0 shadow-lg rounded-lg bg-white-300">
                    <div className="flex-auto p-5 lg:p-10" style={{backgroundColor:"white"}}>
                      <h4 className="text-2xl font-semibold text-center">
                        Let's get in touch
                      </h4>
                      <div className="leading-relaxed mt-0 mb-0 text-center mt-5" style={{backgroundColor:""}}>
                        <img src={contactForm} alt="contact-form-image" 
                          style={{
                            height:"auto",
                            width:"100%",
                            maxWidth:"18em",
                            marginTop:"-5em",
                            backgroundColor:"",
                            marginLeft:"3.5em",
                            marginBottom:"0"
                          }}
                        />
                      </div>

                      <div className="relative w-full mb-3 mt-0">
                        <input
                          type="text"
                          className="border-2 px-3 py-3 placeholder--400 text-black-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Full Names"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <input
                          type="email"
                          className="border-2 px-3 py-3 placeholder-black-400 text-black-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <input
                          type="text"
                          className="border-2 px-3 py-3 placeholder-black-400 text-black-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Address"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <input
                          type="tel"
                          className="border-2 px-3 py-3 placeholder-black-400 text-black-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Phone Number"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="text-gray-700 text-xs font-bold mb-2"
                          htmlFor="message"
                        >
                          Message
                        </label>
                        <textarea
                          rows="4"
                          cols="80"
                          className="border-2 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder=" "
                        />
                      </div>
                      <div className="text-center mt-6">
                        <button
                          className="px-6 py-3 shadow hover:shadow-lg focus:outline-none mr-1 mb-1"
                          type="button"
                          style={{
                            transition: "all .15s ease",
                            backgroundColor: "orange",
                            borderRadius:"50px",
                            color:"purple",
                            paddingLeft:"50px",
                            paddingRight:"50px",
                            fontWeight:"bold"
                          }}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </>
    );
  }
}

export default Contact;
