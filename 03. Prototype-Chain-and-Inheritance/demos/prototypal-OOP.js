
if (!Object.create) {
    Object.create = function (proto) {
        function F() {}
        F.prototype = proto;
        return new F();
    };
}
// prototypal OOP
// there is not new so we can not override functions like Tiger.prototype.jump = func()

var Animal = {
    init: function(name, species){
        this._name = name;
        this._species = species;
        return this;
    },

    produceSound: function(){
        throw new Error('Cannot call an abstract function')
    },

    walk: function(){
        return this._name + ' is walking...';
    }
};

var Tiger = Object.create(Animal);

Tiger.init = function(name, isDangerous){
    Animal.init.call(this, name, 'Tiger');
    this._isDangerous = isDangerous;
};

Tiger.jump = function(){
    return 'jumping from base Tiger';
};

var tigger = Object.create(Tiger);
tigger.init('tigger', true);
tigger.produceSound = function(){
    return 'I\'am very dangerous!!!'
};

tigger.jump = function(){
    return 'I can jump';
};
console.log(tigger.produceSound());
console.log(tigger.jump());

var normalTiger = Object.create(Tiger);
normalTiger.init('normal', false);
console.log(normalTiger.jump());

//var animal =  Object.create(Animal);
//animal.init('John', 'tiger');
//console.log(animal);
//console.log(animal.walk());
//console.log(animal.produceSound());
