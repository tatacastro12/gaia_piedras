import React from 'react'
import './Loader.scss'
import { gaiaImg } from "../assets/Gaia.gif";
import ReactDOM from 'react-dom'



const Loader = () => {
  return ReactDOM.createPortal (
    <div className='wrapper'>
        <div className='loader'></div>
        <img src={gaiaImg} alt="Loading..."/>
    </div>,
    document.getElementById("Gaia")
  )
}

export default Loader