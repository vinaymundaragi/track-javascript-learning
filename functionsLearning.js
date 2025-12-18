//  to avoid code duplication.
//  to modify the code in one place: the function which outputs it.

// function showMessage(){
//     console.log("Hi you're within show message function!!")
// }

// showMessage();

//Local variables
//A variable declared inside a function can only be used within that function limits. - local variable
//Has the scope within the function, can't be  used outside the function.
//Limited to scope of the function.
//Example:-

// function showMessage(){
//     let msg = "Hi everyone!";

//     console.log(msg);
// }

// showMessage(); //function invoking

//console.log(msg); - Throws an error:- msg is not defined - As scope of the variable is only within the function's scope.

//Outer variables - variables declared outside function
//variables - declared outside func - 1. can be used within func. 2. can also be modified.

// let username = "Vinay";

// function printMsg(){
//     console.log("hi ", username);
// }

// function printSecondMsg(){
//     username = "Vijay";
//     console.log("Hello, ", username);
// }

// printMsg();

// printSecondMsg();

//Function return statements

// function checkAge(age){
//     return age > 18 ? true : confirm("Did you parents really allow?");
// }

// console.log(checkAge(19));

//WAF to return minimum of 2 nos.

// function min(a, b){
//     return a >= b ? b : a;
// }

// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));

function getIntegerInput(userInput){
    let value;

    while(true){
        value = prompt(userInput);

        if( value != null && value.trim() != "" && Number.isInteger(Number(value))){
            return Number(value);
        }
        alert("Please enter a valid integer number");
    }

}


function pow(a, b){
    return a ** b;
}

let a = getIntegerInput("Please enter a no");
let b = getIntegerInput("Please enter another no.");

console.log(pow(a, b));