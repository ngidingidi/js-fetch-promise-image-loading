"use strict";

// Select image, button element

const image = document.querySelector(".images");
const imgBtn = document.querySelector(".btn");
//console.log(image);

// Finding the number of images in a folder the hard way

function getImages(num, count) {
  fetch(`/img/img-${num}.jpg`)
    .then((res) => {
      if (res.ok) {
        console.log(`The number of images is ${count}`);
        arr.push(count);
        console.log(arr.length);

        // Generate random number and display an image
        // const randomNum = Math.trunc(Math.random() * arr.length + 1);
        // image.src = `/img/img-${randomNum}.jpg`;
        // console.log(randomNum);

        console.log(res);
        //image.src = `/img/img-${count}.jpg`;
      } else throw new Error("Error encountered");
    })
    .catch((err) => console.log(err));
}

let imgIndex = 1;
let arr = [];
let count = 1;
for (let i = 1; i < 7; i++) {
  getImages(i, count);
  count++;
}

function loadImage() {
  imgIndex++;
  image.src = `/img/img-${imgIndex}.jpg`;

  console.log(arr, imgIndex);
  if (imgIndex === arr.length) {
    imgIndex = 0;
  }
}

// use eventListener
imgBtn.addEventListener("click", loadImage);
