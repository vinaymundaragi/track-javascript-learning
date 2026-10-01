//7. Find the largest and second-largest number

// function largestElement(arr) {
//     let largest = arr[0];
//     // let secondlargest;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }
//     return largest;
// }

function findSecondLargest(nums){
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let i=0; i<nums.length; i++){
        if(nums[i] > largest){
            secondLargest = largest;
            largest = nums[i];
        }else if(nums[i] > secondLargest && nums[i] !== largest){
            secondLargest = nums[i];
        }



    }

    return secondLargest === -Infinity ? null : secondLargest;
}

// const arr = [2, 4, 1, 3, 7, 5];
console.log(findSecondLargest([2, 4, 1, 3, 7, 5])); // 5
console.log(findSecondLargest([10, 10, 10]));       // null (no distinct second largest)
console.log(findSecondLargest([-10, -20, -5]));     // -10





