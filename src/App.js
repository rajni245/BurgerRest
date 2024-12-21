import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homee from "./components/Homee"; // Correct path for importing
import Naavbar from "./components/Naavbar"; // Ensure this path is correct
import Ourmenu from "./components/Ourmenu";
import Offer from "./components/Offer";
import About from "./components/About";
import Franchisee from "./components/Franchisee";
import Contact from "./components/Contact";
import Gmapcomponent from "./components/Gmapcomponent";
import ItemCard from "./components/ItemCard";
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <Naavbar />
      <Routes>
        {/* Default route to show Homee */}
        <Route path="/" element={<Homee />} />
        <Route path="/Ourmenu" element={<Ourmenu />} />
        <Route path="/Offer" element={<Offer />} />
        <Route path="/About" element={<About />} />
        <Route path="/Franchisee" element={<Franchisee />} />
        <Route path="/Contact" element={<Contact />} />

        {/* Catch-all route to redirect any unknown path to Home */}
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/Gmapcomponent" element={<Gmapcomponent />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/ItemCard" element={<ItemCard />} />
      </Routes>
    </Router>
  );
}

export default App;
