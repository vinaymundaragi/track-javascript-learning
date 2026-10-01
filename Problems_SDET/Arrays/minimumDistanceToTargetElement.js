/*
Given an integer array nums (0-indexed) and two integers target and start, find an index i such that
nums[i] == target and abs(i - start) is minimized. Note that abs(x) is the absolute value of x.

Return abs(i - start).

It is guaranteed that target exists in nums.
*/

function minimumDistanceToTargetElement(nums, target, start){
    let minDist = Infinity;
    for(let i=0; i<nums.length; i++){
        if(nums[i] === target){
            minDist = Math.min(minDist, Math.abs(i-start));
        }
    }
    return minDist;
}

console.log(minimumDistanceToTargetElement([1,2,3,4,5], 5, 3));
console.log(minimumDistanceToTargetElement([1], 1, 0));
console.log(minimumDistanceToTargetElement([5,3,6], 5, 2));