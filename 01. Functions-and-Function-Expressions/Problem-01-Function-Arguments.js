


function printArgsInfo(){
    for (var el in arguments) {
        var currArgument = arguments[el];

        function printName(obj) {
            return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
        }

        console.log(currArgument + ' (' + printName(currArgument) + ')');
    }
}

printArgsInfo(2, 3, 2.5, -110.5564, false);
console.log(' ');
printArgsInfo(null, undefined, "", 0, [], {});
console.log(' ');
printArgsInfo([1, 2], ["string", "array"], ["single value"]);
console.log(' ');
printArgsInfo("some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {name: "Peter", age: 20});
console.log(' ');
printArgsInfo([[1, [2, [3, [4, 5]]]], ["string", "array"]]);
console.log(' ');

printArgsInfo.call(this,3,['r', 5]);
console.log(' ');
var arr = ['varna', 'burgas', 10,[], 255];
printArgsInfo.apply();
printArgsInfo.apply(this, arr);