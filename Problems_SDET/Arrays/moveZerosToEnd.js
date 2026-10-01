//12. move zeros to End

function moveZerosToEnd(nums){
    let pos = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== 0){
            nums[pos] = nums[i];
            pos++;
        }
    }

    for(let i=pos; i<nums.length; i++){
        nums[i] = 0;
    }

    return nums;
}

console.log(moveZerosToEnd([0,1,0,3,12]));
console.log(moveZerosToEnd([0]));