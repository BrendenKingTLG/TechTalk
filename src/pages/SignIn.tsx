import { signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { auth } from "../../firebase";
import { NavLink, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = async (e: FormEvent) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed in
        navigate("/jobs");
        console.log(auth.currentUser !== null);
      })
      .catch((err) => {
        alert(err);
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
            onClick={signIn}
            style={{ paddingTop: "1em", marginTop: "1em" }}
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center pt-5">
          New to Tech Talk? <NavLink to="/signup">Sign up</NavLink>
        </p>
      </div>
    </>
  );
}
