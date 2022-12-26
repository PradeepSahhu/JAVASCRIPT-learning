/**
 * Challenge: Add a new element
 * - In JavaScript, create a new element to hold a navigation menu
 * - Add an unordered list and a series of no less than five links to the list
 * - Use single words like “home”, “about”, etc for the list items and set the src attribute to # for simplicity
 * - Add the new navigation element to the DOM directly after the header
 * - Write basic CSS and add classes as necessary to create a horizontal layout for the menu.
 * - A tip: Use either display flex or display grid to create the horizontal menu.
 */

import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  "../assets/images/everyday.svg"
);

const content = `
  
    <figure class="backpack__image">
      <img src=${everydayPack.image} alt="" />
    </figure>
    <h1 class="backpack__name">Everyday Backpack</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        everydayPack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        everydayPack.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        everydayPack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        everydayPack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        everydayPack.strapLength.right
      } inches</span></li>
      <li class="packprop backpack__lid">Lid status:<span> ${
        everydayPack.lidOpen
      }</span></li>
    </ul>
  
`;

const main = document.querySelector(".maincontent");

const newArticle = document.createElement("article");
newArticle.classList.add("backpack");
newArticle.setAttribute("id", "everyday");
newArticle.innerHTML = content;

main.append(newArticle);

// making a navigation bar.

let navigation_content = `
<li><a href=""> Home </a></li>
<li><a href=""> Education </a></li>
<li><a href=""> Pack </a></li>
<li><a href=""> Contact </a></li>
<li><a href=""> Next </a></li>
<li><a href=""> Exit </a></li>
`;
// navigation_content.style.display = "grid";
let newNav = document.createElement("nav");
newNav.classList.add("navigation-bar");
// newNav.style.display = "grid";
let navlist = document.createElement("ul");
// navlist.style.display = "flex"; // to make our navigatino bar horizontal.
navlist.innerHTML = navigation_content;
// newNav.style.backgroundColor = "green";
// newNav.style.color = "white";
// newNav.style.padding = "0px 190px";
// newNav.style.margin = "10px 100px";

newNav.append(navlist);
// newNav.innerHTML = navigation_content;

let main_body = document.querySelector(".siteheader");
main_body.append(newNav);
