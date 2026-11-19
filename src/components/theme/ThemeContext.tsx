import React, { createContext, useState, ReactNode } from "react";

export const ThemeColors = {
  primary: "brown",
  blue: "blue",
  red: "red",
  purple: "purple",
  orange: "orange",
  green: "green",
};

interface ThemeColorContextType {
  color: string;
  changeColor: (color: string) => void;
}

export const ThemeColorContext = createContext<ThemeColorContextType>({
  color: ThemeColors.blue,
  changeColor: () => {},
});

export default function ThemeColorWrapper({ children }: { children?: ReactNode }) {
  const [color, setColor] = useState<string>(ThemeColors.blue);

  function changeColor(newColor: string) {
    setColor(newColor);
  }

  return (
    <ThemeColorContext.Provider
      value={{ color, changeColor }}
    >
      {children}
    </ThemeColorContext.Provider>
  );
}
