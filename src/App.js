import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./Main/Main";
import "./App.css";

export default function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Main />
    </div>
  );
}
