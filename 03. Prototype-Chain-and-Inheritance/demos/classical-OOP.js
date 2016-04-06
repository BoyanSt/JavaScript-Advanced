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

var Animal = (function () {
    function Animal(name, species) {
        this._name = name;
        this._species = species;
    }

    Animal.prototype.produceSound = function () {
        throw new Error('Cannot call an abstract function')
    };

    Animal.prototype.walk = function () {
        return this._name + ' is walking...';
    };

    return Animal;
})();

var animal = new Animal('Lucky','cat');
console.log(animal);
console.log(animal.walk());

var Cat = (function () {
    function Cat(name, isDangerous) {
        Animal.call(this, name, 'Cat');
        this._isDangerous = isDangerous;
    }
    Cat.extends(Animal);
    return Cat;
})();

var smallCat = new Cat('Rambo', true);
console.log(smallCat.walk());
