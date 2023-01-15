
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Contacs from "./pages/contacs/Contacs";




function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contacs" element={<Contacs/>}/>
    </Routes>
      <Footer/>
    </BrowserRouter>
 
    </>
  );
}

export default App;
