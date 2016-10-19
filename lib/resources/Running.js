function Running(PSAGroup) {
    this._PSAGroup = PSAGroup;
    this._language = PSAGroup.defaults.language;
    this.path = 'running';
}

module.exports = Running;

Running.prototype.getStatus = function getStatus(vehicle, seconds, callback) {
    if (!seconds) {
        return callback(new Error('Invalid list of seconds'));
    }

    return this._PSAGroup.get({
        url: this.path + '/data/' + vehicle.vin,
        params: {
            contract: vehicle.contract,
            listsecond: seconds 
        },
        server_token: true
    }, callback);
};

Running.prototype.getLightStatus = function getLightStatus(vehicle, seconds, callback) {
    if (!seconds) {
        return callback(new Error('Invalid list of seconds'));
    }

    return this._PSAGroup.get({
        url: this.path + '/data/lightstatus/' + vehicle.vin,
        params: {
            contract: vehicle.contract,
            listsecond: seconds 
        },
        server_token: true
    }, callback);
};
