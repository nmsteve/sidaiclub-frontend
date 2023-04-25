import Navbar from "./components/Navbar";
import "./App.css";
import React from "react";
// import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
// import { AiOutlineMail } from "react-icons/ai";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Details from "./components/Details";
// import Footer from "./components/Footer";
import Hearts from "./components/Hearts";

function App() {
  return (
    <div className="min-h-screen bg-[#2A215F] w-screen overflow-hidden">
      <Navbar />

      <Hero />

      <Welcome />

      <Details />

      <Hearts />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
