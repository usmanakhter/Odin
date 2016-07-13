//smallest number divis by 1-20
var factor20=[];
for (i=1; i<=20; i++) {
    factor20.push(i);    
}

var j=0;
var i=2520; //2520 is the smallest num divis by 1-10
while (j<factor20.length) {
    if (i%factor20[j]!==0) {
        j=0;
        i++;
    }
    else {
        j++;
    }
}
console.log(i);


