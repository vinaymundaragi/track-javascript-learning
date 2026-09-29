//4. Find the first non-repeating character.

function firstNonRepeatingChar(str){
    const map = new Map();

    for(const char of str){
        map.set(char, (map.get(char) || 0)+1);
    }

    for(let i=0; i<str.length; i++){
        const char = str[i];

        if(map.get(char) === 1){
            return i;
        }
    }
    return -1;
}

const result = firstNonRepeatingChar("aabccddd");
console.log(result);