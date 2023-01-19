import React from 'react'
import   "./Auth.scss";
import loginImg from "../../components/assets/login.jpg"

const Login = () => {
  return (
    <section className="{auth} container"> 
    <div className="img">
    <img src={loginImg} alt='login'/>
    </div>
    <div className='form'>

    </div>
    </section>
  )
}

export default Login