//1. Reverse a string without using a built-in reverse.
function reverseString(string){
    //Split the string into array
    strArray = string.split("");
    //Now reverse the array
    let start = 0;
    let end = strArray.length-1;

    while(start < end){
        let temp = strArray[start];
        strArray[start] = strArray[end];
        strArray[end] = temp;

        start++;
        end--;
    }

    return strArray.join("");

}


const result = reverseString("Manjunath");
console.log(result);