export const colorNameToHex = (colorName: string): string => {
  const colors: { [key: string]: string } = {
    white: "#f5f5f3",
    silver: "#C0C0C0",
    gray: "#808080",
    red: "#FF0000",
    black: "#1d1916",
    blue: "#0000FF",
    green: "#00c94f",
  };
  return colors[colorName.toLowerCase()] || "#ffc9c9";
};
