import React from "react";
import "./Auth.scss";
import loginImg from "../../components/assets/login.jpg";
import { Link, Outlet } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Card from "../../components/card/Card";

const Login = () => {
  return (
    <>
      <section className="auth container">
        <div className="img">
          <img src={loginImg} alt="login" width={400} />
        </div>
        <Card>
          <div className="form">
            <h2>Login</h2>
            <form>
              <input type="text" placeholder="Email" required />
              <input type="Password" placeholder="Password" required />
              <button className="--btn --btn-primary --btn-block">Login</button>
              <div className="links">
                <Link to="/reset"> Reset Password</Link>
              </div>
              <p> --or--</p>
            </form>
            <button className="--btn --btn-primary --btn-block">
              <FaGoogle color="#fff" />
              Login Width Google
            </button>
            <span className="register">
              <p>Don't have an account?</p>
              <Link to="/register">Register</Link>
            </span>
          </div>
        </Card>
      </section>
      <Outlet />
    </>
  );
};

export default Login;
