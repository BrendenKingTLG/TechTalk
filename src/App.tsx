import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

function App() {
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setUser(user);
      // ...
    } else {
      // User is signed out
      // ...
      setUser(null);
    }
  });
  return (
    <>
      <HashRouter>
        <Routes>
          <Route>
            <Route index element={user !== null ? <Home /> : <SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route
              path="jobs"
              element={user !== null ? <Jobs /> : <SignIn />}
            />
            <Route
              path="messages"
              element={user !== null ? <Messages /> : <SignIn />}
            />
            <Route
              path="profile"
              element={user !== null ? <Profile /> : <SignIn />}
            />
            <Route path="signin" element={<SignIn />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
