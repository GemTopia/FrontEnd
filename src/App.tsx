import React from "react";
import { Routes, Route, Navigate } from "react-router";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Game from "./pages/Game";
import Report from "./pages/Report";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Navigate to="./signup"></Navigate>}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Games" element={<Games />}></Route>
        <Route path="/Game" element={<Game />}></Route>
        <Route path="/Report" element={<Report />}></Route>
      </Routes>
    </div>
  );
}

export default App;
