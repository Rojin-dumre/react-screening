const colors = ["red", "blue", "green", "black", "orange"];
let prevColor = '';

export function getRandomColor() {
  let color = colors[Math.floor(Math.random() * colors.length)];
  while (color === prevColor) {
    color = colors[Math.floor(Math.random() * colors.length)];
  }
  prevColor = color;
  return color;
}

export const initialState = {
  buttonColor: "red",
  colorHistory: []
};

export function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_COLOR":
      return {
        ...state,
        buttonColor: action.color,
        colorHistory: [...state.colorHistory, action.color]
      };
    default:
      return state;
  }
}
