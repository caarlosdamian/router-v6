import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";
import ProfilePrivate from "./pages/ProfilePrivate";
import PrivateRoute from "./pages/PrivateRoute";
function App() {
  return (
    <div className="" style={{ display: "flex" }}>
      <Router>
        <nav style={{ display: "flex", flexDirection: "column" }}>
          <Link to="/">Home </Link>
          <Link to="/about">About </Link>
          <Link to="/profile">Profile</Link>
          <Link to="/profile/private">Profile</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route
            path="/profile/private"
            element={
              <PrivateRoute>
                <ProfilePrivate />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
