import React from 'react'

const Header = ({gameResult}) => {
   
  return (
    <header className='statusHeader'>
        <h1>{gameResult}</h1>
    </header>
    
  )
}

export default Header
