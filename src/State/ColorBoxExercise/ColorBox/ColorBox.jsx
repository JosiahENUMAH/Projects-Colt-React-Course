import { useState } from "react";
import "./ColorBox.css";

const choice = (arr) => {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
};

export const ColorBox = ({ color }) => {
  const colorIndex = Math.floor(Math.random() * color.length);
  const newColor = color[colorIndex];
  // const [randColor, setRandColor] = useState(newColor);
  const [randColor, setRandColor] = useState(choice(color));

  const changeColor = () => {
    // setRandColor(newColor);
    setRandColor(choice(color));
  };

  return (
    <div
      className="colorBox"
      style={{ backgroundColor: randColor }}
      onClick={changeColor}
    ></div>
  );
};
