//this is a single line comment print "hello world"
console.log("hello world!");

/*this is a Multi line comment 
errtrhr
rthrtyu
rturu
rturu5tj*/
console.log("hello world!");

// Arithmetic Operaters
let A = 5;
let B = 4;
console.log("A =", A);
console.log("B =", B);
console.log("A + B =" , A + B);
console.log("A - B =" , A - B);
console.log("A / B =" , A / B);
console.log("A * B =" , A * B);
//Modulus %
console.log("A % B =" , A % B);
//Exponentiation **
console.log("A ** B =" , A ** B);

// unary Operaters
let x = 3;
let y = 6;

console.log("x = ", x, " & y = " , y);
// x++;
// console.log("x = " , x);
x--;
console.log("x = " , x); 

// asignement operaters

{
    let a = 5;
    let b = 2;
a += 4; //a = a + 4
console.log("a = ", a); //9
}
{
    let a = 5;
    let b = 2;
a -= 4; //a = a - 4
console.log("a = ", a); //1
}
{
    let a = 5;
    let b = 2;
a *= 4; //a = a * 4
console.log("a = ", a); //20
}
{
    let a = 5;
    let b = 2;  
a /= 4; //a = a / 4
console.log("a = ", a); //1.25
}
{
    let a = 5;
    let b = 2;
a %= 4; //a = a % 4
console.log("a = ", a); //1
}
{
    let a = 5;
    let b = 2;
a **= 4; //a = a ** 4
console.log("a = ", a); //625
}

// comparison operaters
{
    let a = 5;
    let b = 2;
    console.log("5 == 2", a == b); //false
}
{
    let a = 5;
    let b = 5;
    console.log("5 == 5", a == b); //true
}
{
    let a = 5;
    let b = 2;
    console.log("5 != 2", a != b); //true
}
{
    let a = 5;
    let b = 5;
    console.log("5 != 5", a != b); //false
}
{
let a = 5; //number
let b = "5"; //string -> number
console.log("a == a", a == b); //true
}
{
    let a = 5;
    let b = 2;
    console.log("5 ===2", a === b); 
}
{
    let a = 5;
    let b = "5";
    console.log("5 ===5", a === b); //false
}
{
let a = 5;
let  b = 5;
console.log("a === b", a === b); //trure
}
{
let a = 5;
let  b = 5;
console.log("a !== b", a !== b); //False
}
{
let a = 5;
let  b = "5";
console.log("a !== b", a !== b); //trure
}
{
let a = 5;
let  b = 3;
 console.log("5 >3 =", a > b); //trure
}
{
let a = 5;
let  b = 3;
console.log("a < b", a < b); //False
}
{
 let a = 5;
let  b = 3;
console.log("a >= b", a >= b); //trure
}
{
let a = 5;
let  b = 3;
console.log("a <= b", a <= b); //False
 }

//  Logical Operators
{
let a =6;
let b = 5;

let cond1 = a < b ; //true
let cond2 = a ===6 ; //true
console.log("cond1 && cond2 =" , cond1 && cond2); //Logical AND &
}
{
 let a =6;
 let b = 5;

 let cond1 = a < b ; //true
 let cond2 = a ===6 ; //true
console.log("cond1 || cond2 =" , cond1 || cond2); //LOgical OR ||
}
{
 let a =6;
 let b = 5;

 let cond1 = a < b ; //true
//  let cond2 = a ===6 ; //true
 console.log("!(6<5) =" , ! (a===6)); //logical NOT !
}

// Conditional statements

    let age = 16;//if statements

    if ( age > 18) {
        console.log(" You can Vote"); //if statements
    }

    if ( age < 18) {
        console.log("You Cannot Vote");//if statements
    }

let mode = "light";
let color;//if statements

if (mode ==="dark") {
    color = "black";//if statements
}

if (mode === "light") {
    color = "wihte" ;
}

console.log(color);//if statements


{
let mode = "dark";
let color;   //if else

if (mode ==="dark") {
    color = "black";
} else {
    color = "white"
}
console.log(color);//if else
}

{
    let age = 16;
    if (age >= 18) {
        console.log("Vote");
    } else {
        console.log("cannot Vote");//if else
    }
}


let num = 199;

if (num % 2 === 0) {
    console.log(num , " is Even");
} else {
    console.log(num ," is Odd");//if else
}

{
let mode = "blue";
let color;

if (mode === "dark") {
    color = "black"; 
} else if (mode === "blue") {
    color = "blue";
} else if (mode === "pink") {
    color = "pink";
} else {
    color = "white";
}

console.log(color);
}

//operators in js
//Ternary opertors condition ? true outout : false output
{
    let age = 18;
    let result = age >= 18 ? "Adult" : "Not Adult";
    console.log(result);
}
// let name = prompt("Name!");
// console.log(name);
// {
// let num = prompt ("Enter a Number which is multiple of 5");

// if (num % 5 === 0) {
//     console.log(num , "is multiple of 5");
// } else {
//     console.log(num , "is not multiple of 5")
// }
// }


let score = prompt ("enter a number between (0 - 100)");
let grade;

if (score >= 90 && score <= 100){
 grade = "A";
} else if (score >= 70 && score <= 89) {
    grade = "B";
} else if (score >= 50 && score <= 69) {
    grade = "C"
} else if (score >= 30 && score <= 49){
    grade ="D"
} else if ( score >= 0 && score <= 29)
    grade = "Fail";

console.log(grade);
