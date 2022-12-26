/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

// Creaing javascript objects
const room = {
  area: 20,
  type: "normal",
  people: {
    name: "pradeep",
    age: 19,
    race: "indian",
  },
  TypePeople: 4,
  hostel: "NC-I",
  block: "C-3",
  characters: {
    NameOfPeople: {
      name: "pradeep",
      name2: "soyam",
      name3: "manish",
      name4: "ashutosh",
    },
    skills: "programming",
  },
  living: true,

  peopleHere: function (noOfpeople) {
    this.TypePeople = noOfpeople;
  },
};
console.log(room);
console.log(room.people.name);
console.log(room.characters.NameOfPeople);

console.log(room["people"]["name"]);
//This is used when key is not following the standard rules like key is starting from a number or invalid character.
