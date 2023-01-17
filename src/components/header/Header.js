import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.scss";

const Header = () => {
  return (
    <Header className= "header" >
        <div>
        <div>
        <Link>
          <h2>
            Gaia
          </h2>
        </Link>

        </div>

        </div>
    </Header>
  )
}

export default Header