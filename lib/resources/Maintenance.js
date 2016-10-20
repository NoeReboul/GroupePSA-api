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