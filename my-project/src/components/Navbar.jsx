import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      
    <div className="navbar bg-base-100 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl font-bold">
          <Link to={"/Home"}>Ataur Rahman Ripon</Link>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-2xl font-semibold">
          <li>
            <a>
              <Link to={"/Home"}>Home</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to={"/Skill"}>Skills</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to={"/Project"}>Projects</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to={"/About"}>About</Link>
            </a>
          </li>
          {/* <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li> */}
          
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn text-2xl font-semibold border-solid border-2 border-sky-600">View resume</a>
      </div>
    </div>
  );
}

export default Navbar