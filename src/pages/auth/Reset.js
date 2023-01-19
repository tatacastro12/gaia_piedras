import React from "react";
import "./Auth.scss";
import resetImg from "../../components/assets/reset.jpg";
import { Link, Outlet } from "react-router-dom";
import Card from "../../components/card/Card";

const Reset = () => {
  return (
    <>
      <section className="auth container">
        <div className="img">
          <img src={resetImg} alt="reset" width={400} />
        </div>
        <Card>
          <div className="form">
            <h2>Reset Password</h2>
            <form>
              <input type="text" placeholder="Email" required />
              <button className="--btn --btn-primary --btn-block">
                Reset Password
              </button>
              <div className="links">
              <p>
              <Link to="/login"> -Login</Link>
              <Link to="/register"> -Register</Link>
              </p>
              </div>
            </form>
          </div>
        </Card>
      </section>
      <Outlet />
    </>
  );
};

export default Reset;
