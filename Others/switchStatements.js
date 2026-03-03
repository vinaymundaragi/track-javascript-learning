console.log("vinay");
//Switch statement example:-
//Any expression can be a switch/case argument
// let a = "1";
// let b = 0;

// switch(+a){
//     case (b+1):
//         alert("This exactly matches with the case!!!");
//         break;
//     default:
//         alert("This doesn't match!")
// }

//Grouping of "case" variants
//Several variants of case which share the same code can be grouped together.
//Example:
// let a =3;

// switch(a){
//     case 4:
//         alert("Too small number!");
//         break;
//     case 3:
//     case 5:
//         alert("Wrong!");
//         alert("Why don't you take a Math class!");
//         break;
//     default:
//         alert("I don't have a clue of this!")
// }

//Type Matters
//When comparin the values in the cases, the two operands type should be same.
//Meaning of same data types.
//Example
// let userInput = prompt("Please enter a value:-");

// switch(userInput){
//     case '0':
//     case '1':
//         alert('One or Zero');
//         break;
//     case '2':
//         alert('Two');
//         break;
//     case 3:
//         alert('Numeric comparison with string data type!');
//         break;
//     default:
//         alert('None of the supported formats');
// }
//-==----=====------==========-----------=========-----------========---------==========--------===========----------======----=
//Switch statements - Tasks
//Task -1
//switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

//Solution 1:-

// let browser = prompt("Please choose a browser of your choice:-");

// if(browser == "Edge"){
//     alert("You've got the Edge!");
// }else if((browser == 'Chrome') || (browser == 'Firefox') || (browser == 'Safari') || (browser == 'Opera')){
//     alert('Okay we support these browsers too!');
// }else{
//     alert("We hope that this page looks ok!");
// }

//Task 2:-
//Rewrite "if" into "switch"

// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

let a = +prompt('a?', '');

switch(a){
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
}
