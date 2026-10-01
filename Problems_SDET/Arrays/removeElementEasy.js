//11. Given an array nums and a value val, remove all occurrences of val in-place and return the number of remaining elements.

function removeElements(nums, val){
    let pos = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== val){
            nums[pos] = nums[i];
            pos++;
        }
    }

    nums.length = pos;
    
    return nums;
}

console.log(removeElements([3,2,2,3], 3));