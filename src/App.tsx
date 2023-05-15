import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="messages" element={<Messages />} />
            <Route path="profile" element={<Profile />} />
            <Route path="signin" element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
