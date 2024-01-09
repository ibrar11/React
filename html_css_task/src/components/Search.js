import React from 'react'
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className='search'>
      <div className="searchBar">
        <CiSearch className='searchIcon'/>
        <input 
            id='searchField'
            type="text"
            placeholder='         Search courses...'
         />
      </div>
      <div className="dropDown">
        <select 
            id='courseChoice'
        >
            <option hidden>All courses</option>
            <option value='Analysis of Algorithm'>Analysis of Algorithm</option>
            <option value='Object Oriented Programing'>Object Oriented Programing</option>
            <option value='Data Structures'>Data Structures</option>
            <option value='Data Base'>Data Base</option>
        </select>
      </div>
    </div>
  )
}

export default Search
