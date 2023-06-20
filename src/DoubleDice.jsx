export default function DoubleDice({
  color = "blue",
  text = "Fuck Off",
  foods,
}) {
  const num1 = Math.floor(Math.random() * 3) + 1;
  const num2 = Math.floor(Math.random() * 3) + 1;
  const isWinner = num1 === num2;
  const styles = { color: isWinner ? "green" : "red" };
  return (
    <div className="DoubleDice" style={styles}>
      <h2>Double Dice</h2>
      {isWinner && <h3>You Win!</h3>}
      <h4 style={{ color: color }}>{text}</h4>
      <p>Num1: {num1}</p>
      <p>Num2: {num2}</p>
      <ul>
        {foods?.map((food, index) => {
          return (
            <li key={index} style={{ color: "grey" }}>
              {food}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
