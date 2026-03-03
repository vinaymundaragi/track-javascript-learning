let arr = [-1];

let num = function secondlargest(arr){
    let largest = -1;
    let secondlargest = -1;

    for(let i =0; i<arr.length; i++){
        if(arr[i] > largest){
            secondlargest = largest;
            largest = arr[i];
        }
        if(arr[i] < largest && secondlargest < arr[i]){
            secondlargest = arr[i];
        }
    }
    return secondlargest;
}

const result = num(arr);
console.log(result);