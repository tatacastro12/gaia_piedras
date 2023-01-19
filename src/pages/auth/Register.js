import { useState } from "re";
import "./Auth.scss";
import { Link, Outlet } from "react-router-dom";
import Card from "../../components/card/Card";
import registerImg from "../../components/assets/register.jpg";

const register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const registerUser = (e) => {
    e.preventDefault()
    console.log()
  };

  return (
    <>
      <section className="auth container">
        <Card>
          <div className="form">
            <h2>Register</h2>
            <form onSubmit={registerUser}>
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="Password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="Password"
                placeholder=" Confirm Password"
                required
                value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
              />
              <button type="submit" className="--btn --btn-primary --btn-block">
                Register
              </button>
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
