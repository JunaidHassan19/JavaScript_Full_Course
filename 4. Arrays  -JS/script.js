// ARRAYS IN JS


// {let names = ["ironman", "thor", "hulk", "batman"];
// console.log(names);
// console.log(names.length);
// }

// {
//     let marks = [94, 95, 85, 78, 55];
//     console.log(marks);
//     console.log(marks.length);
// }


// //for loop
// let heroes = ["ironman", "thor", "hulk", "junaid", "batman"];

// for(let s = 0; s < heroes.length; s++ )  {
//     console.log(heroes[s]);
// }

// //for of
// let heroes = ["ironman", "thor", "hulk", "junaid", "batman"];
// for(let hero of heroes) {
//     console.log(hero);
// }


// let cities = ["srinagar", "shopian", "kulgam", "anathnagh", "handwara"];
//  for(let city of cities )   { 
// console.log(city.toUpperCase);   //uppercase
// }


// let marks = [55, 65, 98, 45, 98, 99];
// let sum = 0;

// for (let val of marks)  {
//   sum += val;
// }

// let avg = sum / marks.length;
// console.log(`avg marks of the class = , ${avg}`);


// Array in Js
 //push() --> add to end
//  let fooditems = ["potato", "tomata", "apple", "litchi"];

//  //fooditems.push("chips"); // add one item at end

//  fooditems.push("chips", "lays", "burgur", "pezza"); // add multiple items at end

//  console.log(fooditems);


 

//pap() --> delete from end & return
// let fooditems = ["chips",  "tomata", "potato", "burgur"]

// console.log(fooditems);
// let deleteditem = fooditems.pop();
// console.log(fooditems);
// fooditems.pop("chips");
// console.log("deleted", deleteditem);




//toString() --> converts array to string

// let fooditems = ["chips", "lays", "kurkure", "burgur"];
// console.log(fooditems);
// console.log(fooditems.toString());


// let marks = [77, 88, 99, 44, 55, 66];
// console.log(marks);
// console.log(marks.toString());


//concat()--> join multiple arrays & return result
// let Mheroes = ["thor", "junaid", "ironman", "hulk"];
// let Dcheroes = ["Superman", "Batman"];

// let heroes = Mheroes.concat(Dcheroes);

// console.log(heroes);


//unshift()-->add to start
// let heroes = ["thor", "junaid", "ironman", "hulk"];

// heroes.unshift("Antman");

// console.log(heroes);


//shift-->delete from stsri & return
// let heroes = ["thor", "junaid", "ironman", "hulk"];

// let val = heroes.shift();

// console.log("deleted" , val);

//slice()--> return a piece of the array
// let heroes= ["juanid", "ironman", "thor", "hulk", "captain"];

// console.log(heroes);
// console.log(heroes.slice(0, 3));

//splice--> chanle original array (add, remove, replace)
let arr = [1, 2, 3, 4, 5, 6 , 7 , 8 , 9];

arr.splice(2, 2, 103, 104);
console.log(arr);