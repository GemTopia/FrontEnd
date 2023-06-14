import React from "react";
import { Routes, Route, Navigate } from "react-router";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Navigate to="./signup"></Navigate>}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
