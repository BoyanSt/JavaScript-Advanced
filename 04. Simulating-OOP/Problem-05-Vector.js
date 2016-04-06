if (!Object.create) {
    Object.create = function (proto) {
        function F() {
        }

        F.prototype = proto;
        return new F();
    };
}

if (!Object.prototype.extends) {
    Object.prototype.extends = function (parent) {
        this.prototype = Object.create(parent.prototype);
        this.prototype.constructor = this;
    };
}

var Vector = (function () {
    function Vector(arr){
        if (arguments.length === 0 || arr.length === 0 ) {
            throw 'Invalid components for a vector.';
        }
        this.components = arr;
    }

    Vector.prototype.toString = function(){
        return '(' + this.components.join(', ') + ')';
    };

    Vector.prototype.add = function(otherVector){
        var vector = this;
        var resultVectorComponents = [];
        checkVectorComponentsLength(vector, otherVector);
        if (vector.components.length !== otherVector.components.length) {
            throw 'Can not add the two vectors, because they are with different length.';
        }
        for (var i = 0; i < vector.components.length; i++) {
            var vectorCurrComponent = vector.components[i],
                otherVectorCurrComponent = otherVector.components[i];
            resultVectorComponents.push(vectorCurrComponent + otherVectorCurrComponent);
        }
        return new Vector(resultVectorComponents);
    };

    Vector.prototype.subtract = function(otherVector){
        var vector = this;
        var resultVectorComponents = [];
        checkVectorComponentsLength(vector, otherVector);
        for (var i = 0; i < vector.components.length; i++) {
            var vectorCurrComponent = vector.components[i],
                otherVectorCurrComponent = otherVector.components[i];
            resultVectorComponents.push(vectorCurrComponent - otherVectorCurrComponent);
        }
        return new Vector(resultVectorComponents);
    };

    Vector.prototype.dot = function(otherVector){
        var vector = this,
            sumDot = 0;
        checkVectorComponentsLength(vector, otherVector);
        for (var i = 0; i < vector.components.length; i++) {
            var vectorCurrComponent = vector.components[i],
                otherVectorCurrComponent = otherVector.components[i];
            sumDot += vectorCurrComponent * otherVectorCurrComponent;
        }
        return sumDot;
    };

    Vector.prototype.norm = function(){
        var vector = this,
            sumNorm = 0;
        for (var i = 0; i < vector.components.length; i++) {
            sumNorm += vector.components[i] * vector.components[i];
        }
        return Math.sqrt(sumNorm);
    };

    function checkVectorComponentsLength(vector, otherVector) {
        if (vector.components.length !== otherVector.components.length) {
            throw 'Can not make manipulation with the vectors, because they are with different length.';
        }
    }
    return Vector;
})();

//The following throw errors
//var wrong = new Vector();
//var anotherWrong = new Vector([]);

var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
console.log(a.toString());
console.log(b.toString());
console.log(c.toString());

var result = a.add(b);
console.log(result.toString());

//a.add(c); // Error

var result1 = a.subtract(b);
console.log(result1.toString());

//a.subtract(c); // Error

var result2 = a.dot(b);
console.log(result2.toString());

//a.dot(c); // Error

console.log(a.norm());
console.log(b.norm());
console.log(c.norm());
console.log(a.add(b).norm());






