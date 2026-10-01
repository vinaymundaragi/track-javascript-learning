//Two sum sorted Array

function twoSumSortedArray(nums, target){
    let start = 0;
    let end = nums.length-1;

    while(start < end){

        let eleSum = nums[start]+nums[end];

        if(eleSum > target){
            end--;
        }else if(eleSum < target){
            start++;
        }else{
            return [start+1, end+1];
        }
    }

    return [];

}

console.log(twoSumSortedArray([2,7,11,15], 9));