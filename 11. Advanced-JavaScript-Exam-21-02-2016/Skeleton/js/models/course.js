var app = app || {};

(function (scope) {
    function Course(name, numberOfLectures){
        this.setName(name);
        this.setNumberOfLectures(numberOfLectures);
    }

    Course.prototype.setName = function(name) {
        var pattern = /^[a-zA-Z ]+$/g;
        if (!name.match(pattern) || !name) {
            throw new TypeError(' The name is not in valid format.');
        } else {
            this._name = name;
        }
    };

    Course.prototype.getName = function() {
        return this._name;
    };

    Course.prototype.setNumberOfLectures = function(numberOfLectures) {
        var pattern = /^[0-9]+$/g;
        if (!numberOfLectures.toString().match(pattern) || !numberOfLectures) {
            throw new TypeError(' The numberOfLectures is not in valid format.');
        } else {
            this._numberOfLectures = numberOfLectures;
        }
    };

    Course.prototype.getNumberOfLectures = function() {
        return this._numberOfLectures;
    };

    scope._Course = Course;
    scope.course = function(name, numberOfLectures){
        return new Course(name, numberOfLectures);
    }
})(app);
