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
