import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import Account from "./Account/Account";

export default function App() {
  return (
    <>
<BrowserRouter>
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/account" element={<Account />} />
  </Routes>

</BrowserRouter>
    </>
  );
}

