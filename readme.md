Groupe PSA nodeJS lib
=====================

[![Build Status](https://travis-ci.org/NoeReboul/GroupePSA-api.svg?branch=master)](https://travis-ci.org/NoeReboul/GroupePSA-api)

A small nodeJS library of the PSA Group API

## Installation

	npm install GroupePSAConnectedCar

## Usage

	var PSA = require('GroupePSAConnectedCar');

	var psa = new PSA({
		'client_id': '',
		'name': "myFirstApp",
		'language': 'fr_FR'
	});

	psa.setVehicle({
		'vin' : '123456',
		'contract': 'ABCDEF',
		'brand': 'c'
	});

	psa.environment.get('1,2,3,4,5,6,7,8,9,10,11,12', function(err,res){
		if (!err) {
			console.log(res);
		}
	});

## Tests

	npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Todo

 * comments
 * implement POST operations
 * implement PUT operations

## Release History

* 0.1.0 Initial release