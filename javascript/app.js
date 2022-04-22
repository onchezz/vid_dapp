const myInput = document.getElementById("input");
const text = document.getElementById("outcome");
const listener = function(e) {
    // console.log(e.target.value);
    text.innerHTML = e.target.value;
}

myInput.addEventListener('change', listener);


const carsMap = new Map();
carsMap.set('a', 1);
carsMap.set('b', 2);
carsMap.set('c', 3);

function rint() {
    const car = carsMap[Symbol.iterator]();
    for (let i = 0; i < carsMap.length; i++) {



    }
}

rint();

// function name() {  
//     const cars = ["bmw", "benz", "volvo"];
//     const myDiv = document.getElementById("myDiv")
//     const books = ["english", "kiswahili", "maths"];
//     cars.push("tesla");
//     for (let i = 0; i < cars.length; i++) {
//         const element = cars[i];
//         const node = document.createElement("li");
//         const textNode = document.createTextNode(element);
//         node.appendChild(textNode);
//         myDiv.appendChild(node);


//     }
//     const myBookDiv = document.getElementById("bookId");
//     books.forEach(element => {
//         const node = document.createElement("li")
//         const textNode = document.createTextNode(element);
//         node.appendChild(textNode);
//         myBookDiv.appendChild(node);
//     });



// }





//maps 










// // alert("hello");
// const item = document.getElementById("myDiv");
// item.innerHTML = "hello there";

// const myClass = document.getElementsByClassName("myClass");

// myClass[0].innerHTML = "welcome";
// myClass[1].innerHTML = "nice";

// const myTag = document.getElementsByTagName("h2");
// myTag[0].innerHTML = "header";

// //emmet