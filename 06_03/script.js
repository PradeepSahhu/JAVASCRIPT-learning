/**
 * Scope and the var statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 */

// var -- is the global variale and it will be accessed from anywhere in the program.

let color = "black"; // initial value of color is black

// function to change the color of heading.
function headingColor() {
  let headingcolor = "red";
  document.querySelector(".title").style.color = headingcolor;
  console.log("The color is : " + headingcolor);
}

//
document.querySelector(".left").style.backgroundColor = color; // here the initial value of the color is implemented
headingColor(); // calling the function, now the value of the color is blue.
// whenever the function is being called the functin is executed. and only this will change the value of the color.

document.querySelector(".left .color-value").innerHTML = color;

// console.log("The global color is : ", headingcolor); // the js stops working here as their is an error here. so it will execute the default color.
// color = "blue";
document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;

// document.querySelector(".right"); // This the heading function.

// var is the gloabal variable however, let is the block scope level variable.
// var color ;
// let color ;
// these are two different variables. one is local scope tht is the function. and another is the global scope.

// use let whenever we declare variables.
