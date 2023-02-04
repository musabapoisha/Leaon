"use strict";

let menu = document.querySelector("header nav .links .menu");
let ul = document.querySelector("header nav .links ul");

menu.addEventListener("click", function (e) {
  ul.classList.toggle("hidden");
});
console.log(menu);
