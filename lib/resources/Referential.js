function Referential(PSAGroup) {
    this._PSAGroup = PSAGroup;
    this._language = PSAGroup.defaults.language;
    this.path = 'referential';
}

module.exports = Referential;

Referential.prototype.getAlertsReference = function getAlertsReference(vehicle, callback) {
    return this._PSAGroup.get({
        url: this.path + '/alert',
        params: {
            brand: vehicle.brand,
            locale: this._language 
        },
        server_token: true
    }, callback);
};

Referential.prototype.getMaintenanceReference = function getMaintenanceReference(vehicle, callback) {

    return this._PSAGroup.get({
        url: this.path + '/maintenance',
        params: {
            brand: vehicle.brand,
            locale: this._language 
        },
        server_token: true
    }, callback);
};

Referential.prototype.getEcodrivingReference = function getEcodrivingReference(vehicle, callback) {

    return this._PSAGroup.get({
        url: this.path + '/ecodriving',
        params: {
            brand: vehicle.brand,
            locale: this._language 
        },
        server_token: true
    }, callback);
};
