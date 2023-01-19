import React from "react";
import "./Auth.scss";
import { Link, Outlet } from "react-router-dom"
import Card from "../../components/card/Card";
import  registerImg from "../../components/assets/register.jpg";


const register = () => {
  return (
    <>
      <section className="auth container">
        <Card>
          <div className="form">
            <h2>Register</h2>
            <form>
              <input type="text" placeholder="Email" required />
              <input type="Password" placeholder="Password" required />
              <input type="Password" placeholder=" Confirm Password" required />
              <button className="--btn --btn-primary --btn-block">Register</button>
            </form>
            
            <span className="register">
              <p>Already an account ?</p>
              <Link to="/login">Login</Link>
            </span>
          </div>
        </Card>
        <div className="img">
          <img src={registerImg} alt="Register" width={400} />
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default register;
