//Comparisons
//During comparisons in JS, values are converted to nos.
//A strict equality operator === checks the equality without type conversion.
//Comparison with null and undefined
//With the strict equality check
//alert(null === undefined) //returns false
//Whereas with non-strict equality check
//alert(null == undefined) //returns true
//For Maths and other comparisons - null/undeined are converted to zero and NaN

//Important for null checks

//alert(null > 0) //false //During comparisons, null converted into no 0
//alert(null == 0) //false //During comparisons, null converted into no 0
//aler(null >= 0) //true //During comparisons, null converted into no 0

//Task - Guess the output

// 5 > 4
// "apple" > "pineapple"
// "2" > "12"
// undefined == null
// undefined === null
// null == "\n0\n"
// null === +"\n0\n"

// alert(5>4); //true
// alert("apple" > "pineapple"); //false
// alert("2" > "12"); //false - true
// alert(undefined == null); //true
// alert(undefined === null); //true - false
// alert(null == "\n0\n"); //flase
// alert(null === +"\n0\n"); //flase