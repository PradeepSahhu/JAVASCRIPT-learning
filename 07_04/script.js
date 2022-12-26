/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

// shift to remove the first element and return it and pop() to remove the last element and return it.
let arraay = ["Pradeep", 45, true, 34.2, "Aparajita", 19, "Soyam", "surbhi"]; // The original array.

let last_element = arraay.pop(); // Removing the last element of the array and getting it into last_element.

console.log(arraay);
console.log("last Element is:" + last_element);

// Using unshift operator to place the last operator in the first positon of the array.

arraay.unshift(last_element);
console.log("After the shifting of the element :" + arraay);
// console.log(arraay);

// Sorting the array.

arraay.sort();
console.log("Sorting done");
console.log(arraay);

//using the find() method to find the element in the array.
// let word = prompt("Enter the word");
// let return = arraay.find(word);
let found = arraay.find((element) => element == "Pradeep"); // correct syntax of the find function.
// arraay.pop(found); Not work as this method only removes the last element from the array.
console.log(found);

// to remove a specific element from the array we will be splice() method.
// its syntax is splice(start, deletioncount, item1, item2, itemN);
console.log(arraay.indexOf(found));
arraay.splice(arraay.indexOf(found), 1); // this method doesn't remove the word.
// arraay.remove(found);

console.log(`Array without "${found}" : ` + arraay);
