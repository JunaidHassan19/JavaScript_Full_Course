//Loops In Js --> for loop , while loop, do while loop.
//print 1 - 5
// for(let count = 1; count <=5; count++) {
// console.log("this is the third chapter of Js");
// }


// //calcilate sum of 1 + n
// let sum = 0;
// let n = 100
// for (let i=1; i<=n; i++) {
//     sum = sum+i; //sum = 0+1
// }
// console.log("sum =", sum);

// //print 1 to 5
// for (let i = 1; i <= 5; i++) {
//     console.log("i =" , i)
// }

//Infinite loop : a loop that never ends 
//never add this loop in your code******


//while loop
// let i = 1;
// while( i <=10 ) {
//     console.log("i =" , i);
//     i++;
// }


//do while loop
// let i = 1;
// do {
//     console.log("i = ", i);
//     i++;
// }while(i <= 5);

//for-of loop
// let str = "Javascript";
// let size = 0;

// for ( let val of str) {
//     console.log("val =", val);
//     size++;
// }
// console.log("String Size = ", size);


//for-in loop
// let student = {
//     name: "Javascript",
//     age : 50,
//     star: 4.6,
//     ispass : true
// };

// for(let key in student){
// console.log("key = ",key, "value=", student[key]);
// }


//practice Qs1
// for (let num =0; num <=100; num++){
//     if (num%2 ===0)//even number
//     console.log("num =", num);
// } 

// for (let num =0; num <=100; num++){
//     if (num%2 !==0)//Odd number
//     console.log("num =", num);
// } 

//practice Qs2
// let gamenum = 19;
// let usernum = prompt("Guess the Game Number !");

// while (usernum != gamenum) {
//     usernum = prompt("You enterd wrong Number, Try Again !");
// }
// console.log("congratulations, you entred the right number");


//strings in Js 
// let str = "third chapter";
// let str2 = 'of Javascript';
// console.log(str , str2);
// console.log(str[6]);


//template literals in JS 
// let sentance = `this is a template literals`; // back tick
// console.log(sentance);



// let obj = {
//     item: "pen",
//     price: 10,
// };

// let output = `the price of ${obj.item} is ${obj.price} rupees` ;
// console.log(output);
// console.log("the price of", obj.item, "is", obj.price, "rupees");



// console.log("this is\nthe third\nchapter of\nJavascript"); // \n next line
// console.log("this is\tthe third\tchapter of\tJavascript"); // \t tab space

// let str = "this is the third chapter of Javascript";
// console.log(str.length);


// let str = " javascript";
// let newstr = str.toUpperCase(); // upper case
// console.log(str);
// console.log(newstr);



// let str = " JAVASCRIPT";
// let newstr = str.toLowerCase(); // Lower case
// console.log(str);
// console.log(newstr);


// let str = "    Javascript    ";
// console.log(str.trim());


// let str = "javascript";
// console.log(str.slice(0, 8));

// let str1 = "java";
// let str2 = "script";
// let res = str1.concat(str2);
// // let res = str1 + str2;
// console.log(res);

// {
// let str = "javascript";

// console.log(str.replace("script", "java")); // mul. for ALL
// }

// let str = "javascript";
// console.log(str.charAt(4));


let fullname = prompt("enter your fullname without spaces");

let username= "@" + fullname + fullname.length;
console.log(username);