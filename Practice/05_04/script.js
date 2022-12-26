/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

let backpack = document.querySelector(".siteheader .site-title");
backpack.style.backgroundColor = "red";
backpack.style.fontSize = 100;
backpack.style.color = "white";
backpack.style.padding = 20;

document
  .querySelectorAll(".page-header")
  .forEach((item) => (item.style.backgroundColor = "orange"));
// mainbody.style.backgroundColor = "blue";

var writtenpara = document.querySelector(".page-header__heading");
writtenpara.style.backgroundColor = "green";

var backpacklogo = document.querySelectorAll(".backpack");
backpacklogo.forEach((item) => (item.style.backgroundColor = "purple"));

var backpackheading = document.querySelector(".backpack .backpack__name");
backpackheading.innerHTML = "Everyone Love";

document
  .querySelectorAll(".backpack .feature")
  .forEach((item) => (item.style.color = "red"));

document
  .querySelectorAll(".backpack .lid-toggle")
  .forEach((item) => stylingit(item));

// This is the trial function. that works.
function stylingit(item) {
  (item.style.backgroundColor = "blue"),
    (item.style.fontSize = 100),
    (item.style.color = "green");
}
// lid.style.backgroundColor = "blue";
// lid.style.fontSize = 100;
// lid.style.color = "green";

var forml = document.querySelectorAll(".backpack .leftlength");

var formr = document.querySelectorAll(".backpack .rightlength");

// forml

forml.forEach((item) => (item.style.backgroundColor = "yellow"));
formr.forEach((item) => (item.style.backgroundColor = "red"));

forml.forEach((item) => console.log(item));
// forml.style.fontSize = 100;
// forml.style.backgroundColor = "black";
// formr.style.backgroundColor = "black";

var footerline = document.querySelector(".sitefooter");
footerline.style.backgroundColor = "blue";
footerline.style.color = "black";
footerline.style.fontWeight = 800;
