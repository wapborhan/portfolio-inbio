import React, { createContext, useState } from "react";

export const ThemeColors = {
  primary: "brown",
  blue: "blue",
  red: "red",
  purple: "purple",
  orange: "orange",
  green: "green",
};

const ThemeColorContext = createContext({
  color: ThemeColors.blue,
  changeColor: (color) => {},
});

export default function ThemeColorWrapper(props) {
  const [color, setColor] = useState(ThemeColors.blue);

  function changeColor(color) {
    setColor(color);
  }

  return (
    <ThemeColorContext.Provider
      value={{ color: color, changeColor: changeColor }}
    >
      {props.children}
    </ThemeColorContext.Provider>
  );
}
