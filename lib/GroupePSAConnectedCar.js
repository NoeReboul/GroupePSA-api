'use strict';
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

var util = require('util');
var request = require('request');
var qs = require('querystring');

var resources = {
    Crash: require('./resources/Crash'),
    Ecodriving: require('./resources/Ecodriving'),
    Environment: require('./resources/Environment'),
    Maintenance: require('./resources/Maintenance'),
    Place: require('./resources/Place'),
    Referential: require('./resources/Referential'),
    Running: require('./resources/Running'),
    Trip: require('./resources/Trip'),
    Safety: require('./resources/Safety'),
    Vehicle: require('./resources/Vehicle')
};

function GroupePSAConnectedCar(options) {
    this.defaults = {
        client_id: options.client_id,
        name: options.name,
        base_url: 'https://api.mpsa.com/api/',
        environment: options.environment ? options.environment : 'dev',
        version: options.version ? options.version : '1.0',
        language: options.language ? options.language : 'fr_FR',
        unit: options.unit ? options.unit : '0' // 0 for metric 1 for imperial
    };

    this.resources = resources;

    this._initResources();
}

module.exports = GroupePSAConnectedCar;

GroupePSAConnectedCar.prototype._initResources = function() {
    for (var name in this.resources) {
        if ({}.hasOwnProperty.call(this.resources, name)) {
            this[name.toLowerCase()] = new resources[name](this);
        }
    }
};

GroupePSAConnectedCar.prototype.get = function get(options, callback) {
    var url = this.getRequestURL(options.url);

    options.params.client_id = this.defaults.client_id;

    if (options.params) {
        url += '?' + qs.stringify(options.params);
    }

    request.get({
        url: url,
        json: true,
        headers: {
            'Content-Type': 'application/json'
        }
    }, function(err, data, res) {
        if (err || data.statusCode >= 400) {
            return callback((err ? err : data), res);
        } else {
            return callback(null, res);
        }
    });

    return this;
};

GroupePSAConnectedCar.prototype.getRequestURL = function getRequestURL(url) {
    return this.defaults.base_url + this.defaults.environment + '/' + this.defaults.version + '/' + url
};

Date.prototype.toYYYYMMDD = function() {
  var mm = ("0" + (this.getMonth() + 1)).slice(-2);
  var dd = ("0" + this.getDate()).slice(-2);

  return [this.getFullYear(), mm, dd].join(''); 
};

Date.prototype.toYYYYMM = function() {
  var mm = ("0" + (this.getMonth() + 1)).slice(-2);

  return [this.getFullYear(), mm].join(''); 
};
