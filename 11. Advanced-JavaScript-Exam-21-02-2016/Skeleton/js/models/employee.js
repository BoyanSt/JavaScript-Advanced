var app = app || {};

(function (scope) {
    function Employee(name, workHours){
        this.setName(name);
        this.setWorkHours(workHours);
    }

    Employee.prototype.setName = function(name) {
        var pattern = /^[a-zA-Z ]+$/g;
        if (!name.match(pattern) || !name) {
            throw new TypeError(' The name is not in valid format.');
        } else {
            this._name = name;
        }
    };

    Employee.prototype.getName = function() {
        return this._name;
    };

    Employee.prototype.setWorkHours = function(workHours) {
        var pattern = /^[0-9]+$/g;
        if (!workHours.toString().match(pattern) || !workHours) {
            throw new TypeError(' The work hours are not in valid format.');
        } else {
            this._workHours = workHours;
        }
    };

    Employee.prototype.getWorkhours  = function() {
        return this._workHours;
    };

    scope._Employee = Employee;
    scope.employee = function(name, workHours){
        return new Employee(name, workHours);
    }
})(app);

