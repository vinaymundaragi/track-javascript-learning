let s = "bcbddsasdawew";

const count = new Array(26).fill(0);

for(let ch of s){
    count[ch.charCodeAt[0] - 97]++;
}

let result = "";

for(let i=0; i<count.length; i++){
    while(count[i] > 0){
    result += String.fromCharCode(i+97);
    count[i]--
    }
}

console.log(result);