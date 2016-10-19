function Crash(PSAGroup) {
    this._PSAGroup = PSAGroup;
    this._language = PSAGroup.defaults.language;
    this.path = 'crash';
}

module.exports = Crash;

Crash.prototype.getLast = function getLast(vehicle, seconds, callback) {
    if (!seconds) {
        return callback(new Error('Invalid list of seconds'));
    }

    return this._PSAGroup.get({
        url: this.path + '/get/' + vehicle.vin,
        params: {
            contract: vehicle.contract,
            listsecond: seconds 
        },
        server_token: true
    }, callback);
};

Crash.prototype.searchByDate = function searchByDate(vehicle, fromDate, toDate, limit, callback) {
    if (!fromDate) {
        return callback(new Error('Missing fromDate parameter'));

    }

    if (!toDate) {
        return callback(new Error('Missing toDate parameter'));

    }

    return this._PSAGroup.get({
        url: this.path + '/search/' + vehicle.vin,
        params: {
            contract: vehicle.contract,
            from: fromDate,
            to: toDate,
            limit: limit 
        },
        server_token: true
    }, callback);
};