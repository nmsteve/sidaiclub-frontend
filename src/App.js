
import Navbar from "./components/Navbar";
import "./App.css";
import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Welcome from "./components/1.Welcome";
import History from "./components/2.History";
import Charity from "./components/3.Charity";
import Club from "./components/4.Club";

import { checkIfConnected, checkIfJoined } from './connect/connectChain'
import Art from "./components/5.Art";
const { ethereum } = window;

function App() {

  const [connectedAddress, setConnectedAddress] = useState()
  const [waitlisted,setWaitlisted] = useState(false)
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
      await checkIfJoined(setWaitlisted)
    }

    checkConnected()
    checkJoined()

    //console.log(connectedAddress)
    //console.log(waitlisted)

  }, [connectedAddress, waitlisted])

  return (
    <div className="min-h-screen bg-[#2A215F] w-screen overflow-hidden">
      <Navbar connectedAddress={connectedAddress} setConnectedAddress={setConnectedAddress}/>
      <Hero />
      <Welcome connectedAddress={connectedAddress} waitlisted={waitlisted} />
      <History />
      <Charity/>
      <Club />
      <Art/>
      
      
    </div>
  );
}

export default App;
