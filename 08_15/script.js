/**
 * The map() array method.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

const stuff = ["piggy", "headlamp", "pen", "pencil", "eraser", "water bottle"];

const article = document.querySelector("article");
let stuffList = document.createElement("ul");

// map() array method
const stuffItems = stuff.map((item) => {
  // console.log(item);
  let listItem = document.createElement("li");
  listItem.innerHTML = item;
  // stuffList.append(listItem);
  return listItem;
});
// console.log("stuff" + stuff);

stuffItems.forEach((item) => {
  stuffList.append(item);
});
// console.log("listItems: " + stuffItems);

article.append(stuffList);
