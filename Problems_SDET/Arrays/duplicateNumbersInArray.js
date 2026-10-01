//8. Find duplicate numbers in an array.

function findDuplicateNumbers(nums){
    const seen = new Set();
    const duplicates = new Set();

    for(let num of nums){
        if(seen.has(num)){
            duplicates.add(num);
        }else{
            seen.add(num);
        }
    }
    return duplicates;
}

console.log(findDuplicateNumbers([2,5,4,3,4,2,1,5,6,1,2]));

