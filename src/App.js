import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {
  const [Mode,setMode]=useState("light");
  const toggleMode=()=>{
    if(Mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="black";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    
    <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze below" mode={Mode}/>
    </div>
    </> 
  );
}

export default App;
