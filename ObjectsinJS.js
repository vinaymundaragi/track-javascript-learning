//objects in JS
//key:value paris stores keyed collections of varios datatypes
//Object creation in JS 2 ways

// let user = new Object(); //"Object constructor" syntax

// let obj1 = new Object();
// let obj2= new Object();
// let obj3 = new Object();

// let obj332 = {};   //"Object literal" syntax

//usualy object creation with the curly braces is being used - Which is the Object literal way.

// //Lets put some key:value paris or properties into the object created
// let user = 
// {"name" : "Vinay",
//     "age": 31,
//     "place" : "Hubli"
// };

// // can add, edit or remove properties or update the values of existing keys
// // //How to get values when key is known
// // console.log(user.name);
// // console.log(user.age);
// // console.log(user.place);
// // console.log(user);

// // //to delete a property from an object
// // // delete user.age;

// // console.log(user);

// // //multi word key in objects can be used but needs to be quoted.

// // //another way of addition of properties into the object
// // user["like animals"] = true;
// // user["marital status"] = "unmarried";
// // console.log(user);
// // user["marital status"] = "MARRIED (Just) 😍"
// // console.log(user);
// // console.log(user["marital status"]);

// // let key = "vinay";

// // console.log(user[key]);//accessing the values using key

// // //check for presence of key in the object
// //  console.log(user.contentProperty == undefined);

// //  console.log("age" in user);
// //  console.log("marital status" in user);
// //  console.log("time of birth" in user);

// //for in loop in js objects
// // for(key in user){
// //     // console.log(key);
// //     console.log(key, ': ', user[key]);
// // }

// // for(let prop in user){
// //     console.log(prop, ': ', user[prop]);
// // }

// //Ordered like in Object
// //Integer properties are sorted in increasing order
// //iNTEGERS PROPERTY - Means any string value that can be converted to-and-from to
// //integer without a change
// //"47" in the below codes obj, is an integer property.
// //
// let codes = {
//     "47" : "USA",
//     "21" : "Brazil",
//     "91" : "India",
//     "11": "Australia"
// };

// for(let prop in codes){
//     console.log(prop,':',codes[prop]);
// }

// let user = {};

// user["name"] = "John";
// user["surname"] = "Smith";
// console.log(user);
// user["name"] = "Pete";
// console.log(user);
// delete user.name;
// console.log(user);

//check for emptiness - assignment
