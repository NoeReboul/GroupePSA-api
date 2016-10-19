function Environment(PSAGroup) {
    this._PSAGroup = PSAGroup;
    this._language = PSAGroup.defaults.language;
    this.path = 'environment';
}

module.exports = Environment;

Environment.prototype.get = function get(vehicle, seconds, callback) {
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
