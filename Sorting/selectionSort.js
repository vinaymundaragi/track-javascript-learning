let nums = [5,4,3,2,1];

for(let i=0; i<nums.length; i++){
    let minindex = i;

    for(let j=i+1; j<nums.length; j++){
        if(nums[j] < nums[minindex]){
            minindex = j;
        }

        let temp = nums[i];
        nums[i] = nums[minindex];
        nums[minindex] = temp;

    }


}

console.log(nums);