import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./RestaurantList.css"; // Import CSS for styling

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setRestaurants([
      { id: 1, name: "Spicy Delights", emoji: "🌶️", color: "#FF5733" },
      { id: 2, name: "Tandoori Treats", emoji: "🍢", color: "#C70039" },
      { id: 3, name: "Sushi Paradise", emoji: "🍣", color: "#1E90FF" },
      { id: 4, name: "Burger Haven", emoji: "🍔", color: "#FFBF00" },
      { id: 5, name: "Pasta Palace", emoji: "🍝", color: "#A569BD" },
      { id: 6, name: "Mexican Fiesta", emoji: "🌮", color: "#FF8C00" },
      { id: 7, name: "Seafood Sensation", emoji: "🦐", color: "#00796B" },
      { id: 8, name: "Vegan Bites", emoji: "🥗", color: "#4CAF50" },
      { id: 9, name: "Steakhouse Supreme", emoji: "🥩", color: "#8B0000" },
      { id: 10, name: "Dessert Kingdom", emoji: "🍰", color: "#FFC0CB" },
    ]);
  }, []);

  const handleSelectRestaurant = (id) => {
    navigate(`/reserve/${id}`);
  };

  return (
    <div className="restaurant-container">
      <h2>Select a Restaurant</h2>
      <div className="restaurant-grid">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="restaurant-card"
            style={{ backgroundColor: restaurant.color }}
            onClick={() => handleSelectRestaurant(restaurant.id)}
          >
            <span className="restaurant-emoji">{restaurant.emoji}</span>
            <h3>{restaurant.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;


