function Safety(PSAGroup) {
    this._PSAGroup = PSAGroup;
    this._language = PSAGroup.defaults.language;
    this.path = 'safety';
}

module.exports = Safety;

Safety.prototype.getDrivingAssistanceStatus = function getDrivingAssistanceStatus(vehicle, seconds, callback) {
    if (!seconds) {
        return callback(new Error('Invalid list of seconds'));
    }

    return this._PSAGroup.get({
        url: this.path + '/drivingassistance/' + vehicle.vin,
        params: {
            contract: vehicle.contract,
            listsecond: seconds 
        },
        server_token: true
    }, callback);
};

Safety.prototype.getDrivingAssistanceStatusByDay = function getDrivingAssistanceStatusByDay(vehicle, day, seconds, callback) {
    if (!seconds) {
        return callback(new Error('Invalid list of seconds'));
    }

    if (!day) {
        return callback(new Error('Missing day parameter'));
    }

    return this._PSAGroup.get({
        url: this.path + '/drivingassistance/' + vehicle.vin,
        params: {
            contract: vehicle.contract,
            day: day.toYYYYMMDD(),
            listsecond: seconds 
        },
        server_token: true
    }, callback);
};

Safety.prototype.getSafetyAssistanceStatus = function getSafetyAssistanceStatus(vehicle, seconds, callback) {
    if (!seconds) {
        return callback(new Error('Invalid list of seconds'));
    }

    return this._PSAGroup.get({
        url: this.path + '/safetyassistance/' + vehicle.vin,
        params: {
            contract: vehicle.contract,
            listsecond: seconds 
        },
        server_token: true
    }, callback);
};

Safety.prototype.getSafetyAssistanceStatusByDay = function getSafetyAssistanceStatusByDay(vehicle, day, seconds, callback) {
    if (!seconds) {
        return callback(new Error('Invalid list of seconds'));
    }

    if (!day) {
        return callback(new Error('Missing day parameter'));
    }

    return this._PSAGroup.get({
        url: this.path + '/safetyassistance/' + vehicle.vin,
        params: {
            contract: vehicle.contract,
            day: day.toYYYYMMDD(),
            listsecond: seconds 
        },
        server_token: true
    }, callback);
};
