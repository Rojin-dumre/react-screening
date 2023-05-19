import React, { useContext } from "react";
import ColorContext from "./ColorContext";
import { getRandomColor } from "./reducer";

function ColorButton() {
  const { state, dispatch } = useContext(ColorContext);
  
  function handleClick() {
    let color = getRandomColor();
    if (state.buttonColor === 'blue') {
      color = 'green';
    }
    dispatch({ type: "CHANGE_COLOR", color });
  }
  
  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: state.buttonColor }}
    >
      Click me
    </button>
  );
}

export default ColorButton;
