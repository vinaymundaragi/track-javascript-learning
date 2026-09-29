//6. Check whether two strings are anagrams.

function isAnagram(str1, str2){

    if(str1.length !== str2.length){
        return false;
    }

    const map = new Map();

    for(const char of str1){
        map.set(char, (map.get(char) || 0)+1);
    }

    for(const char of str2){
        const count = map.get(char);

        if(!count){
            return false;
        }

        map.set(char, (count-1));
    }
    return true;
}

console.log(isAnagram("race", "care")); // true
console.log(isAnagram("race", "acor")); // false (missing 'o' in str1)
console.log(isAnagram("aab", "abb"));
