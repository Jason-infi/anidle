const colors = ["indigo", "pink", "purple", "orange", "red", "green", "lime"];
const getColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
export default getColor;
