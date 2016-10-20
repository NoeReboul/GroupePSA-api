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
