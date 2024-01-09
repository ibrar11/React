import React from 'react'
import { useLocation } from 'react-router-dom'

const Header = (props) => {
  const isHome = useLocation().pathname === '/';

  
  return (
    <header className='Header'>
       <h1>Task Tracker</h1>
       <button 
       className={ isHome ? 'showButton' : 'hideButton'}
        id={props.isModalOpen ? 'closeTaskBtn' : 'openTaskBtn' } 
        onClick={() => props.handleForm()}>
          {props.isModalOpen ? 'Close' : 'Open'}
        </button>

    </header>
  )
}

export default Header
