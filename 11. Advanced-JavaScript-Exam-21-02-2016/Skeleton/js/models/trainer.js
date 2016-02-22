var app = app || {};

(function (scope) {
    function Trainer(name, workHours){
        scope._Employee.call(this, name, workHours);
        this.courses = [];
        this.feedbacks = [];
    }
    Trainer.extend(scope._Employee);

    Trainer.prototype.addCourse = function(course) {
        if (course instanceof scope._Course) {
            this.courses.push(course);
        } else {
            throw new TypeError('Invalid course format');
        }
    };

    Trainer.prototype.addFeedback = function(feedback) {
        if (typeof feedback === 'string' || feedback instanceof String) {
            this.feedbacks.push(feedback);
        } else {
            throw new TypeError('Invalid feedback format');
        }
    };

    scope._Trainer = Trainer;
    scope.trainer = function(name, workHours){
        return new Trainer(name, workHours);
    }
})(app);

