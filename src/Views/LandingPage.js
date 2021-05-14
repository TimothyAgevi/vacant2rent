import React from "react";
import {Container,Row,Col,Form, FormControl} from 'react-bootstrap';
import { Link } from "react-router-dom";
import "../styles/landingpage.css"
import logo from "../assets/images/logo-removebg.png"

function LandingPage(){

    return(
        
        <main>
            <div className="landingbg-image"
            style={{height:"100vh",
            backgroundImage:"url(http://localhost:3000/images/landingbg.jpg)"
            }}>

        <div className="container relative mx-auto" style={{top:"4em"}}>
            <div className="items-center flex flex-wrap">

            <div className="logo-container" style={{marginLeft:"23em", marginBottom:"-3em"}}>
                <img src={logo} style={{height:"auto", width:"50%", maxWidth:"50em"}} />
            </div>

            <div className="mobile-logo" style={{display:"none", marginTop:"-2em"}}>
                <img src={logo} style={{height:"auto", width:"50%", maxWidth:"60em"}} />
            </div>

              <div className="w-full px-4 ml-auto mr-auto mt-4   text-center">
                <div className="pr-12">
                  <h1 className="tag-line text-white font-semibold text-3xl" style={{marginBottom:"1em"}}>
                    WHAT DO YOU WANT TO DO?
                  </h1>
                  {/* <div className="mt-5"> */}
                  <span className="list-property-button">
                  <Link to="/list_property" style={{marginRight:"4em"}}>
                    <button className="btn btn-warning btn-lg mt-6" style={{color:"whitesmoke", fontWeight:"bold", padding:".8em", paddingLeft:"2em",paddingRight:"2em",borderRadius:"10px"}}>
                      LIST A PROPERTY
                    </button>
                  </Link>
                  </span>

                    <div className="vertical-line" style={{display:"inline-block"}}>
                        
                    </div>

                  <span className="search-property-button">
                  <Link to="/search_property" style={{marginLeft:"4em"}}>
                    <button className="btn btn-warning btn-lg mt-6" style={{color:"whitesmoke",fontWeight:"bold", padding:".8em",  borderRadius:"10px"}}>
                      SEARCH PROPERTIES
                    </button>
                  </Link>
                  </span>                  
                </div>
              </div>
            </div>
          </div>

        </div>

        </main>
    )
}

export default LandingPage