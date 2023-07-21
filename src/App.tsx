import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Game from "./pages/Game";
import Report from "./pages/Report";
import GameResult from "./pages/GameResult";
import Inventory from "./pages/Inventory";
import Landing from "./pages/Landing";
import TermOfUse from "./pages/TermOfUse";
import axios, * as others from "axios";
import { baseUrl } from "./shares/shared";
import LearnMore from "./pages/LearnMore";

function App() {
  useEffect(() => {
    setInterval(() => {
      if (localStorage.getItem("refresh"))
        axios
          .post(`${baseUrl}/users/token/refresh/`, {
            refresh: localStorage.getItem("refresh"),
          })
          .then(function (response) {
            const token = response.data.access;
            localStorage.setItem("token", token);
          })
          .catch(function (error) {
            console.log(error);
          });
    }, 120000);
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/games" element={<Games />}></Route>
        <Route path="/games/:gameId" element={<Game />}></Route>
        <Route path="/result" element={<GameResult />}></Route>
        <Route path="/report" element={<Report />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/term-of-use" element={<TermOfUse />}></Route>
        <Route path="/learn-more" element={<LearnMore />}></Route>
      </Routes>
    </div>
  );
}

export default App;
