import React from 'react'
import  "./Footer.scss";

 const date = new Date();
  const year = date.getFullYear ()

const Footer = () => {
  return (
    <div className='footer'>
    &copy; {year} All rights reserved
    </div>
  )
}

export default Footer