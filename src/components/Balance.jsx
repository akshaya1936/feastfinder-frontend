const Balance = ({ totalGuests }) => {
  return (
    <div className="balance">
      <h3>Total Guests</h3>
      <p>{totalGuests}</p>
    </div>
  );
};

export default Balance;
