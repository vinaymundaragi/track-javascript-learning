//13. Megre two sorted arrays
//YT TO BE SOLVED
function mergeTwoSortedArrays(nums1, m, nums2, n){
    const unique = new Set();

    for(let i=0; i<m; i++){
        unique.add(nums1[i]);
    }

    for(let i=0; i<n; i++){
        unique.add(nums2[i]);
    }

    return [...unique]

}

console.log(mergeTwoSortedArrays([1,2,3,0,0,0], 3, [2,5,6], 3));