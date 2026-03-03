let s = 'aabccbbaadefddffeeegj';

let left = 0;
let maxlength = 0;

const map = new Map();

for(let right = 0; right<s.length; right++){
    const char = s.charAt(right);
    if(map.has(char) && map.get(char) >= left){
        left = map.get(char)+1;
    }
    map.set(char,right);

    maxlength = Math.max(maxlength, right-left+1);
}

console.log(maxlength);