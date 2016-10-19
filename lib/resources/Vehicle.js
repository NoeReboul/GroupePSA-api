function Vehicle(PSAGroup) {
    this._PSAGroup = PSAGroup;
    this._language = PSAGroup.defaults.language;
    this.path = 'vehicle';
}

module.exports = Vehicle;

Vehicle.prototype.getInformations = function getInformations(vehicle, callback) {
    return this._PSAGroup.get({
        url: this.path + '/information/' + vehicle.vin,
        params: {
            contract: vehicle.contract
        },
        server_token: true
    }, callback);
};
