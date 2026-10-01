//10. Remove duplicates from an array.
function removeDuplicatesFromArray(nums){
    let pos = 1;

    for(let i=1; i<nums.length; i++){
        if(nums[i] !== nums[i-1]){
            nums[pos] = nums[i];
            pos++;
        }
    }

    nums.length = pos;
    return nums;
}

console.log(removeDuplicatesFromArray([0,0,1,1,1,2,2,3,3,4]));