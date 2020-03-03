var i=1;
var j=2;
var k=i+j;
var sum=0;
while (k<4000001) {
    if (k%2===0) {
        sum += k;
        i=j;
        j=k;
        k=i+j;
    }
    else {
        i=j;
        j=k;
        k=i+j;
    }
}
console.log(sum+2);
 