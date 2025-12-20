// //objects are stored and copied using references- Basic diff. w.r.t. primitive data types.
// //Whereas other primitive data types are always copied as a whole value.
// let message="Hello";
// let phrase = message; //put a copy of message into phrase.

// //Objects - reference to the object is stored
// //For example:-

// let user = {
//     name : "Viany",
//     age: 31,
//     place: "Bangalore"
// };

// let user2 = user;

// console.log(user.name);
// console.log(user2.place);

// //const objects can be edited - meaning, object properties can be edited and changed
// const codes = {
//     "+91" : "India",
//     "+88" : "Australia",
//     "+201" : "America"
// };
// console.log(codes);
// codes["+91"] = "Bharat"
// console.log(codes);

// //But the const codes object would throw an error when the
// //codes object in whole is tried for a change as in:-
// //codes = "Vinay";
// //or codes = {"name":"Vinay"};

// //Cloning and Merging, Object.assign
// //What if we need to clone an object
// let user = {
//     name : "Vinay",
//     age : 31
// };

// let user2 = {}; //declare an empty object

// for(let key in user){
//     //iterate through the object and one-by-one add into the user2
//     user2[key] = user[key];
// }

// console.log(user2);

//Now the above cloning can be done using the Object.assign
//Syntax:- object.assign(dest,.....sources);
//First argument - dest is a target object
//Second argument - sources is the source to be copied from
//It copies all the source properties of object into the target object.
// let user = {name: "Vinay"};

// let permission1 = {canView:true};
// let permission2 = {canEdit:true};
//to copy lets use the Object.assign - copies from permission 1 and 2 ito the user object.
// console.log(user);

// Object.assign(user, permission1, permission2);

// console.log(user);

//if the coped property already exixts in the target object, it gets overridden

// let user = {name: "Vinay"};

// Object.assign(user, {name: "Vijay"});
// console.log(user);

//We can also use Object.assign() to perform a simple object cloning.
// let user = {name: "Vinay",
//     age : 31
// };

// let clone = Object.assign({}, user);

// console.log(clone);

//Nested cloning:-
// let user = {name: "vinay",
//     age : 31,
//     sizes : {
//         height : 100,
//         width : 50
//     },
//     place : "Bangalore"
// };

// let clone = Object.assign({}, user);

// console.log(user);
// console.log(clone);

// user.sizes.height = 6520;

// console.log(user);
// console.log(clone);

//An object within an object, trying to clone A Object into another would not be indpendent of the
//changes made in the inner object. user.sizes.height and clone.sizes.height or the properties
//within the inner object are sharing the same reference for the ineer object.
//To handle this we need to implement the DEEP CLONING
//Meaning - using a cloning loop that examines each value of user[key] and if it's an object, then
//replicate its structure aswell. - Structured Cloning or Deep Cloning.
//structuredClone() - method
// let user = {name: "vinay",
//     age : 31,
//     sizes : {
//         height : 100,
//         width : 50
//     },
//     place : "Bangalore"
// };

// let clone = structuredClone(user);

// user.sizes.height = 56665;
// console.log(user.sizes.height);
// console.log(clone.sizes.height);
// console.log(user.sizes.height === clone.sizes.height);

//structuredClone() - method can clone almost all data types arrays, objects and primitive values.
//it also supports circular references - when an object property references object itself.
//lets create a CIRCULAR REFERENCE
let user = {};
user.me = user;
//user.me - references the object itself.
let clone = structuredClone(user);

console.log(clone.me === clone);