/*
Find Common Elements Between Two Arrays

You are given two integer arrays nums1 and nums2 of sizes n and m, respectively. Calculate the following values:

answer1 : the number of indices i such that nums1[i] exists in nums2.
answer2 : the number of indices i such that nums2[i] exists in nums1.
Return [answer1,answer2].
*/

function findCommonElementsBetweenTwoArrays(nums1, nums2){
    let countOfElementsOfNums1InNums2 = 0;
    let countOfElementsOfNums2InNums1 = 0;

    for(let num of nums1){
        if(nums2.includes(num)){
            countOfElementsOfNums1InNums2++;
        }
    }

    for(let num of nums2){
        if(nums1.includes(num)){
            countOfElementsOfNums2InNums1++;
        }
    }

    return [countOfElementsOfNums1InNums2, countOfElementsOfNums2InNums1];
}

console.log(findCommonElementsBetweenTwoArrays([2,3,2], [1,2]));
console.log(findCommonElementsBetweenTwoArrays([4,3,2,3,1], [2,2,5,2,3,6]));