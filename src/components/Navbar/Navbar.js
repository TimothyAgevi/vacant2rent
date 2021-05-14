import LogoTitle from "components/LogoTitle";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";


export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav
      className={
        (props.transparent
          ? "top-0 text-white absolute z-50 w-full"
          : "relative bg-dark text-white shadow-lg shadow-lg") +
        " flex flex-wrap items-center justify-between px-2 py-3 "
      }
    >
      <div className="text-white px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full text-white relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className={
              (props.transparent ? "text-white" : "text-white") +
              " text-sm leading-relaxed text-white inline-block mr-4 py-2 whitespace-nowrap"
            }
            href="/"
          >
            <LogoTitle />
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid 
            border-transparent bg-transparent block lg:hidden outline-none 
            focus:outline-none"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={
                (props.transparent ? "text-white" : "text-white") +
                " fas fa-bars"
              }
            ></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            {/* <li className="flex items-center">
              <Link
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs font-bold"
                }
                to="/search_property"
              >
                Search Property
              </Link>
            </li> */}

            <li className="flex items-center">
              <Link
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-white"
                    : "text-white hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs font-bold"
                }

                to="/list_property"
              >
                List Property
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-white"
                    : "text-white hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs font-bold"
                }
                // view_property
                to="/view_property"
              >
                View Listing
              </Link>
            </li>

            <li className="flex items-center">
              <Link
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-white"
                    : "text-white hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs font-bold"
                }
                // /contact
                to="#"
              >
                Contact Us
              </Link>
            </li>

            <li className="flex items-center">
              <Link
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-white"
                    : "text-white hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs font-bold"
                }
                // /blog
                to="#"
              >
                Blog
              </Link>
            </li>

            <li className="flex items-center sign-in">
              {/* login */}
              <Link to="#">Sign in</Link>  
            </li>
                
            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-white"
                    : "text-white hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs font-bold"
                }
                href="#pablo"
              >
                {/* <i
                  className={
                    (props.transparent
                      ? "lg:text-gray-300 text-gray-500"
                      : "text-gray-500") +
                    " fab fa-facebook text-lg leading-lg "
                  }
                /> */}
                <span className="lg:hidden inline-block ml-2">Share</span>
              </a>
            </li>

            <li className="flex items-center">
              <Link
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-white"
                    : "text-white hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs font-bold"
                }
                href="#pablo"
              >
                {/* <i
                  className={
                    (props.transparent
                      ? "lg:text-gray-300 text-gray-500"
                      : "text-gray-500") +
                    " fab fa-twitter text-lg leading-lg "
                  }
                /> */}

                <span className="lg:hidden inline-block ml-2">Tweet</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
