function Maintenance(PSAGroup) {
    this._PSAGroup = PSAGroup;
    this._language = PSAGroup.defaults.language;
    this.path = 'maintenance';
}

module.exports = Maintenance;

Maintenance.prototype.get = function get(vehicle, callback) {
    return this._PSAGroup.get({
        url: this.path + '/' + vehicle.vin,
        params: {
            contract: vehicle.contract,
            locale: this._language,
            brand: vehicle.brand 
        },
        server_token: true
    }, callback);
};

Maintenance.prototype.getAlerts = function getAlerts(vehicle, active, callback) {
    if (!active) {
        return callback(new Error('Missing active parameter'));
    }

    return this._PSAGroup.get({
        url: this.path + '/alert/' + vehicle.vin,
        params: {
            contract: vehicle.contract,
            active: active ? 1 : 0,
            locale: this._language,
            brand: vehicle.brand 
        },
        server_token: true
    }, callback);
};