String.prototype.startsWith = function (substring) {
    var str = this;
    str = str.substring(0, substring.length);
    return str === substring;
};

String.prototype.endsWith = function (substring) {
    var str = this,
        startPosition = str.length - substring.length;
    str = str.substring(startPosition);
    return str === substring;
};

String.prototype.left = function (count) {
    var str = this;
    if (count >= str.length) {
        return str.toString();
    } else {
        return str.substring(0,count);
    }
};

String.prototype.right = function(count){
    var str = this,
        startPosition = str.length - count;
    if (count >= str.length) {
        return str.toString();
    } else {
        return str.substring(startPosition);
    }
};

String.prototype.padLeft = function(count){
    var str = this,
        lengthStr = str.length,
        repetition = count - lengthStr,
        char = ' ';

    if (arguments.length > 1) {
        char = arguments[1];
    }
    if (repetition > 0) {
        for (var i = 0; i < repetition; i++) {
            str = char + str;
        }
    }
    return str.toString();
};

String.prototype.padRight = function(count){
    var str = this,
        lengthStr = str.length,
        repetition = count - lengthStr,
        char = ' ';

    if (arguments.length > 1) {
        char = arguments[1];
    }
    if (repetition > 0) {
        for (var i = 0; i < repetition; i++) {
            str += char;
        }
    }
    //add char '/' to check if there are spaces
    return str.toString() + '/';
};

String.prototype.repeat = function(count){
    var result = '';
    for (var i = 0; i < count; i++) {
        result += this;
    }
    return result;
};

console.log(makeString('-',65));
var example = "This is an example string used only for demonstration purposes.";
console.log(example.startsWith("This"));
console.log(example.startsWith("this"));
console.log(example.startsWith("other"));
console.log(example);

console.log(makeString('-',65));
var example1 = "This is an example string used only for demonstration purposes.";
console.log(example1.endsWith("poses."));
console.log(example1.endsWith("example"));
console.log(example1.startsWith("something else"));
console.log(example1);

console.log(makeString('-',65));
var example2 = "This is an example string used only for demonstration purposes.";
console.log(example2.left(9));
console.log(example2.left(90));


console.log(makeString('-',65));
var example3 = "This is an example string used only for demonstration purposes.";
console.log(example3.right(9));
console.log(example3.right(90));


console.log(makeString('-',65));
var hello = "hello";
console.log(hello.padLeft(5));
console.log(hello.padLeft(10));
console.log(hello.padLeft(5, "."));
console.log(hello.padLeft(10, "."));
console.log(hello.padLeft(2, "."));

console.log(makeString('-',65));
var hello1 = "hello";
console.log(hello1.padRight(5));
console.log(hello1.padRight(10));
console.log(hello1.padRight(5, "."));
console.log(hello1.padRight(10, "."));
console.log(hello1.padRight(2, "."));

console.log(makeString('-',65));
// Combinations must also work
var example4 = "abcdefgh";
console.log(example4.left(5).right(2));

console.log(makeString('-',65));
var character = "*";
console.log(character.repeat(5));
// Alternative syntax
console.log("~".repeat(3));

console.log(makeString('-',65));
// Another combination
console.log("*".repeat(5).padLeft(10, "-").padRight(15, "+"));



function makeString(char, repetition){
    var result = '';
    for (var i = 0; i < repetition; i++) {
        result +=char;
    }
    return result;
}