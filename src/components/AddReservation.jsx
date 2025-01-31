import { useState } from 'react';

const AddReservation = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [partySize, setPartySize] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !partySize || !date) {
      setError('All fields are required!');
      return;
    }

    if (parseInt(partySize) <= 0) {
      setError('Party size must be greater than 0!');
      return;
    }

    setError('');
    onAdd({ id: Math.random(), name, partySize: parseInt(partySize), date });
    setName('');
    setPartySize('');
    setDate('');
  };

  return (
    <div className="add-reservation">
      <h3>Add Reservation</h3>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Party Size:</label>
          <input
            type="number"
            value={partySize}
            onChange={(e) => setPartySize(e.target.value)}
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddReservation;


