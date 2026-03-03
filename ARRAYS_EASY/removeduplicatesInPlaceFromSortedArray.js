let nums = [0,0,1,1,1,2,2,3,3,4];

let pos = 0;

for(let i=1; i<nums.length; i++){
    if(nums[i] !== nums[i-1]){
        nums[pos] = nums[i];
        pos++;
    }
}

console.log(nums);