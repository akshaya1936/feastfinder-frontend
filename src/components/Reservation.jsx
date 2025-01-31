import React, { useState } from "react";
import axios from "axios";

const Reservation = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [partySize, setPartySize] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [error, setError] = useState("");

    const handleReservation = async () => {
        console.log(localStorage.getItem('token'))
        console.log("akshaya")
        if (!name || !email || !phone || !partySize || !date || !time) {
            setError("All fields are required!");
            return;
        }

        const reservationData = {
            name,
            email,
            phone,
            guests: partySize,
            date,
            time,
            restaurantId: "random-restaurant-id", // replace with actual restaurantId if needed
        };

        try {
            const token = localStorage.getItem("token");

            const response = await axios.post(
                "http://127.0.0.1:3000/api/reservations",
                reservationData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log("Reservation made successfully:", response.data);
            alert("Reservation successful!");
        } catch (error) {
            console.error("Error creating reservation:", error);
            setError("Failed to create reservation. Please try again.");
        }
    };

    return (
        <div className="reservation-container">
            <h2>Make a Reservation</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="partySize">Party Size:</label>
                <input
                    type="number"
                    id="partySize"
                    value={partySize}
                    onChange={(e) => setPartySize(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="date">Date:</label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="time">Time:</label>
                <input
                    type="time"
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                />
            </div>
            <button onClick={handleReservation}>Reserve</button>
        </div>
    );
};

export default Reservation;

