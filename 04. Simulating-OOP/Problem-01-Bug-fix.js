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

var Person = (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    Person.prototype.name = function () {
        return this.firstName + ' ' + this.lastName;
    };

    return Person;
})();

//function Person(firstName, lastName) {
//    this.firstName = firstName;
//    this.lastName = lastName;
//    return {name: this.firstName + " " + this.lastName};
//}

var peter = new Person("Peter", "Jackson");
console.log(peter.name());
console.log(peter.firstName);
console.log(peter.lastName);

