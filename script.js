"use strict";

// Select elements to use later: image, button, and image text to display

const image = document.querySelector(".images");
const imgBtn = document.querySelector(".btn");
const imgTxt = document.getElementById("img-text");

// Find the number of images in a folder the hard way, assuming that we do not know ahead of time
// Name your images like img-1.png, img-2.png etc...

// Use the fetch API to make http request to the server, returns a promise that can be fulfilled or rejected
function getImages(num, count) {
  fetch(`/img/img-${num}.png`)
    .then((res) => {
      if (res.ok) {
        console.log(`The number of images is ${count}`);
        arr.push(count);
        console.log(arr.length);
        console.log(res);

        // Display the number of images in the folder in a paragraph
        imgTxt.innerHTML = `There are ${count} images in the folder`;
      } else throw new Error("There was a problem with getting the image");
    })
    .catch((err) => console.log(err));
}

let imgIndex = 1;
let arr = [];
let count = 1;

// i < 10 below is arbitrary, assumes that we have less than 10 images in the folder

for (let i = 1; i < 10; i++) {
  getImages(i, count);
  count++;
}

function loadImage() {
  imgIndex++;
  image.src = `/img/img-${imgIndex}.png`;

  console.log(arr, imgIndex);
  if (imgIndex === arr.length) {
    imgIndex = 0;
  }
}

// use eventListener to load the image when the use clicks button
imgBtn.addEventListener("click", loadImage);
