import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar2 = (props)=>{
    /*return (
      <div className = "navbar-title">
          <Link style={{ textDecoration: 'none', outline: "none" }} to="/movie" className='main-movier-title'>MOVIERr</Link>
          <Link style={{ textDecoration: 'none', outline: "none" }} to ="/" >To Watch</Link>
          <Link style={{ textDecoration: 'none', outline: "none"}} to ="/about" >How to</Link>
          <div id="signInDiv"></div>
            {props.user &&
            <div className="inOutButton">
              <div className="prof">
              <img className="inImg" src={props.user.picture}/>
              <h4>{props.user.name}</h4>
              </div>
              <button id="outButton" onClick={(e) => props.signOut(e)}>Sign Out</button>
          </div>
          }
      </div>
      );*/
      const links = [{name: "To Watch", link: "/"},
      {name: "How To", link: "/"},
      {name: "Sign In", link: "/"} ]

      const [open, setOpen] = useState(false);
      return (
      <>
      <div className="shadow-md w-full fixed top-0 left-0 z-10 bg-neutral-900">
        <div className="md:flex items-center justify-between bg-gray py-4 md:px-10 px-7">
            <div className="font-bold text-1xl cursor-pointer flex items-center font-[Poppins]">
                <span className="text-3xl mr-1 pt-2">
                <Link style={{ textDecoration: 'none', outline: "none" }} to="/movie" className='main-movier-title'>MOVIERr</Link>
                </span>
            </div>
            <div onClick={()=>{setOpen(!open)}} className="text-3xl absolute right-8 top-6 cursor-pointer text-white md:hidden">
                <h3>Menu</h3>
            </div>
            <ul className={`md:flex md:items-center text-white md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-20 opacity-100 bg-neutral-900": "top-[-400px] bg-gray bg-gray"} md:opacity-100 opacity-0`}>
                {links.map(link=>(
                    <li key={link.name} className='md:ml-8 text-xl md:my-0 my-9'>
                        <a className="hover:text-black-800 duration-500">{link.name}</a>
                    </li>
                ))}
            </ul>
        </div>
      </div>
      </>
          );
  }
  
  export default Navbar2;