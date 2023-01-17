
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/admin/Admin";
//pages
import {Home, Contact} from "./pages/";
//componets
import { Footer, Header } from "./components";


function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/admin" element={<Admin/>}/>
    </Routes>
      <Footer/>
    </BrowserRouter>
 
    </>
  );
}

export default App;
