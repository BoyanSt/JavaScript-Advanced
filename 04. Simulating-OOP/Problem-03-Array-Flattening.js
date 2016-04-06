
Array.prototype.flatten = function(){
    var flattenArray = [];
    for (var el in this) {
        var currElement = this[el];
        if (Object.prototype.toString.call(currElement) === '[object Array]' ) {
            for (var i in currElement) {
                flattenArray.push(currElement[i]);
            }
        } else {
            flattenArray.push(currElement);
        }
    }
    deleteFunctions(flattenArray);
    return flattenArray;
};


function deleteFunctions(arr){
    for (var k in arr) {
        var element = arr[k];
        if (isFunction(element)) {
            var index = arr.indexOf(element);
            if (index > -1) {
                arr.splice(index, 1);
            }
        }
    }
}

function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

var array = [1, 2, [3, 4], [5, 6]];
console.log(array.flatten());
console.log(array);

var array1 = [1, 2, 3, 4];
console.log(array1.flatten());
console.log(array1);

var array2 = [0, ["string", "values"], 5.5, [[1, 2, true], [3, 4, false]], 10];
console.log(array2.flatten());
console.log(array2);


