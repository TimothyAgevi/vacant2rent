import React from "react";
import {Link} from 'react-router-dom'
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer";
import '../views/Register.css';
import imgicon from '../../../src/assets/imgplaceholder-removebg-preview.png'
import {FiPlusCircle} from 'react-icons/fi'
// import aile from "../assets/img/google.svg"
// import  git from '../assets/img/github.svg'

export default function Login() {
  return (
    <>
      <Navbar/>
      <main>
        <section className="relative w-full h-full  bg-white register-form">
          <div
            className="relative top-2 w-full  bg-gray-900"
            
          ></div>
          <div className=" mx-auto px-7 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0"
                style={{
                  backgroundColor:"white",
                  marginTop:"3em"
                }}>
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3" style={{textAlign:"center"}}>
                        <div className="welcome" style={{fontWeight:"bold", fontSize:"14px"}}>WELCOME TO </div>
                        <div className="v2r" style={{fontWeight:"bold", fontSize:"18px"}}>VACANT 2 RENT</div>
                    </div>
                    {/* <div className="btn-wrapper text-center">
                      <button
                        className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        <img
                          alt="..."
                          className="w-5 mr-1"
                          src={git}
                        />
                       Facebook
                      </button>
                      <button
                        className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        <img
                          alt="..."
                          className="w-5 mr-1"
                          src={aile}
                        />
                        Google
                      </button>
                    </div> */}
                    {/* <hr className="mt-6 border-b-1 border-gray-400" /> */}
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    {/* <div className="text-gray-500 text-center mb-3 font-bold">
                      <small>Or sign up with credentials</small>
                    </div> */}
                    <form>
                    <div className="relative w-full mb-3">
                        {/* <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          FullName
                        </label> */}
                        <input
                          type="text"
                          className="border-2 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full data-input"
                          placeholder="Name"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        {/* <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label> */}
                        <input
                          type="email"
                          className="border-2 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full data-input"
                          placeholder="Email"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <input
                          type="text"
                          className="border-2 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full data-input"
                          placeholder="Company name"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <input
                          type="text"
                          className="border-2 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full data-input"
                          placeholder="Country"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <input
                          type="tel"
                          className="border-2 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full data-input"
                          placeholder="Phone Number"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <div className="flex mb-4">
                          <div className="w-1/2 bg-gray-400 h-12 mr-4">
                            <input
                            type="text"
                            className="border-2 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full data-input"
                            placeholder="Address"
                            style={{ transition: "all .15s ease" }}
                            />
                          </div>
                        <div className="w-1/2 bg-gray-500 h-12">
                            <div className="w-2/2 bg-gray-400 h-12">
                              <input
                              type="number"
                              className="border-2 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full data-input"
                              placeholder="Postal code"
                              style={{ transition: "all .15s ease" }}
                            />
                          </div>
                          </div>
                        </div>
                      </div>

                      <div className="relative w-full mb-3">
                        <div className="flex mb-4">
                          <div className="w-1/2 bg-gray-400 h-12 mr-4">
                            <label
                              className="block text-black-700 text-sm font-bold mb-2"
                              htmlFor="grid-password"
                            >
                            Create password
                            </label>
                            <input
                            type="password"
                            className="border-2 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full data-input"
                            placeholder="Create password"
                            style={{ transition: "all .15s ease" }}
                          />
                          <p className="mt-1 mb-3" style={{fontSize:"12px", textAlign:"center", lineHeight:"15px"}}>
                            Consist of letters numbers <br/> Minimum 8 characters
                          </p>
                          </div>
                          <div className="w-1/2 bg-gray-500 h-12">
                            <div className="w-2/2 bg-gray-400 h-12">
                              <label
                                className="block text-black-700 text-sm font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Confirm password
                              </label>
                              <input
                              type="password"
                              className="border-2 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full data-input"
                              placeholder="Confirm password"
                              style={{ transition: "all .15s ease" }}
                            />
                          </div>
                          </div>
                        </div>
                      </div>

                      <div className="relative w-full mb-3" style={{marginTop:"5em"}}>
                        <div className="flex mb-4">
                          <div className="w-1/2 bg-gray-400 h-12 mr-4" id="image-upload">
                            <label for="file-input">
                              <img src={imgicon} />
                            </label>

                            <input
                              type="file"
                              className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full data-input"
                              placeholder=""
                              style={{ transition: "all .15s ease" }}
                              id="file-input"
                            />
                            
                          </div>

                          <div className="w-1/2 bg-gray-500 h-12">
                            <div className="w-2/2 bg-gray-400 h-12" id="cert-upload">
                              <label for="id-cert"
                              className=" cert">
                                <i style={{float:"left"}}>
                                  <FiPlusCircle/>
                                </i>  <span style={{fontSize:"15px"}}>Please upload business certificate or copy of ID</span> 
                              </label>
                              <input
                              type="file"
                              id="id-cert"
                              className="border-2 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full data-input"
                              
                              style={{ transition: "all .15s ease" }}
                              />
                          </div>
                          </div>
                        </div>
                      </div>

                      <div style={{width:"70%", textAlign:"center", fontSize:"12px", marginLeft:"4em"}}>
                        <label className="mt-5 inline-flex items-center cursor-pointer">
                          <input
                            id="policy-agreement"
                            type="checkbox"
                            className="form-checkbox border-2 rounded ml-1 w-5 h-5"
                            style={{ transition: "all .15s ease" }}
                          />
                          <span className="ml-2 text-dark policy-agreement" style={{fontSize:"14px"}}>
                            I agree to all statement stated in your <Link to="#" style={{color:"black", textDecoration:"underline"}}>
                            company policy
                            </Link>
                          </span>
                        </label>
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className="text-dark active:bg-gray-700 text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg 
                          outline-none focus:outline-none mr-1 mb-1 w-6/12 reg-submit-btn"
                          type="button"
                          style={{ transition: "all .15s ease",backgroundColor:"orange"  }}
                        >
                          Next
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </>
  );
}
