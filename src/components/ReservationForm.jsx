import React, { useState, useEffect } from 'react';

const ReservationForm = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [partySize, setPartySize] = useState(1);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [selectedRestaurantId, setSelectedRestaurantId] = useState('');

  useEffect(() => {
    // Fetch restaurants from your backend
    fetch("http://localhost:3000/api/restaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reservationData = {
      name,
      email,
      phone,
      date,
      time,
      guests: partySize,
      restaurantId: selectedRestaurantId,  // Make sure the restaurant ID is included
    };

    try {
      const response = await fetch('http://localhost:3000/api/reservations', {
        method: 'POST',
        headers: {  
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,  // Use token from local storage
        },
        body: JSON.stringify(reservationData),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Reservation made successfully');
      } else {
        alert('Failed to create reservation. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while making the reservation');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Phone:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div>
        <label>Party Size:</label>
        <input type="number" value={partySize} onChange={(e) => setPartySize(e.target.value)} />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div>
        <label>Time:</label>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      </div>
      <div>
        <label>Choose Restaurant:</label>
        <select
          value={selectedRestaurantId}
          onChange={(e) => setSelectedRestaurantId(e.target.value)}
        >
          <option value="">Select a restaurant</option>
          {restaurants.map((restaurant) => (
            <option key={restaurant._id} value={restaurant._id}>
              {restaurant.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Reserve</button>
    </form>
  );
};

export default ReservationForm;
