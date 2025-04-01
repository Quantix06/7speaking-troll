import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Pages/LoginForm";
import Resolve from "./Pages/Resolve";
import Cesar from "./Pages/Cesar";
import EndingPage from "./Pages/EndingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/cesar" element={<Cesar />}></Route>
        <Route path="/resolve" element={<Resolve />} />
        <Route path="/ending-page" element={<EndingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
