//9. Find the missing number from 1...N.

function findMissingNumberInRange(nums,n){
    let arrSum = 0;

    for(let num of nums){
        arrSum += num;
    }

    const rangeSum = (n*(n+1))/2;

    return rangeSum - arrSum;

}

console.log(findMissingNumberInRange([1,2,5,4], 5));