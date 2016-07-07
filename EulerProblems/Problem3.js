var prime = function(input) {
    var dividend=input;
    var divisor=2;
    var quotient=dividend/divisor;
    while (quotient!==1) {
        if (dividend%divisor!==0) {
            divisor+=1;
            quotient=dividend/divisor;
        }
        else {
            dividend=dividend/divisor;
            quotient=dividend/divisor;
        }
        
    }
    console.log(dividend);
    
};
prime(600851475143);



//cleaner version with less variables:
var prime = function(input) {
    divisor=2;
    while (divisor<input) {
        if (input%divisor===0) {
            input=input/divisor;
        }
        else {
            divisor++;
       }
    }
    return input;
};
prime(2);
