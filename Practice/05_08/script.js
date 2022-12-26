/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */
console.log("This is the Script 5_08");
// find an element and add two different classes.
let listname = document.querySelector(".backpack__name");
listname.classList.add("nothing-free", "yoo-yoo", "experiment-class");
// document
//   .querySelector(".backpack__name")
//   .classList.add("new-class", "end-class", "unknown-class"); // adding multiple classes using js.
console.log("The name of the classes are " + listname.classList);
document
  .querySelector(".backpack__name")
  .classList.remove(
    "yoo-yoo",
    "experiment-class",
    "nothing-free",
    "backpack__name"
  );
console.log("The name of the updated classes are " + listname.classList);

// Remove only one of the new classes.
// add a new attribute to an element.

// set-Attribute : if their is an empty attribute then it will set the value of the attribe.
// set-Attribute : if thier is no attribute then it will create the attribute.
document
  .querySelectorAll("img")
  .forEach((item) => item.setAttribute("alt", "../../1.png/noneedtoprintit"));
//  --> Request the value of the attribute

console.log(document.querySelector("img").getAttribute("alt")); // Getting the value of the attribute.
// working
//  --> Change the valule of the attribute.
document
  .querySelectorAll("img")
  .forEach((item) =>
    item.setAttribute("alt", "Something new which they had never seen")
  );
//  -->Add some inline css to an element by specifying the style property and setting its value.
document.querySelector(".page-header__heading").style.color = "red";
document.querySelector(".page-header__heading").style.backgroundColor = "black";
// Query the style property of an element in the console to get the list of all style properties available.
let stylesoftheheader = document.querySelector(".page-header__heading");
console.log(stylesoftheheader.style);

// All the practice Questions has been done...
//
