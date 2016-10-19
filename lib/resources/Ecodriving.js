function Ecodriving(PSAGroup) {
    this._PSAGroup = PSAGroup;
    this._language = PSAGroup.defaults.language;
    this.path = 'ecodriving';
}

module.exports = Ecodriving;

Ecodriving.prototype.get = function get(vehicle, callback) {

    return this._PSAGroup.get({
        url: this.path + '/evaluation/get/' + vehicle.vin,
        params: {
            contract: vehicle.contract,
            locale: this._language,
            brand: vehicle.brand 
        },
        server_token: true
    }, callback);
};

Ecodriving.prototype.getByDate = function getByDate(vehicle, date, limit, callback) {
    if (!date) {
        return callback(new Error('Missing date parameter'));
    }

    return this._PSAGroup.get({
        url: this.path + '/evaluation/daytrips/' + vehicle.vin,
        params: {
            contract: vehicle.contract,
            day: date.toYYYYMMDD(), 
            locale: this._language,
            brand: vehicle.brand 
        },
        server_token: true
    }, callback);
};

Ecodriving.prototype.getByTrip = function getByTrip(vehicle, trip, callback) {
    if (!trip) {
        return callback(new Error('Missing trip parameter'));

    }

    return this._PSAGroup.get({
        url: this.path + '/evaluation/pertrip/' + vehicle.vin + '/' + trip,
        params: {
            contract: vehicle.contract,
            locale: this._language,
            brand: vehicle.brand 
        },
        server_token: true
    }, callback);
};

Ecodriving.prototype.getForLastTrip = function getForLastTrip(vehicle, callback) {

    return this._PSAGroup.get({
        url: this.path + '/evaluation/lasttrip/' + vehicle.vin,
        params: {
            contract: vehicle.contract,
            locale: this._language,
            brand: vehicle.brand 
        },
        server_token: true
    }, callback);
};

Ecodriving.prototype.searchByDate = function searchByDate(vehicle, fromDate, toDate, callback) {
    if (!fromDate) {
        return callback(new Error('Missing fromDate parameter'));
    }

    if (!toDate) {
        return callback(new Error('Missing toDate parameter'));
    }

    return this._PSAGroup.get({
        url: this.path + '/evaluation/trip/day/' + vehicle.vin,
        params: {
            contract: vehicle.contract,
            fromday: fromDate.toYYYYMMDD(),
            today: toDate.toYYYYMMDD(),
            locale: this._language,
            brand: vehicle.brand 
        },
        server_token: true
    }, callback);
};

Ecodriving.prototype.searchByMonth = function searchByMonth(vehicle, fromMonth, toMonth, callback) {
    if (!fromMonth) {
        return callback(new Error('Missing from month parameter'));
    }

    if (!toMonth) {
        return callback(new Error('Missing to month parameter'));
    }

    return this._PSAGroup.get({
        url: this.path + '/evaluation/trip/month/' + vehicle.vin,
        params: {
            contract: vehicle.contract,
            frommonth: fromMonth.toYYYYMM(),
            tomonth: toMonth.toYYYYMM(),
            locale: this._language,
            brand: vehicle.brand 
        },
        server_token: true
    }, callback);
};

