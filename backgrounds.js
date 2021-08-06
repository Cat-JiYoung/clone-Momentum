const images = ["0.jpeg","1.jpeg","2.jpeg"];

const chosenImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //js에서 html을 만들어준거임

bgImage.src = `img/${chosenImages}`;
bgImage.id = "bgImage";

document.body.appendChild(bgImage); //body에 append시키는거임