// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import RestaurantList from "./components/RestaurantList";
import Reservation from "./components/Reservation";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/restaurants" element={<RestaurantList />} />
          <Route path="/reserve/:restaurantId" element={<Reservation />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

