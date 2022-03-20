const images = [
    "img_0.jpg","img_1.jpg","img_2.jpg","img_3.jpg", "img_4.jpg", "img_5.jpg","img_6.jpg","img_7.jpg",
];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

bgImage.style.width = window.innerWidth;
bgImage.style.height = window.innerHeight;


