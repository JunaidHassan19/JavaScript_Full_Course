/* DOM Manipulation
  Attributes

  getAttributes(attr) //to get the attribute value
  */
 {
let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name"); 
console.log(name);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));
}

{
//setAttribute(attr.value) -->to set the attribute value

let para = document.querySelector("p");
console.log(para.setAttribute("class", "newClass"));

//Style
//  node.style

let div = document.querySelector("div");

div.style.backgroundColor = "pink"; //change color

div.style.fontSize = "larger"// adjuct length

//div.innerText = "Hello!"//replace word

//div.style.visibility = "hidden" //it makes it hide
}


//Insert Elements
/* 
node.append(el)--->
node.repend(el)--->     discuss on notebook
node.brfore(el)--->
node.after(el)---->

*/
{
let newBtn = document.createElement("button");
newBtn.innerText = "click Me!";
console.log(newBtn);

let div = document.querySelector("div");
// div.append(newBtn);  //adds at the end of the node(inside)
// div.prepend(newBtn); //adds at the start of the node(inside)
// div.before(newBtn); // adds before the node(outside)
div.after(newBtn); //adds after the node(outside)
}

let newPara = document.createElement("h1");
newPara.innerText = "the is a new paragraph!!!";

document.querySelector("body").prepend(newPara);


//Delete Element
/*
node.remove()--->removes the node

*/

// let para = document.querySelector("p");
// para.remove();

let newPara = document.querySelector("newPara");
newPara.remove();