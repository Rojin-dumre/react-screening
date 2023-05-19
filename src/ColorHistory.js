import React, { useContext } from "react";
import ColorContext from "./ColorContext";

function ColorHistory() {
  const { state } = useContext(ColorContext);
  
  return (
    <div>
      {state.colorHistory.map((color, index) => (
        <span key={index} style={{ color }}>
          {color}
          {index < state.colorHistory.length - 1 && ", "}
        </span>
      ))}
    </div>
  );
}

export default ColorHistory;
