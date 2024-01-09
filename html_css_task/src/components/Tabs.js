import React from 'react'
import { BiSelectMultiple } from "react-icons/bi";

const Tabs = () => {
  return (
    <div className='TabsSection'>
      <div className="tabs">
        <button className="Btn2">
            <BiSelectMultiple className='checkIcon'/>
            <p>Course Library</p>
        </button>
        <button className="Btn">
            <BiSelectMultiple className='checkIcon2'/>
            <p>Assignment Rules</p>
        </button>
      </div>
      <div className="createBtn">
        <button className='addCourseBtn'> 
            <p id='longText'>+ Create New Course</p>
            <p id='shortText'>New Cpurse</p>
        </button>
      </div>
    </div>
  )
}

export default Tabs
