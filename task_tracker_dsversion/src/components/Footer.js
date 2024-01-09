import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='Footer'>
        <p>Copyright &copy; 2023</p>
        <p>
         <Link to={'/'}>About</Link> 
        </p>
    </footer>
  )
}

export default Footer
