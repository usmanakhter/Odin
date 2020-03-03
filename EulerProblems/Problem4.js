palindromes=[];

//fxn to check if palindrome
var palindrome = function (input) {
    if (multipleString.length===5) {
        if (multipleString[0]===multiple[4] && multiple[1]===multiple[3]) {
            return true;
        }
        else {
            return false;
        }
    }
    else if (multipleString.length===6) {
    	if (multipleString[0]===multipleString[5] && multipleString[1]===multipleString[4] && multipleString[2]===multipleString[3]) {
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
 