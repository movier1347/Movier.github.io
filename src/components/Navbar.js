import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className = "navbar-title">
        <Link to="/movie" className='main-movier-title'>MOVIERr</Link>

        <Link to ="/" >To Watch</Link>
        <Link to ="/about" >About Us</Link>
    </div>
    );
}

export default Navbar;
