import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopPage from "./Components/ShopPage";
import NewArrivals from "./Components/NewArrivals";
import Contact from "./Components/Contact";
import AddCard from "./Components/AddCard";
import SignUp from "./Components/SignUp";
import Login from "./Login";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ShopPage" element={<ShopPage />} />
          <Route path="/NewArrivals" element={<NewArrivals />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/AddCard" element={<AddCard />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
