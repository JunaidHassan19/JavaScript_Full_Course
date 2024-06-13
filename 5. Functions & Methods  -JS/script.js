// Functions In Js
/*block of code that performs
 a specific TextTrackList,
  can be invoked whenever needed*/
{
  function myfunction() {
    console.log("this is a js course");
    console.log("i am learning Js :)");
  }

  myfunction(); //we can call this function in multi. times
}

// *********************************************************************************
{
  function myfunction(msg) {
    //parameter -> input
    console.log(msg);
  }

  myfunction("this is js course"); //argument
}
//***********************************************************************************/

// function ->2 numbers, sum
{
  function sum(a, b) {
    console.log(a + b);
  }
  sum(2, 3);
}
//OR

{
  function sum(x, y) {
    s = x + y;
    console.log("after return");
    return s;
    console.log("before return"); // this line cannot excuted
  }
  let val = sum(50, 50);
  console.log(val);
}

//************************************************************************/

//ARROW FUNCTIONS
//compact way  to writing a function

/*const functionName = (param1,param2...)=>{
    do some work
}*/

// sum function
{
  function sum(a, b) {
    return a + b;
  }
  const arrowSum = (a, b) => {
    // console.log(a + b);
    return a + b;
  };
}

/******************************************************** */
//multiplication function
{
  function mul(a, b) {
    return a * b;
  }
  const arrowMul = (a, b) => {
    // console.log(a * b);
    return a * b;
  };
}

// const printHello = () => {
//     console.log("hello!");
// }

/************************************************************************** */

// // Qs1 --> count vowels
{
  function countVowels(str) {
    let count = 0;
    for (const char of str) {
      if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
      ) {
        count++;
      }
    }
    console.log(count);
  }

  /************************************************* */
}
const countVow = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
};

//********************************************************************************** */

//forFach loops in arrays
//arr.forEach(callBackFunction)
//   CallbackFunction:Headers, it is a function to execute for each element in the array

{
  let arr = [1, 2, 3, 4, 5];

  arr.forEach(function printVal(val) {
    //Value at each idx
    console.log(val);
  });
}
//OR
{
  // let arr = [1, 2, 3, 4, 5];
  let arr = ["shopian", "handwara", "srinagar", "baramulla"];

  arr.forEach((val, idx, arr) => {
    //we can also use arrow function
    console.log(val.toUpperCase(), idx, arr);
  });
  /************************************************************* */
}

// Qs2
// for a given array of Number, print the square of each value using the forEach loop
{
  let nums = [2, 2, 4, 5, 6, 7, 8, 9, 10];

  nums.forEach((num) => {
    console.log(num * num); /// or num**2
  });
}

//or
{
  let nums = [20, 55, 60, 99];

  let calcSquare = (num) => {
    console.log(num * num);
  };

  nums.forEach(calcSquare);
}

/******************************* */
//some more array methodes
//   Map
// arr.map(callBackfnx(value, index, array))
{
  let nums = [50, 60, 70];

  let newArr = nums.map((val) => {
    return val * val;
  });

  console.log(newArr);
  console.log(nums);
}
/******************************************* */
//Filter
/*/let newArr = arr.filter( (val) => {
    return val % 2 ===0;
}) */
{
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let evenArr = arr.filter((val) => {
    return val % 2 === 0;
  });

  console.log(evenArr);
}
{
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let oddArr = arr.filter((val) => {
    return val % 2 !== 0;
  });

  console.log(oddArr);
}

//reduce
/* performs some operations & reduce the array to a single value .
 it returns that single value*/
{
  let arr = [4, 6, 8];

  const output = arr.reduce((res, curr) => {
    return res + curr;
  });

  console.log(output);
}
/********************************************************************** */
{
  let arr = [945, 951, 354, 100];
  const output = arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
  });

  console.log(output);
}
/****************************************************************** */
{
  let n = prompt("Entetr A Number : ");

  let arr = [];

  for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;
  }

  console.log(arr);

  let sum = arr.reduce((res, curr) => {
    return res + curr;
  });

  console.log("Sum = ", sum);

  let factoril = arr.reduce((res, curr) => {
    return res * curr;
  });

  console.log("Factoril", factoril);
}
