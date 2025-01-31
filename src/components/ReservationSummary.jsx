const ReservationSummary = ({ reservations }) => {
  return (
    <div className="reservation-summary">
      <h3>Summary</h3>
      <p>Total Reservations: {reservations.length}</p>
    </div>
  );
};

export default ReservationSummary;
