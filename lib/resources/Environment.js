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
