let arraya = ["pradeep sahu", "Soyam Gupta", "Surbhi", "Harsh"];

const addingdata = (inputdata) => {
  arraya.push(inputdata);
  //   return arraya;
};
for (let i = 0; i < 5; i++) {
  let inputdata = prompt("Enter your data");
  addingdata(inputdata);
}
console.log(arraya);
