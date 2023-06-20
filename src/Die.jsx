export default function Die({ numSides = 6 }) {
  const roll = Math.floor(Math.random() * numSides) + 1;
  console.log(numSides);
  return (
    <>
      <p>Die roll: {roll}</p>
      <p>numSides: {numSides}</p>
    </>
  );
}
