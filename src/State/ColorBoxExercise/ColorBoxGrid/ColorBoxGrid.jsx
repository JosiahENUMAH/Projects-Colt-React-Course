import { ColorBox } from "../ColorBox/ColorBox";
import { colorData } from "../ColorBox/colorData";
import "./ColorBoxGrid.css";

function ColorBoxGrid({ colors }) {
  const boxes = [];
  for (let i = 0; i < 25; i++) {
    boxes.push(<ColorBox color={colorData} />);
  }
  return <div className="colorBoxGrid">{boxes}</div>;
}

export default ColorBoxGrid;
