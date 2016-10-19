function Place(PSAGroup) {
    this._PSAGroup = PSAGroup;
    this._language = PSAGroup.defaults.language;
    this.path = 'place';
}

module.exports = Place;

Place.prototype.getLast = function getLast(vehicle, seconds, near, callback) {
    if (!seconds) {
        return callback(new Error('Invalid list of seconds'));
    }

    return this._PSAGroup.get({
        url: this.path + '/lastposition/' + vehicle.vin,
        params: {
            contract: vehicle.contract,
            listsecond: seconds, 
            near: near 
        },
        server_token: true
    }, callback);
};

Place.prototype.getForTrip = function getForTrip(vehicle, id, seconds, near, callback) {
    if (!seconds) {
        return callback(new Error('Invalid list of seconds'));
    }

    if (!id) {
        return callback(new Error('Missing trip id parameter'));
    }

    return this._PSAGroup.get({
        url: this.path + '/positions/trip/' + vehicle.vin,
        params: {
            contract: vehicle.contract,
            tripid: id, 
            listsecond: seconds, 
            near: near 
        },
        server_token: true
    }, callback);
};
