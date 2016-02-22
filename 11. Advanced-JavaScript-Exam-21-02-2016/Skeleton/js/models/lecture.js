var app = app || {};

(function (scope) {
    function Lecture(options) {
        scope._Event.call(this, options);
        this.setTrainer(options.trainer);
        this.setCourse(options.course);
    }

    Lecture.extend(scope._Event);

    Lecture.prototype.setTrainer = function (trainer) {
        if (!(trainer instanceof scope._Trainer)) {
            throw new TypeError(' The argument is not a instance of the object Trainer.');
        } else {
            this._trainer = trainer;
        }
    };

    Lecture.prototype.getTrainer = function () {
        return this._trainer;
    };

    Lecture.prototype.setCourse = function (course) {
        if (!(course instanceof scope._Course)) {
            throw new TypeError(' The argument is course is not a instance of the object Course.');
        } else {
            this._course = course;
        }
    };

    Lecture.prototype.getCourse = function () {
        return this._course;
    };

    scope._Lecture = Lecture;
    scope.lecture = function (options) {
        return new Lecture(options);
    }
})(app);