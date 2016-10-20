/*
 * node-groupe-psa-api
 * https://github.com/NoeReboul/GroupePSA-api
 *
¨*  Copyright 2016 Noe Reboul
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/ 

function Trip(PSAGroup) {
    this._PSAGroup = PSAGroup;
    this._language = PSAGroup.defaults.language;
    this.path = 'trip';
}

module.exports = Trip;

Trip.prototype.get = function get(vehicle, limit, callback) {
    return this._PSAGroup.get({
        url: this.path + '/last/' + vehicle.vin,
        params: {
            contract: vehicle.contract,
            limit: limit,
            unit: this._PSAGroup.defaults.unit
        },
        server_token: true
    }, callback);
};

Trip.prototype.getLast = function getLast(vehicle, callback) {
    return this.get(vehicle, 1, callback);
};

Trip.prototype.getById = function getById(vehicle, id, callback) {
    if (!id) {
        return callback(new Error('Missing trip id parameter'));

    }

    return this._PSAGroup.get({
        url: this.path + '/id/' + vehicle.vin + '/' + id,
        params: {
            contract: vehicle.contract,
            unit: this._PSAGroup.defaults.unit
        },
        server_token: true
    }, callback);
};

Trip.prototype.getByDay = function getByDay(vehicle, day, limit, callback) {
    if (!day) {
        return callback(new Error('Missing day parameter'));

    }
    var dayAfter = new Date(day.getTime() + 24 * 60 * 60 * 1000);

    return this.searchByDate(vehicle, day, dayAfter, limit, callback);
};

Trip.prototype.getReferenceTrip = function getReferenceTrip(vehicle, callback) {
    return this._PSAGroup.get({
        url: this.path + '/referencetrip/' + vehicle.vin,
        params: {
            contract: vehicle.contract,
            unit: this._PSAGroup.defaults.unit
        },
        server_token: true
    }, callback);
};

Trip.prototype.getFuelPrice = function getFuelPrice(vehicle, callback) {
    return this._PSAGroup.get({
        url: this.path + '/reference/fuelprice/' + vehicle.vin,
        params: {
            contract: vehicle.contract,
            unit: this._PSAGroup.defaults.unit
        },
        server_token: true
    }, callback);
};

Trip.prototype.searchByDate = function searchByDate(vehicle, fromDate, toDate, limit, callback) {
    if (!fromDate) {
        return callback(new Error('Missing fromDate parameter'));

    }

    if (!toDate) {
        return callback(new Error('Missing toDate parameter'));

    }
    if (!limit) {
        return callback(new Error('Missing limit parameter'));

    }
    return this._PSAGroup.get({
        url: this.path + '/period/' + vehicle.vin,
        params: {
            contract: vehicle.contract,
            from: fromDate.toYYYYMMDD(),
            to: toDate.toYYYYMMDD(),
            limit: limit,
            unit: this._PSAGroup.defaults.unit
        },
        server_token: true
    }, callback);
};

Trip.prototype.getWaypoints = function getWaypoints(vehicle, id, seconds, near, callback) {
    if (!id) {
        return callback(new Error('Missing trip id parameter'));
    }

    return this._PSAGroup.get({
        url: 'place/positions/trip/' + vehicle.vin,
        params: {
            contract: vehicle.contract,
            tripid: id, 
            listsecond: seconds, 
            near: near ? near : 1 
        },
        server_token: true
    }, callback);
};
