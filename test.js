const isPalindrome = str => {
    let i = 0, j = str.length - 1, count = 0;
    while(count < str.length / 2) {
        if(str[i] !== str[j]) return false;
        i++;
        j--;
        count++;
    }
    return true;
};

console.log(isPalindrome("Paolo"));
console.log(isPalindrome("madam"));