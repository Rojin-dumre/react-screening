import React, { useReducer } from "react";
import ColorButton from "./ColorButton";
import ColorHistory from "./ColorHistory";
import ColorContext from "./ColorContext";
import { reducer, initialState } from "./reducer";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <ColorContext.Provider value={{ state, dispatch }}>
      <ColorButton />
      <ColorHistory />
    </ColorContext.Provider>
  );
}
