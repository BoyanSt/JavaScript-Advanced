

function testContext(){
    console.log(this.toString());
}
// here this is global
console.log(makeString('=',50));
testContext();


function printDate(){
    console.log(new Date());
    testContext();
}

// here the function is called inside another function
// this is global
console.log(makeString('=',50));
printDate();


// here is as an object the context of this is the current object
console.log(makeString('=',50));
var context = new testContext();


function makeString(symbol, repetition){
    var output = '';
    for (var i = 0; i < repetition; i++) {
        output +=symbol;
    }
    return output;
}