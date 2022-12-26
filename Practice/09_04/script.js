/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const layout = document.querySelector(".grid");

// That's one way of doing this.

// layout.addEventListener(
//   "mouseover",
//   () => {
//     layout.style.border = "solid red";
//   },
//   false
// );

// layout.addEventListener(
//   "mouseout",
//   () => {
//     layout.style.border = "none";
//   },
//   false
// );

// Another way of doing this is through adding classes.

layout.addEventListener(
  "mouseenter", // or mouseenter
  () => {
    // call back function, it could also contain (event)
    layout.classList.add("borderStyle");
  },
  false
);
layout.addEventListener(
  "mouseleave", // or mouseleave
  () => {
    // call back function, it could also contain (event)
    layout.classList.remove("borderStyle");
  },
  false
);

/**
 * Function to generate random hex color
 */
const randColor = () => {
  let hexColor = Math.floor(Math.random() * 16777215).toString(16);
  return hexColor;
};
//************************************* */
let gridCells = document.querySelectorAll(".cell");

console.log(gridCells);

gridCells.forEach((cell) => {
  cell.addEventListener(
    "mouseover",
    () => {
      cell.style.outline = "2px solid black"; // cell.style.border = "solid black"; // it will work for both.
    },
    false
  );

  cell.addEventListener(
    "mouseout",
    () => {
      cell.style.outline = "";
    },
    false
  );

  cell.addEventListener(
    "click",
    () => {
      if (cell.style.backgroundColor) {
        cell.style.backgroundColor = "";
      } else {
        cell.style.backgroundColor = `#${randColor()}`;
      }
    },
    false
  );
});

// /**
//  * set page background using the "d" key on the keyboard
//  */
const body = document.body;
body.addEventListener(
  "keydown",
  (event) => {
    console.log(event.code);
    //     if (event.code === "KeyD") {
    //       body.style.backgroundColor === ""
    //         ? (body.style.backgroundColor = "hsl(201,34%,13%)")
    //         : (body.style.backgroundColor = "");
    //     }
  },
  false
);

/**
 * Set page background using the "d" key on the keyboard
 */
// const body = document.body;
// body.addEventListener("keydown", (event) => {
//   // event.code holds the current key pressed:
//   console.log(event.code);

//   // Test for KeyD (the "d" key)
//   if (event.code === "KeyD") {
//     body.style.backgroundColor === ""
//       ? (body.style.backgroundColor = "hsl(201, 34%, 13%)")
//       : (body.style.backgroundColor = "");
//   }
// });
