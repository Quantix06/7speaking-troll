import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Pages/LoginForm";
import Password from "./Components/Password";
import Resolve from "./Components/Resolve";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/cesar" element={<LoginForm />}></Route>
        <Route path="/password" element={<Password />} />
        <Route path="/resolve" element={<Resolve />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
