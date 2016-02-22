var app = app || {};

(function (scope) {
    function Hall(name, capacity){
        this.setName(name);
        this.setCapacity(capacity);
        this.parties = [];
        this.lectures = [];
    }

    Hall.prototype.setName = function(name){
        var pattern = /^[a-zA-Z ]+$/g;

        if (!name.match(pattern) || !name) {
            throw new TypeError(' The name is not in valid format.');
        } else {
            this._name = name;
        }
    };

    Hall.prototype.getName = function() {
        return this.name;
    };

    Hall.prototype.setCapacity = function(capacity){
        var pattern = /^[0-9]+$/g;

        if (!capacity.toString().match(pattern) || !capacity) {
            throw new TypeError(' The capacity is not in valid format.');
        } else {
            this._capacity = capacity;
        }
    };

    Hall.prototype.getCapacity = function() {
        return this._capacity;
    };

    Hall.prototype.addEvent = function(ev) {
        if ( ev instanceof scope._Party) {
            this.parties.push(ev);
        } else if (ev instanceof scope._Lecture) {
            this.lectures.push(ev)
        } else {
            throw new TypeError(' The argument is not in valid format.');
        }
    };

    scope._Hall = Hall;
    scope.hall = function(name, capacity, parties, lectures){
        return new Hall(name, capacity, parties, lectures);
    }
})(app);

