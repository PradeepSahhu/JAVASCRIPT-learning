/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import books from "./books.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);
const Books = new books("sanjima Rana", 1000, 100, "programming");
const Books1 = new books("Ravi Kant", 100, 120, "programming");
const Books2 = new books("nothing ", 2000, 150, "programming");
const Books3 = new books("sanjima Rana", 400, 200, "programming");
const Books4 = new books("sanjima Rana", 300, 180, "programming");

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());
console.log(Books);
console.log(Books1);
console.log(Books2);
console.log(Books3);
console.log(Books4);
