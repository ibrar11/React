import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {

    const [isBarOpen , setIsBarOpen] = useState(false);

    const setBarClose = (e) => {
        e.preventDefault();
        setIsBarOpen(false);
    }
    const setBar = (e) => {
        e.preventDefault();
        setIsBarOpen(!isBarOpen);
    }
  return (
    <header className='Header'>
       <div className='wholeScreen'  onClick={(e)=>(setBarClose(e))}></div>
       <div className="title">
          <h1>inkling Habitat</h1>
       </div>
       <nav className="navBar">
         <div className = {isBarOpen ? "buttonContainer" : "buttonContainer2"}>
            <button className="navButton">
                Projects
            </button>
            <button className="navButton">
                Courses
            </button>
            <button className="navButton" id='libraryBtn'>
                Asset Library
            </button>
            <button className="navButton">
                Insights
            </button>
            <button className="navButton">
                Modules
            </button>
            <button className="navButton" id='contentBtn'>
                Featured Content
            </button>
            <button id='lastChild' className="navButton">
                People
            </button>
         </div>
         <button className="menuBtn" onClick={(e)=>(setBar(e))}>
                <CiMenuBurger className='menuIcon'/>
         </button>
       </nav>
    </header>
  )
}

export default Header
