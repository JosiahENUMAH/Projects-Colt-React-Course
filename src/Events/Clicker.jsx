import { useState } from "react";

export default function Clicker() {
  const [state, setState] = useState(1);

  const increment = () => {
    setState(state + 1);
  };
  return (
    <div>
      <p>Click the button</p>
      <button onClick={increment}>Click Me!</button>
      <p>{state}</p>
    </div>
  );
}
