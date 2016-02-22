var app = app || {};

(function (scope) {
    function Event(options) {
        if (this.constructor === Event) {
            throw new Error("Can't instantiate abstract class!");
        }
        this.setTitle(options.title);
        this.setType(options.type);
        this.setDuration(options.duration);
        this.setDate(options.date);
    }

    Event.prototype.setTitle = function (title) {
        var pattern = /^[a-zA-Z ]+$/g;
        if (!title.match(pattern) || !title) {
            throw new TypeError(' The title is not in valid format.');
        } else {
            this._title = title;
        }
    };

    Event.prototype.getTitle = function () {
        return this._title;
    };

    Event.prototype.setType = function (type) {
        var pattern = /^[a-zA-Z ]+$/g;
        if (!type.match(pattern) || !type) {
            throw new TypeError(' The type is not in valid format.');
        } else {
            this._type = type;
        }
    };

    Event.prototype.getType = function () {
        return this._type;
    };

    Event.prototype.setDuration = function (duration) {
        var pattern = /^[0-9]+$/g;
        if (!duration.toString().match(pattern) || !duration) {
            throw new TypeError(' The duration is not in valid format.');
        } else {
            this._duration = duration;
        }
    };

    Event.prototype.getDuration = function () {
        return this._duration;
    };

    Event.prototype.setDate = function (date) {
        if (Object.prototype.toString.call(date) !== '[object Date]') {
            throw new TypeError(' The date is not in valid format.');
        } else {
            this._date = date;
        }
    };

    Event.prototype.getDate = function () {
        return this._date;
    };

    scope._Event = Event;

})(app);