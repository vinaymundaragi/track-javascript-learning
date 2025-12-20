// function message(){
//     console.log("Hi this is an alert in the function");
// }

// message();

// function sayHi(){
//     console.log("Hi, this is a hi message");
// }

// let func = sayHi;
// console.log(func);
// func();
// sayHi();

let sayHi = function(){
    console.log("Hi within the function");
};

console.log(sayHi);

let func = sayHi;

console.log(func);