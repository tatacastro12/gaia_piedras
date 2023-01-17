import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.scss";



const Header = () => {
  return (
    <Header className= "header" >
        <div className='logo'>
        <div>
        <Link to="/">
          <h2>
          G <span>aia</span>.
          </h2>
        </Link>

        </div>

        </div>
    </Header>
  )
}

export default Header