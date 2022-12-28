const images = [
  "https://images6.alphacoders.com/126/1264048.jpg",
  "https://images6.alphacoders.com/772/772883.png",
  "https://images2.alphacoders.com/789/789346.png",
  "https://images6.alphacoders.com/744/744722.png",
  "https://images5.alphacoders.com/708/708013.png",
  "https://images8.alphacoders.com/665/665379.jpg",
  "https://images3.alphacoders.com/673/673911.png",
  "https://images6.alphacoders.com/606/606963.png",
  "https://images2.alphacoders.com/644/644159.jpg",
  "https://images4.alphacoders.com/879/87958.jpg",
  "https://images4.alphacoders.com/644/644184.jpg",
  "https://images.alphacoders.com/634/634942.jpg",
  "https://images.alphacoders.com/644/644146.jpg",
  "https://images2.alphacoders.com/113/1134490.jpg",
];
const getImage = () => {
  return images[Math.floor(Math.random() * images.length)];
};
export default getImage;
