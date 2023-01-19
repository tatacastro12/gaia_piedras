import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//pages
import { Home, Contact, Login, Register, Reset  } from "./pages/";
//componets
import { Footer, Header } from "./components/";




function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
