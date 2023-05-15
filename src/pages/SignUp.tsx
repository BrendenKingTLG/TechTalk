import { FormEvent, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { NavLink, useNavigate } from "react-router-dom";
export const userStatus = auth.currentUser;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e: FormEvent) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed in
        navigate("/jobs");
        console.log(auth.currentUser !== null);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <div className="d-flex justify-content-center flex-column flex-wrap align-content-center">
        <form className="d-flex flex-column " style={{ width: "80%" }}>
          <label
            htmlFor="email-address"
            style={{ paddingTop: "1em", marginTop: "1em" }}
          >
            Email address
          </label>
          <input
            style={{ marginTop: "1em" }}
            id="email-address"
            name="email"
            type="email"
            required
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label
            htmlFor="password"
            style={{ paddingTop: "1em", marginTop: "1em" }}
          >
            Password
          </label>
          <input
            style={{ marginTop: "1em" }}
            id="password"
            name="password"
            type="password"
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={onLogin}
            style={{ paddingTop: "1em", marginTop: "1em" }}
          >
            Create Account
          </button>
        </form>
        <p className="text-sm text-center pt-5">
          Already have an account? <NavLink to="/signin">Sign in</NavLink>
        </p>
      </div>
    </>
  );
};

export default Login;
