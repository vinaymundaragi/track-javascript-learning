let arr = [2, 5, 1, 3, 0];


var num = function largestNumber(arr){
    let largest = 0;
    for(let i=0; i<arr.length; i++){
    if(arr[i] > largest){
        largest = arr[i];
    }
    
}
return largest;
}

const result = num(arr);

console.log(result);

