//2. Check whether a string is a palindrome.

function isStringPalindrome(string){
    //intially convert the given string into lowercase - then remove all teh special characters
    //Have 2 pointer start and end in the clean string
    //Compare the characters from start and end in the clean string
    //str.toLowerCase().replace(/[^a-z0-9]/g,"")
    const clearstr = string.toLowerCase().replace(/[^a-z0-9]/g,"");
    

    let start = 0;
    let end = clearstr.length-1;

    while(start < end){
        if(clearstr[start] !== clearstr[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
}

const result = isStringPalindrome("A man, a plan, a canal: Panama");
console.log(result);