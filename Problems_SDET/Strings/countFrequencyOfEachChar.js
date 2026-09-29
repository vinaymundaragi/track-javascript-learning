//5. Count the frequency of each character.
function countFrequencyOfEachChar(str){
    const map = new Map();

    for(const char of str){
        map.set(char, (map.get(char) || 0)+1);
    }

    return map;
}

const result = countFrequencyOfEachChar("programming");
console.log(result);

/*
function countFrequencyObject(str) {
  const counts = {};

  for (const char of str) {
    counts[char] = (counts[char] || 0) + 1;
  }

  return counts;
}

console.log(countFrequencyObject("programming"));
// Output: { p: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1 }
*/