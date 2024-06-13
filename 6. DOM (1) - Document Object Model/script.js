// /*WINDOW OBJECT
// the window Object represents an open window in  a browser it is browser's object (not JavaScript's)
// & is automaticallt created by browser.Object

// it is a global object with lots of properties & methods.*/

// //alert("Enter Your Name !");
// //window.alert("Hi!")
// console.log("this is Js");
// console.log(window);
// window.console.log("This is Js");

// console.dir(document);
// console.dir(document.body);
// console.dir(document.head);

// document.body.style.background = "pink";
// document.body.childNodes[1].innerText = "Hello";

// /************************************************************************* */
// // DOM Manipulation
// /*

// selecting with Id  
// document.getElementById("myid")

// */
// let heading = document.getElementById("h1");
// console.log(heading);

// /************************************************************************** */
// /*

// selecting with class
// document.getElementsByCalssName("myClass")

// */
// let headings = document.getElementsByClassName("class1");
// console.dir(headings);
// console.log(headings);

// /******************************************************************* */
// /*

// selecting with tag
// document.getElementByTagName("p"
// */
// let h2s = document.getElementsByTagName("h2");
// console.log(h2s);
// console.dir("h2s");

// /*************************************************************** */
// /*

// query Selector
// document.querySelecter("myId/myClass/tag")
//    ----> returns frist element

// document.querySelecterAll("myId/myClass/tag")
// ----> returns a NodeList

// */

// let firstEl = document.querySelector("p"); //first element
// console.dir(firstEl);

// let allEl = document.querySelectorAll("p");
// console.dir(allEl);

// /******************************************************************* */
// /*
// Properties

// tagName : 
// innerText :
// innerHTML :
// textContent :

// i discus these all properties in notebook

// */
// console.dir(document.body.firstChild);






// let div = document.querySelector("div");
// console.dir(div);

// let heading = document.querySelector("h1");
// console.dir(heading);


/*

let divs = document.querySelectorAll(".box");

console.log(divs[0]);
console.log(divs[1]);
console.log(divs[2]);
console.log(divs[3]);


divs[0].innerText = "new uniqe value one";
divs[1].innerText = "new uniqe value two";
divs[2].innerText = "new uniqe value three";
divs[3].innerText = "new uniqe value four";

     OR  --> for-off loop
     */

let divs = document.querySelectorAll(".box");

let idx = 1;
for(div of divs) {
    div.innerText = `new unique vlaue ${idx}`;
    idx++
}