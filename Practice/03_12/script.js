/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import room from "./app.js";
import Backpack from "./Backpack.js";
import Name from "./index.js";

const Room = new room(
  "pradeep sahu",
  201,
  10284,
  "Brown",
  55,
  "male",
  5.7,
  903,
  "NC",
  "c-3",
  false,
  false
);

const freeBag = new Backpack("free bag", 30, "gray", 10, 20, 10, false);

const Pradeep = new Name("Pradeep sahu", 10284, 201, 100000000);

console.log("The Pradeep object is:", Pradeep);
Pradeep.setNever(false);
console.log("The Pradeep's never is is:", Pradeep.never);

console.log("The Room object is : ", Room);
console.log("The Room never value is : ", Room.never);
console.log("The BackPack object is", freeBag);

// done makeing objects and its template ( called classes).
// there are two sections in it. first is constructor which runs automatically and
// and it contains class parameters which later becomes class properties.
// it is not necessary to keep the name of the class properties as same as the class
// parameters. it is just for our sake.

// class properties are the characteristics of the object like will the class have as his property.
// class method is what the class can do --> this is called class method. it is like just normal function.
