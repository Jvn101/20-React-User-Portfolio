import React, { useState } from 'react';
import Navigation from "./navigation";
import About from "./About";
import Contact from "./Contact";
import Portfolio from './Portfolio';


function Header( {setCurrentPage}) {


return (
    <div className="headerbar">
        <h1>Jasmine</h1>
        <nav className="navbar">
            <ul>
            <li onClick={()=> setCurrentPage("About")}>About</li>
            <li onClick={()=> setCurrentPage("Portfolio")}>Portfolio</li>
            <li onClick={()=> setCurrentPage("Contact")}>Contact</li>
            <li onClick={()=> setCurrentPage("Resume")}>Resume</li>
            </ul>
        </nav>
    </div>
  );


}
export default Header;