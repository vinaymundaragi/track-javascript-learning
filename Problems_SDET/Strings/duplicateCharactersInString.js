//3. Find the duplicate characters in the string
function findDuplicateCharacters(str){
    const map = new Map();
    const arr = [];

    for(const char of str){
        map.set(char, (map.get(char)|| 0)+1);
    }

    for(const [char, count] of map.entries()){
        if(count > 1){
            arr.push(char);
        }
    }
        return arr;
}

const result1 = findDuplicateCharacters("programming");
console.log(result1);

function findDuplicateChars(str){
    const seen = new Set();
    const duplicates = new Set();

    for(const char of str){
        if(seen.has(char)){
            duplicates.add(char);
        }else{
            seen.add(char);
        }
    }

    return duplicates;

}

const result = findDuplicateChars("programming");
console.log(result);
