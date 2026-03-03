let arr = [5,4,6,7,8,9,1];

var checkSorted = function(arr){
    let prev = 0;
    for(let i=1; i<arr.length; i++){
        if(arr[prev] > arr[i]){
            return false;
        }
        prev++;

    }
    return true;
}

const result = checkSorted(arr);
console.log(result);