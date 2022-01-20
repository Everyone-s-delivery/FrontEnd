import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
