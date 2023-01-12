import React, { useState } from "react";
import menuIcon from "../menu.png"
import { Link } from "react-router-dom";

const Navbar2 = (props)=>{
      const links = [{name: "To Watch", link: "/"},
      {name: "How To", link: "/about"}]

      const [open, setOpen] = useState(false);
      return (
      <>
      <div className="shadow-xl w-full fixed top-0 left-0 z-10 bg-neutral-900 py-5">
        <div className="md:flex items-center justify-between bg-gray py-4 md:px-10 px-7">
            <div className="font-bold text-1xl cursor-pointer flex items-center">
                <span className="text-3xl mr-1 pt-2">
                <Link style={{ textDecoration: 'none', outline: "none" }} to="/movie" className='main-movier-title'>MOVIERr</Link>
                </span>
            </div>
            <div onClick={()=>{setOpen(!open)}} className="text-3xl absolute right-8 top-6 cursor-pointer text-white md:hidden">
                <img alt="menu-icon" src={menuIcon} className="menu-icon"/>
            </div>
            <ul className={`md:flex md:items-center text-white md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-20 opacity-100 bg-neutral-900": "top-[-400px] bg-gray bg-gray"} md:opacity-100 opacity-0`}>
                {links.map(link=>(
                    <li  key={link.name} className='md:ml-8 mx-6 text-2xl md:my-0 my-9'>
                        <Link style={{ textDecoration: 'none', outline: "none" }} to={link.link} className="hover:text-orange-600 duration-500">{link.name}</Link>
                    </li>
                ))}
                <li>
                    <div  className="mx-6" id="signInDiv"></div>
                    {props.user &&
          <div className={(Object.keys(props.user).length > 0) ? "inOutButtonShow" : "inOutButton"}>
            <div className="prof" onClick={(e) => props.signOut(e)}>
            <button style={{ textDecoration: 'none', outline: "none" }} id="outButton">Sign Out</button>
            <img alt="user" className="inImg" src={props.user.picture}/>
            </div>
        </div>
        }
                </li>
            </ul>
        </div>
      </div>
      </>
          );
  }
  
  export default Navbar2;