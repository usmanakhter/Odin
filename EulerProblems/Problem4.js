palindromes=[];

//fxn to check if palindrome
var palindrome = function (input) {
    if (multipleString.length===5) {
        if (input[0]===input[4] && input[1]===input[3]) {
            return true;
        }
        else {
            return false;
        }
    }
    else if (multipleString.length===6) {
    	if (input[0]===input[5] && input[1]===input[4] && input[2]===input[3]) {
            return true;
        }
        else {
            return false;
        }
    }
    
};



//check palindromes through 900*900
for (i=999; i>=900; i--){
    for (j=999; j>=900; j--) {
        var multiple=i*j;
        var multipleString = '' + multiple;
        if (palindrome(multipleString)) {
            palindromes.push(multiple);
        }    
    }
}
var max = Math.max.apply(null, palindromes);
console.log(max);
