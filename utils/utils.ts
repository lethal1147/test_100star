export const colorNameToHex = (colorName: string): string => {
  const colors: { [key: string]: string } = {
    white: "#FFFFFF",
    silver: "#C0C0C0",
    gray: "#808080",
    red: "#FF0000",
    black: "#000000",
    blue: "#0000FF",
  };
  return colors[colorName.toLowerCase()] || "#CCCCCC";
};
