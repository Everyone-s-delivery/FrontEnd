import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import "./App.css";
import Footer from "./components/Footer";
import SignupScreen from "./screens/Signup";
import withRoot from "./withRoot";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />}></Route>
        <Route path="/signup" element={<SignupScreen />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default withRoot(App);
