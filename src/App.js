
import Navbar from "./components/Navbar";
import "./App.css";
import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Details from "./components/Details";
import Hearts from "./components/Hearts";
import { checkIfConnected, checkIfJoined } from './connect/connectChain'
const { ethereum } = window;

function App() {

  const [connectedAddress, setConnectedAddress] = useState()
  const [waitlisted, setWaitlested] = useState(false)
  if (ethereum) {
    ethereum.on('accountsChanged', () => {
      setConnectedAddress(ethereum.selectedAddress)
    });
    
  }
  useEffect(() => {
    const checkConnected = async () => {
      await checkIfConnected(setConnectedAddress)
    }
   
    async function checkJoined() {
      await checkIfJoined(setWaitlested)
    }

    checkConnected()
    checkJoined()

    console.log(connectedAddress)
    console.log(waitlisted)

  }, [connectedAddress, waitlisted])

  return (
    <div className="min-h-screen bg-[#2A215F] w-screen overflow-hidden">
      <Navbar connectedAddress={connectedAddress} setConnectedAddress={setConnectedAddress} />

      <Hero/>
      <Welcome connectedAddress={connectedAddress} waitlisted={waitlisted }/>
      <Details/>
      <Hearts />
      
    </div>
  );
}

export default App;
