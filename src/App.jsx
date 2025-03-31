import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Pages/LoginForm";
import Password from "./Components/Password";
import Cesar from "./Pages/Cesar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/cesar" element={<Cesar />}></Route>
        <Route path="/password" element={<Password />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
