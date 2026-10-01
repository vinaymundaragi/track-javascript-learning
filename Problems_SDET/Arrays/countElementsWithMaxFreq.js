/*
You are given an array nums consisting of positive integers.

Return the total frequencies of elements in nums such that those elements all have the maximum frequency.

The frequency of an element is the number of occurrences of that element in the array.
*/

function countElementsWithMaxOccurence(nums){
    const map = new Map();

    let maxCount = 0;

    for(let num of nums){
        map.set(num, (map.get(num) || 0) + 1);
    }

    for(const count of map.values()){
        if(count > maxCount){
            maxCount = count;
        }
    }

    let countFrequency = 0;
    for(const count of map.values()){
        if(count === maxCount){
        countFrequency += count;
        }
    }
    
    return countFrequency;

}

console.log(countElementsWithMaxOccurence([1,2,2,3,1,4]));
console.log(countElementsWithMaxOccurence([1,2,3,4,5]));