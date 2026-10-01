/*
Contains Duplicate II (Easy / Medium)
Problem: Return true if there are two distinct indices i and j such that nums[i] === nums[j] and abs(i - j) <= k.

Relation: Combines a Set with a Sliding Window of size k. If an element is already in the window set, return true; otherwise, remove elements falling outside the window.
1. Loop through the array with index i.
2. Check if the current number nums[i] is already in your Map.
3. If it is, check the distance: is i - map.get(nums[i]) <= k?
    If yes, you found your match! Immediately return true.
4. Always update the map with the current index: map.set(nums[i], i). (Updating to the newest index is crucial because a future occurrence will be closest to this current index).
5. If the loop ends without finding any, return false.
*/

function containsNearbyDuplicate(nums, k){
    const map = new Map();

    for(let i=0; i<nums.length; i++){
        if((map.has(nums[i])) && (Math.abs(i-map.get(nums[i])) <= k)){
            return true;
        }

        map.set(nums[i], i);
    }

    return false;

}

// Test cases:
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));       // true  (index 0 and 3 -> distance 3 <= 3)
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));       // true  (index 2 and 3 -> distance 1 <= 1)
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false (duplicate 1s are distance 3 > 2)