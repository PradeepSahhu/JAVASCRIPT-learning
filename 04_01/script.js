/**
 * Use template literals to output HTML
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 *
 */
import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "A Bag that everyone's like ",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);
// everydayPack.color = "green";
// This is template literal and the best way to insert js into your
// HTML and string.
// const content = `
//   <main>
//     <article>
//       <h1>${everydayPack.name}</h1>
//       <ul>
//         <li>Volume: ${everydayPack.volume}</li>
//         <li>Color: ${everydayPack.color}</li>
//         <li>Age:${everydayPack.backpackAge()}</li>
//         <li>Number of pockets: ${everydayPack.pocketNum}</li>
//         <li>Left strap length:${everydayPack.strapLength.left}</li>
//         <li>Right strap length: ${everydayPack.strapLength.right}</li>
//         <li>Lid status:${everydayPack.lidOpen}</li>
//       </ul>
//     </article>
//   </main>
//   `;
// string concatenation.
// AS the string doesn't respect white spaces that's why this is
// not ther preferred way of doing things now template literals are there for a reason. use that it is highly recommendable.
let content = "<h1>" + everydayPack.name + "</h1>";
document.body.innerHTML = content;

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());
