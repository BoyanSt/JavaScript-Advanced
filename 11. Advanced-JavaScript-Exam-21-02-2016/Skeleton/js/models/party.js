var app = app || {};

(function (scope) {
    function Party(options){
        scope._Event.call(this, options);
        this.setIsCatered(options.isCatered);
        this.setIsBirthday(options.isBirthday);
        this.setOrganiser(options.organiser);
    }
    Party.extend(scope._Event);

    Party.prototype.setIsCatered = function(isCatered) {
        if (typeof isCatered !== 'boolean') {
            throw new TypeError('Invalid input format');
        }
        this._isCatered = !!isCatered;
    };

    Party.prototype.checkIsCatered = function() {
        return this._isCatered;
    };

    Party.prototype.setIsBirthday = function(isBirthday) {
        if (typeof isBirthday !== 'boolean') {
            throw new TypeError('Invalid input format');
        }
        this._isBirthday = !!isBirthday;
    };

    Party.prototype.checkIsBirthday = function() {
        return this._isBirthday;
    };

    Party.prototype.setOrganiser = function(organiser) {
        if (!(organiser instanceof scope._Employee)) {
            throw new TypeError(' The argument is not a instance of the object Employee.');
        } else {
            this._organiser = organiser;
        }
    };

    Party.prototype.getOrganiser = function() {
        return this._organiser;
    };

    scope._Party = Party;
    scope.party = function(options){
        return new Party(options);
    }

})(app);
