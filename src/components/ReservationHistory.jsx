const ReservationHistory = ({ reservations, onDelete }) => {
  return (
    <div className="reservation-history">
      <h3>Reservation History</h3>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            <div>
              <span>{reservation.name}</span> - <span>{reservation.partySize} Guests</span> -{' '}
              <span>{reservation.date}</span>
            </div>
            <button onClick={() => onDelete(reservation.id, reservation.partySize)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationHistory;
