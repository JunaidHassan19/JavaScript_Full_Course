//-----------------------onClick-----------------------
let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("btn1 was clicked!");
    let a = 20;
    a--;
    console.log(a);
}

//-------------------ondblClick-------------------------
let btn2 = document.querySelector("#btn2");
btn2.ondblclick = () => {
    console.log("btn2 was clicked 2x");
}

//--------------------onmousecver------------------------
let box = document.querySelector("#box");
box.onmouseover = (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
    console.log("You are inside div");
}

//----------------onClick----------------------------------
let btn3 = document.querySelector("#btn3");
btn3.onclick = (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
};

//--------------------addEventListener------------------------
let btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", (e) => {
    console.log("button 4th was clicked - handler 1");
    console.log(e);
    console.log(e.type);
});

btn4.addEventListener("click", () => {
    console.log("button 4th was clicked - handler2");
});

btn4.addEventListener("click", () => {
    console.log("button 3th was clicked - handler3");
});

const handler4 = () => {
    console.log("button 4th was clicked - handler4");
};
btn4.addEventListener("click", handler4);

//---------------------removeEventListener--------------------------
btn4.removeEventListener("click", handler4);

//-------------------------------Qns---------------------------------
let btn5 = document.querySelector("#btn5");
let currMode = "Light"; //dark
let body = document.querySelector("body");

btn5.addEventListener("click", () => {
    if(currMode === "Light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("Light");
    } else {
        currMode = "Light";
        body.classList.add("Light");
        body.classList.remove("dark");
    }
   console.log(currMode);
})