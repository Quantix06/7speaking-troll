import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Password from "./Components/Password";
import Resolve from "./Components/Resolve";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/Cesar" element={<HomePage/>}></Route>
        <Route path="/Password" element={<Password />} /> 
        <Route path="/Resolve" element={<Resolve/>} /> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;