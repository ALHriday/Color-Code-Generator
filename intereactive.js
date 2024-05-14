let colors = document.querySelector(".colors");
let btn = document.querySelector(".btn");
let btn2 = document.querySelector(".btn2");
let body = document.querySelector("body");


function colorGenerator (){
    const red = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);

    return `rgb(${red},${blue},${green})`
}

let node;
function createColorDiv(){
    node = document.createElement("p");
    let bgColor = colorGenerator();
    node.innerText = bgColor;
    node.classList.add("color");
    colors.appendChild(node);
    node.style.backgroundColor = bgColor;
    
    if(node.style.backgroundColor == "white"){
        node.style.color = "black";
    }
    if(node.style.backgroundColor == "black"){
        node.style.color = "white";
    }
    if(node.style.backgroundColor == "gray"){
        node.style.color = "white";
    }
    if(node.style.backgroundColor == "blue"){
        node.style.color = "white";
    }
    if(node.style.backgroundColor == "green"){
        node.style.color = "white";
    }

    saveData();
};

btn2.addEventListener("click", function(){
    colors.lastChild.remove(node);
    saveData();
});

btn.addEventListener("click", function(){
    colorGenerator();
    createColorDiv();
    saveData();
});

// ............ Color Generator 2................

let ColorOutput2 = document.querySelector(".color-output2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");


function colorGenerator2 (){
    const red = Math.ceil(Math.random()*255);
    const blue = Math.ceil(Math.random()*255);
    const green = Math.ceil(Math.random()*255);

    return `#${red.toString(16)}${blue.toString(16)}${green.toString(16)}`;
}

console.log(colorGenerator2());

let node2;
function createColorDiv2(){
    node2 = document.createElement("p");
    let bgColor2 = colorGenerator2();
    node2.innerText = bgColor2;
    node2.classList.add("color2");
    ColorOutput2.appendChild(node2);
    node2.style.backgroundColor = bgColor2;
    saveData();
}

btn3.addEventListener("click", function(){
    colorGenerator2();
    createColorDiv2();
    saveData();
});
btn4.addEventListener("click", function(){
    ColorOutput2.lastChild.remove(node);
    saveData();
});

function saveData(){
    localStorage.setItem("data", colors.innerHTML);
    localStorage.setItem("data2", ColorOutput2.innerHTML);
};
function showData(){
    const data = localStorage.getItem("data");
    const data2 = localStorage.getItem("data2");
    colors.innerHTML = data;
    ColorOutput2.innerHTML = data2;
};
showData();

function clearData(){
    localStorage.clear();
};
// clearData();