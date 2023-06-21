const ClickerExercise = ({ message, buttonText }) => {
  const handleButtonClick = () => {
    alert(message);
  };

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleButtonClick}>{buttonText}</button>
    </div>
  );
};

export default ClickerExercise;
