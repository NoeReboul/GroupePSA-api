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

