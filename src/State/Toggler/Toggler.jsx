import { useState } from "react";
import "./Toggler.css";

const Toggler = () => {
  // Alternative
  // const [face, setFace] = useState("😁");

  const [face, setFace] = useState(true);
  const toggleFace = () => {
    // if (face === ":)") {
    //   setFace(":(");
    // } else {
    //   setFace(":)");
    // }

    // Alternative
    // face === "😁" ? setFace("😭") : setFace("😁");

    // Alternative
    setFace(!face);
  };

  return (
    <div>
      {/* <p className="toggler">{face}</p> */}
      <p className="toggler">{face ? "😁" : "😭"}</p>
      <button onClick={toggleFace}>Face Selection</button>
    </div>
  );
};

export default Toggler;
