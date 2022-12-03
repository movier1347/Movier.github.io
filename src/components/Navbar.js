import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className = "navbar-title">
        <Link to="/movie" className='main-movier-title'>MOVIERr</Link>
        <Link to ="/" >To Watch</Link>
        <Link to ="/about" >How to</Link>
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
    );
}

export default Navbar;
