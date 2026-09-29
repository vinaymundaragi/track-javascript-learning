//7. Find the largest and second-largest number

function largestElement(arr) {
    let largest = arr[0];
    // let secondlargest;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

const arr = [2, 4, 1, 3, 7, 5];
console.log(largestElement(arr));




