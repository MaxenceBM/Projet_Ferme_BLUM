import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import Header from "./Components/Header";
import EnSavoirPlus from "./screens/EnSavoirPlus";
import CommandePage from "./screens/CommandePage";
import Contact from "./screens/Contact";
import Footer from "./Components/Footer";
import Panier from "./Components/Panier";
//back-end//

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Header" element={<Header />} />
      <Route path="/Commande" element={<CommandePage />} />
      <Route path="/EnSavoirPlus" element={<EnSavoirPlus />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Footer" element={<Footer />} />
      <Route path="/Panier" element={<Panier />} />

      
    </Routes>
  );
}

export default App;
