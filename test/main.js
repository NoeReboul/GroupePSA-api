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


var chai = require('chai');
var should = chai.should();

chai.use(require('chai-json-schema'));

var PSA = require('../lib/GroupePSAConnectedCar');

var psa = new PSA({
    'client_id': process.env.CLIENT_ID,
    'name': "myFirstApp",
    'language': 'fr_FR'
});

var vehicle = {
    'vin': '123456',
    'contract': 'ABCDEF',
    'brand': 'C'
};

var trip = 9388;

var near = 1;

var _seconds = function(){
	var r = "";
	for (i=1 ; i<60; i++ ){
		r= r + i + ','
	}
	return r + '60';
}


var list_of_seconds = _seconds();

var today = new Date();

var yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);

var onemonthago = new Date(today);
onemonthago.setDate(today.getDate() - 31);


var crash_schema = {
    title: 'crash schema',
    type: 'object',
    required: ['totMileage',
        'flipVeh',
        'highRearCrashInfo',
        'avgRearCrashInfo',
        'lowRearCrashInfo',
        'repairRearCrashInfo',
        'highFrontCrashInfo',
        'avgFrontCrashInfoN1',
        'avgFrontCrashInfoN2',
        'lowFrontCrashInfo',
        'repairFrontCrashInfo',
        'pedestCrashInfo1_41',
        'pedestCrashInfo1_60',
        'pedestCrashInfo2_60',
        'pedestCrashInfo3_60',
        'highLatCrashInfo',
        'avgLatCrashInfo',
        'lowLatCrashInfo',
        'repairLatCrashInfo',
        'vin',
        'lastUpdate',
        'contract'
    ],
    properties: {
        totMileage: {
            type: 'object'
        },
        flipVeh: {
            type: 'object'
        },
        highRearCrashInfo: {
            type: 'object'
        },
        avgRearCrashInfo: {
            type: 'object'
        },
        lowRearCrashInfo: {
            type: 'object'
        },
        repairRearCrashInfo: {
            type: 'object'
        },
        highFrontCrashInfo: {
            type: 'object'
        },
        avgFrontCrashInfoN1: {
            type: 'object'
        },
        avgFrontCrashInfoN2: {
            type: 'object'
        },
        lowFrontCrashInfo: {
            type: 'object'
        },
        repairFrontCrashInfo: {
            type: 'object'
        },
        pedestCrashInfo1_41: {
            type: 'number'
        },
        pedestCrashInfo1_60: {
            type: 'number'
        },
        pedestCrashInfo2_60: {
            type: 'number'
        },
        pedestCrashInfo3_60: {
            type: 'number'
        },
        highLatCrashInfo: {
            type: 'object'
        },
        avgLatCrashInfo: {
            type: 'object'
        },
        lowLatCrashInfo: {
            type: 'object'
        },
        repairLatCrashInfo: {
            type: 'object'
        },
        vin: {
            type: 'string'
        },
        lastUpdate: {
            type: 'string'
        },
        contract: {
            type: 'string'
        }
    }
};

var crash_list_schema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "totMileage": {
        "type": "object",
        "properties": {
          "41": {
            "type": "number"
          },
          "60": {
            "type": "number"
          }
        }
      },
      "flipVeh": {
        "type": "object",
        "properties": {
          "41": {
            "type": "integer"
          },
          "60": {
            "type": "integer"
          }
        }
      },
      "highRearCrashInfo": {
        "type": "object",
        "properties": {
          "41": {
            "type": "integer"
          },
          "60": {
            "type": "integer"
          }
        }
      },
      "avgRearCrashInfo": {
        "type": "object",
        "properties": {
          "41": {
            "type": "integer"
          },
          "60": {
            "type": "integer"
          }
        }
      },
      "lowRearCrashInfo": {
        "type": "object",
        "properties": {
          "41": {
            "type": "integer"
          },
          "60": {
            "type": "integer"
          }
        }
      },
      "repairRearCrashInfo": {
        "type": "object",
        "properties": {
          "41": {
            "type": "integer"
          },
          "60": {
            "type": "integer"
          }
        }
      },
      "highFrontCrashInfo": {
        "type": "object",
        "properties": {
          "41": {
            "type": "integer"
          },
          "60": {
            "type": "integer"
          }
        }
      },
      "avgFrontCrashInfoN1": {
        "type": "object",
        "properties": {
          "41": {
            "type": "integer"
          },
          "60": {
            "type": "integer"
          }
        }
      },
      "avgFrontCrashInfoN2": {
        "type": "object",
        "properties": {
          "41": {
            "type": "integer"
          },
          "60": {
            "type": "integer"
          }
        }
      },
      "lowFrontCrashInfo": {
        "type": "object",
        "properties": {
          "41": {
            "type": "integer"
          },
          "60": {
            "type": "integer"
          }
        }
      },
      "repairFrontCrashInfo": {
        "type": "object",
        "properties": {
          "41": {
            "type": "integer"
          },
          "60": {
            "type": "integer"
          }
        }
      },
      "pedestCrashInfo1_41": {
        "type": "integer"
      },
      "pedestCrashInfo1_60": {
        "type": "integer"
      },
      "pedestCrashInfo2_60": {
        "type": "integer"
      },
      "pedestCrashInfo3_60": {
        "type": "integer"
      },
      "highLatCrashInfo": {
        "type": "object",
        "properties": {
          "41": {
            "type": "integer"
          },
          "60": {
            "type": "integer"
          }
        }
      },
      "avgLatCrashInfo": {
        "type": "object",
        "properties": {
          "41": {
            "type": "integer"
          },
          "60": {
            "type": "integer"
          }
        }
      },
      "lowLatCrashInfo": {
        "type": "object",
        "properties": {
          "41": {
            "type": "integer"
          },
          "60": {
            "type": "integer"
          }
        }
      },
      "repairLatCrashInfo": {
        "type": "object",
        "properties": {
          "41": {
            "type": "integer"
          },
          "60": {
            "type": "integer"
          }
        }
      },
      "vin": {
        "type": "string"
      },
      "lastUpdate": {
        "type": "string"
      },
      "contract": {
        "type": "string"
      }
    }
  }
};

var ecodriving_schema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "globalEvaluation": {
      "type": "object",
      "properties": {
        "drivingMark": {
          "type": "number"
        },
        "drivingMarkLabel": {
          "type": "object",
          "properties": {
            "evaluation": {
              "type": "string"
            },
            "advice": {
              "type": "string"
            },
            "category": {
              "type": "string"
            },
            "label": {
              "type": "string"
            }
          },
          "required": [
            "evaluation",
            "advice",
            "category",
            "label"
          ]
        },
        "drivingAttitude": {
          "type": "number"
        },
        "drivingAttitudeLabel": {
          "type": "object",
          "properties": {
            "evaluation": {
              "type": "string"
            },
            "advice": {
              "type": "string"
            },
            "category": {
              "type": "string"
            },
            "label": {
              "type": "string"
            }
          },
          "required": [
            "evaluation",
            "advice",
            "category",
            "label"
          ]
        },
        "roadProfile": {
          "type": "number"
        },
        "roadProfileLabel": {
          "type": "object",
          "properties": {
            "evaluation": {
              "type": "string"
            },
            "advice": {
              "type": "string"
            },
            "category": {
              "type": "string"
            },
            "label": {
              "type": "string"
            }
          },
          "required": [
            "evaluation",
            "advice",
            "category",
            "label"
          ]
        }
      },
      "required": [
        "drivingMark",
        "drivingMarkLabel",
        "drivingAttitude",
        "drivingAttitudeLabel",
        "roadProfile",
        "roadProfileLabel"
      ]
    },
    "detailedEvaluation": {
      "type": "object",
      "properties": {
        "acceleration": {
          "type": "number"
        },
        "accelerationLabel": {
          "type": "object",
          "properties": {
            "evaluation": {
              "type": "string"
            },
            "advice": {
              "type": "string"
            },
            "category": {
              "type": "string"
            },
            "label": {
              "type": "string"
            }
          },
          "required": [
            "evaluation",
            "advice",
            "category",
            "label"
          ]
        },
        "braking": {
          "type": "number"
        },
        "brakingLabel": {
          "type": "object",
          "properties": {
            "evaluation": {
              "type": "string"
            },
            "advice": {
              "type": "string"
            },
            "category": {
              "type": "string"
            },
            "label": {
              "type": "string"
            }
          },
          "required": [
            "evaluation",
            "advice",
            "category",
            "label"
          ]
        },
        "engineSpeed": {
          "type": "number"
        },
        "engineSpeedLabel": {
          "type": "object",
          "properties": {
            "evaluation": {
              "type": "string"
            },
            "advice": {
              "type": "string"
            },
            "category": {
              "type": "string"
            },
            "label": {
              "type": "string"
            }
          },
          "required": [
            "evaluation",
            "advice",
            "category",
            "label"
          ]
        },
        "stopAndStart": {
          "type": "number"
        },
        "stopAndStartLabel": {
          "type": "object",
          "properties": {
            "evaluation": {
              "type": "string"
            },
            "advice": {
              "type": "string"
            },
            "category": {
              "type": "string"
            },
            "label": {
              "type": "string"
            }
          },
          "required": [
            "evaluation",
            "advice",
            "category",
            "label"
          ]
        },
        "speed": {
          "type": "number"
        },
        "speedLabel": {
          "type": "object",
          "properties": {
            "evaluation": {
              "type": "string"
            },
            "advice": {
              "type": "string"
            },
            "category": {
              "type": "string"
            },
            "label": {
              "type": "string"
            }
          },
          "required": [
            "evaluation",
            "advice",
            "category",
            "label"
          ]
        },
        "slope": {
          "type": "number"
        },
        "slopeLabel": {
          "type": "object",
          "properties": {
            "evaluation": {
              "type": "string"
            },
            "advice": {
              "type": "string"
            },
            "category": {
              "type": "string"
            },
            "label": {
              "type": "string"
            }
          },
          "required": [
            "evaluation",
            "advice",
            "category",
            "label"
          ]
        },
        "coldTrips": {
          "type": "number"
        },
        "coldTripsLabel": {
          "type": "object",
          "properties": {
            "evaluation": {
              "type": "string"
            },
            "advice": {
              "type": "string"
            },
            "category": {
              "type": "string"
            },
            "label": {
              "type": "string"
            }
          },
          "required": [
            "evaluation",
            "advice",
            "category",
            "label"
          ]
        }
      },
      "required": [
        "acceleration",
        "accelerationLabel",
        "braking",
        "brakingLabel",
        "engineSpeed",
        "engineSpeedLabel",
        "stopAndStart",
        "stopAndStartLabel",
        "speed",
        "speedLabel",
        "slope",
        "slopeLabel",
        "coldTrips",
        "coldTripsLabel"
      ]
    },
    "vin": {
      "type": "string"
    },
    "lastUpdate": {
      "type": "string"
    },
    "contract": {
      "type": "string"
    }
  },
  "required": [
    "globalEvaluation",
    "detailedEvaluation",
    "vin",
    "lastUpdate",
    "contract"
  ]
};

var ecodriving_list_schema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "tripId": {
        "type": "integer"
      },
      "globalEvaluation": {
        "type": "object",
        "properties": {
          "duration": {
            "type": "integer"
          },
          "drivingMark": {
            "type": "number"
          },
          "drivingMarkLabel": {
            "type": "object",
            "properties": {
              "evaluation": {
                "type": "string"
              },
              "advice": {
                "type": "string"
              },
              "category": {
                "type": "string"
              },
              "label": {
                "type": "string"
              }
            }
          },
          "drivingAttitude": {
            "type": "number"
          },
          "drivingAttitudeLabel": {
            "type": "object",
            "properties": {
              "evaluation": {
                "type": "string"
              },
              "advice": {
                "type": "string"
              },
              "category": {
                "type": "string"
              },
              "label": {
                "type": "string"
              }
            }
          },
          "roadProfile": {
            "type": "number"
          },
          "roadProfileLabel": {
            "type": "object",
            "properties": {
              "evaluation": {
                "type": "string"
              },
              "advice": {
                "type": "string"
              },
              "category": {
                "type": "string"
              },
              "label": {
                "type": "string"
              }
            }
          }
        }
      },
      "detailedEvaluation": {
        "type": "object",
        "properties": {
          "acceleration": {
            "type": "number"
          },
          "accelerationLabel": {
            "type": "object",
            "properties": {
              "evaluation": {
                "type": "string"
              },
              "advice": {
                "type": "string"
              },
              "category": {
                "type": "string"
              },
              "label": {
                "type": "string"
              }
            }
          },
          "braking": {
            "type": "number"
          },
          "brakingLabel": {
            "type": "object",
            "properties": {
              "evaluation": {
                "type": "string"
              },
              "advice": {
                "type": "string"
              },
              "category": {
                "type": "string"
              },
              "label": {
                "type": "string"
              }
            }
          },
          "engineSpeed": {
            "type": "number"
          },
          "engineSpeedLabel": {
            "type": "object",
            "properties": {
              "evaluation": {
                "type": "string"
              },
              "advice": {
                "type": "string"
              },
              "category": {
                "type": "string"
              },
              "label": {
                "type": "string"
              }
            }
          },
          "stopAndStart": {
            "type": "number"
          },
          "stopAndStartLabel": {
            "type": "object",
            "properties": {
              "evaluation": {
                "type": "string"
              },
              "advice": {
                "type": "string"
              },
              "category": {
                "type": "string"
              },
              "label": {
                "type": "string"
              }
            }
          },
          "speed": {
            "type": "number"
          },
          "speedLabel": {
            "type": "object",
            "properties": {
              "evaluation": {
                "type": "string"
              },
              "advice": {
                "type": "string"
              },
              "category": {
                "type": "string"
              },
              "label": {
                "type": "string"
              }
            }
          },
          "slope": {
            "type": "number"
          },
          "slopeLabel": {
            "type": "object",
            "properties": {
              "evaluation": {
                "type": "string"
              },
              "advice": {
                "type": "string"
              },
              "category": {
                "type": "string"
              },
              "label": {
                "type": "string"
              }
            }
          },
          "coldTrips": {
            "type": "number"
          },
          "coldTripsLabel": {
            "type": "object",
            "properties": {
              "evaluation": {
                "type": "string"
              },
              "advice": {
                "type": "string"
              },
              "category": {
                "type": "string"
              },
              "label": {
                "type": "string"
              }
            }
          }
        }
      },
      "vin": {
        "type": "string"
      },
      "lastUpdate": {
        "type": "string"
      },
      "contract": {
        "type": "string"
      }
    }
  }
};

var environment_schema = {
    title: 'crash schema',
    type: 'object',
    required: [
        'exteriorTemp',
        'infoDayAndNight',
        'vin',
        'lastUpdate',
        'contract'
    ],
    properties: {
        exteriorTemp: {
            type: 'object'
        },
        infoDayAndNight: {
            type: 'object'
        },
        vin: {
            type: 'string'
        },
        lastUpdate: {
            type: 'string'
        },
        contract: {
            type: 'string'
        }
    }
};

var maintenance_schema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "fuel": {
      "type": "object",
      "properties": {
        "fuelTankAlerte": {
          "type": "integer"
        },
        "fuelTankAlerteLabel": {
          "type": "object",
          "properties": {
            "label": {
              "type": "string"
            },
            "groupLabel": {
              "type": "string"
            }
          },
          "required": [
            "label",
            "groupLabel"
          ]
        },
        "residualAutonomy": {
          "type": "integer"
        },
        "residualAutonomyLabel": {
          "type": "object",
          "properties": {
            "label": {
              "type": "string"
            },
            "groupLabel": {
              "type": "string"
            }
          },
          "required": [
            "label",
            "groupLabel"
          ]
        },
        "fuelTotalConsumption": {
          "type": "integer"
        },
        "fuelTotalConsumptionLabel": {
          "type": "object",
          "properties": {
            "label": {
              "type": "string"
            },
            "groupLabel": {
              "type": "string"
            }
          },
          "required": [
            "label",
            "groupLabel"
          ]
        },
        "fuelLevel": {
          "type": "integer"
        },
        "fuelLevelLabel": {
          "type": "object",
          "properties": {
            "label": {
              "type": "string"
            },
            "groupLabel": {
              "type": "string"
            }
          },
          "required": [
            "label",
            "groupLabel"
          ]
        },
        "fuelTankCapacity": {
          "type": "integer"
        },
        "fuelTankCapacityLabel": {
          "type": "object",
          "properties": {
            "label": {
              "type": "string"
            },
            "groupLabel": {
              "type": "string"
            }
          },
          "required": [
            "label",
            "groupLabel"
          ]
        },
        "instFuelConsumption10": {
          "type": "integer"
        },
        "instFuelConsumption10Label": {
          "type": "object",
          "properties": {
            "label": {
              "type": "string"
            },
            "groupLabel": {
              "type": "string"
            }
          },
          "required": [
            "label",
            "groupLabel"
          ]
        },
        "instFuelConsumption20": {
          "type": "integer"
        },
        "instFuelConsumption20Label": {
          "type": "object",
          "properties": {
            "label": {
              "type": "string"
            },
            "groupLabel": {
              "type": "string"
            }
          },
          "required": [
            "label",
            "groupLabel"
          ]
        },
        "instFuelConsumption30": {
          "type": "integer"
        },
        "instFuelConsumption30Label": {
          "type": "object",
          "properties": {
            "label": {
              "type": "string"
            },
            "groupLabel": {
              "type": "string"
            }
          },
          "required": [
            "label",
            "groupLabel"
          ]
        },
        "instFuelConsumption40": {
          "type": "integer"
        },
        "instFuelConsumption40Label": {
          "type": "object",
          "properties": {
            "label": {
              "type": "string"
            },
            "groupLabel": {
              "type": "string"
            }
          },
          "required": [
            "label",
            "groupLabel"
          ]
        },
        "instFuelConsumption50": {
          "type": "integer"
        },
        "instFuelConsumption50Label": {
          "type": "object",
          "properties": {
            "label": {
              "type": "string"
            },
            "groupLabel": {
              "type": "string"
            }
          },
          "required": [
            "label",
            "groupLabel"
          ]
        },
        "instFuelConsumption60": {
          "type": "integer"
        },
        "instFuelConsumption60Label": {
          "type": "object",
          "properties": {
            "label": {
              "type": "string"
            },
            "groupLabel": {
              "type": "string"
            }
          },
          "required": [
            "label",
            "groupLabel"
          ]
        }
      },
      "required": [
        "fuelTankAlerte",
        "fuelTankAlerteLabel",
        "residualAutonomy",
        "residualAutonomyLabel",
        "fuelTotalConsumption",
        "fuelTotalConsumptionLabel",
        "fuelLevel",
        "fuelLevelLabel",
        "fuelTankCapacity",
        "fuelTankCapacityLabel",
        "instFuelConsumption10",
        "instFuelConsumption10Label",
        "instFuelConsumption20",
        "instFuelConsumption20Label",
        "instFuelConsumption30",
        "instFuelConsumption30Label",
        "instFuelConsumption40",
        "instFuelConsumption40Label",
        "instFuelConsumption50",
        "instFuelConsumption50Label",
        "instFuelConsumption60",
        "instFuelConsumption60Label"
      ]
    },
    "maintenance": {
      "type": "object",
      "properties": {
        "totMileage": {
          "type": "number"
        },
        "totMileageLabel": {
          "type": "object",
          "properties": {
            "label": {
              "type": "string"
            },
            "groupLabel": {
              "type": "string"
            }
          },
          "required": [
            "label",
            "groupLabel"
          ]
        },
        "indDayBeforeMaint": {
          "type": "string"
        },
        "indDayBeforeMaintLabel": {
          "type": "object",
          "properties": {
            "label": {
              "type": "string"
            },
            "groupLabel": {
              "type": "string"
            }
          },
          "required": [
            "label",
            "groupLabel"
          ]
        },
        "indMileageBeforeMaint": {
          "type": "string"
        },
        "indMileageBeforeMaintLabel": {
          "type": "object",
          "properties": {
            "label": {
              "type": "string"
            },
            "groupLabel": {
              "type": "string"
            }
          },
          "required": [
            "label",
            "groupLabel"
          ]
        },
        "dayBeforeMaint": {
          "type": "integer"
        },
        "dayBeforeMaintLabel": {
          "type": "object",
          "properties": {
            "label": {
              "type": "string"
            },
            "groupLabel": {
              "type": "string"
            }
          },
          "required": [
            "label",
            "groupLabel"
          ]
        },
        "mileageBeforeMaint": {
          "type": "number"
        },
        "mileageBeforeMaintLabel": {
          "type": "object",
          "properties": {
            "label": {
              "type": "string"
            },
            "groupLabel": {
              "type": "string"
            }
          },
          "required": [
            "label",
            "groupLabel"
          ]
        }
      },
      "required": [
        "totMileage",
        "totMileageLabel",
        "indDayBeforeMaint",
        "indDayBeforeMaintLabel",
        "indMileageBeforeMaint",
        "indMileageBeforeMaintLabel",
        "dayBeforeMaint",
        "dayBeforeMaintLabel",
        "mileageBeforeMaint",
        "mileageBeforeMaintLabel"
      ]
    },
    "vin": {
      "type": "string"
    },
    "lastUpdate": {
      "type": "string"
    },
    "contract": {
      "type": "string"
    }
  },
  "required": [
    "fuel",
    "maintenance",
    "vin",
    "lastUpdate",
    "contract"
  ]
};

var place_schema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "latitude": {
      "type": "object",
      "properties": {
        "6": {
          "type": "string"
        },
        "12": {
          "type": "string"
        },
        "18": {
          "type": "string"
        },
        "24": {
          "type": "string"
        },
        "30": {
          "type": "string"
        },
        "36": {
          "type": "string"
        },
        "42": {
          "type": "string"
        },
        "48": {
          "type": "string"
        },
        "54": {
          "type": "string"
        },
        "60": {
          "type": "string"
        }
      }
    },
    "longitude": {
      "type": "object",
      "properties": {
        "6": {
          "type": "string"
        },
        "12": {
          "type": "string"
        },
        "18": {
          "type": "string"
        },
        "24": {
          "type": "string"
        },
        "30": {
          "type": "string"
        },
        "36": {
          "type": "string"
        },
        "42": {
          "type": "string"
        },
        "48": {
          "type": "string"
        },
        "54": {
          "type": "string"
        },
        "60": {
          "type": "string"
        }
      }
    },
    "altitude": {
      "type": "object",
      "properties": {
        "6": {
          "type": "string"
        },
        "12": {
          "type": "string"
        },
        "18": {
          "type": "string"
        },
        "24": {
          "type": "string"
        },
        "30": {
          "type": "string"
        },
        "36": {
          "type": "string"
        },
        "42": {
          "type": "string"
        },
        "48": {
          "type": "string"
        },
        "54": {
          "type": "string"
        },
        "60": {
          "type": "string"
        }
      }
    },
    "nbsat": {
      "type": "object",
      "properties": {
        "6": {
          "type": "integer"
        },
        "12": {
          "type": "integer"
        },
        "18": {
          "type": "integer"
        },
        "24": {
          "type": "integer"
        },
        "30": {
          "type": "integer"
        },
        "36": {
          "type": "integer"
        },
        "42": {
          "type": "integer"
        },
        "48": {
          "type": "integer"
        },
        "54": {
          "type": "integer"
        },
        "60": {
          "type": "integer"
        }
      }
    },
    "source": {
      "type": "object",
      "properties": {
        "6": {
          "type": "string"
        },
        "12": {
          "type": "string"
        },
        "18": {
          "type": "string"
        },
        "24": {
          "type": "string"
        },
        "30": {
          "type": "string"
        },
        "36": {
          "type": "string"
        },
        "42": {
          "type": "string"
        },
        "48": {
          "type": "string"
        },
        "54": {
          "type": "string"
        },
        "60": {
          "type": "string"
        }
      }
    },
    "vin": {
      "type": "string"
    },
    "lastUpdate": {
      "type": "string"
    },
    "contract": {
      "type": "string"
    }
  },
  "required": [
    "latitude",
    "longitude",
    "altitude",
    "nbsat",
    "source",
    "vin",
    "lastUpdate",
    "contract"
  ]
};

var place_list_schema ={
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "latitude": {
        "type": "object",
        "properties": {
          "6": {
            "type": "string"
          },
          "12": {
            "type": "string"
          },
          "18": {
            "type": "string"
          },
          "24": {
            "type": "string"
          },
          "30": {
            "type": "string"
          },
          "36": {
            "type": "string"
          },
          "42": {
            "type": "string"
          },
          "48": {
            "type": "string"
          },
          "54": {
            "type": "string"
          }
        }
      },
      "longitude": {
        "type": "object",
        "properties": {
          "6": {
            "type": "string"
          },
          "12": {
            "type": "string"
          },
          "18": {
            "type": "string"
          },
          "24": {
            "type": "string"
          },
          "30": {
            "type": "string"
          },
          "36": {
            "type": "string"
          },
          "42": {
            "type": "string"
          },
          "48": {
            "type": "string"
          },
          "54": {
            "type": "string"
          }
        }
      },
      "altitude": {
        "type": "object",
        "properties": {
          "6": {
            "type": "string"
          },
          "12": {
            "type": "string"
          },
          "18": {
            "type": "string"
          },
          "24": {
            "type": "string"
          },
          "30": {
            "type": "string"
          },
          "36": {
            "type": "string"
          },
          "42": {
            "type": "string"
          },
          "48": {
            "type": "string"
          },
          "54": {
            "type": "string"
          }
        }
      },
      "nbsat": {
        "type": "object",
        "properties": {
          "6": {
            "type": "integer"
          },
          "12": {
            "type": "integer"
          },
          "18": {
            "type": "integer"
          },
          "24": {
            "type": "integer"
          },
          "30": {
            "type": "integer"
          },
          "36": {
            "type": "integer"
          },
          "42": {
            "type": "integer"
          },
          "48": {
            "type": "integer"
          },
          "54": {
            "type": "integer"
          }
        }
      },
      "source": {
        "type": "object",
        "properties": {
          "6": {
            "type": "string"
          },
          "12": {
            "type": "string"
          },
          "18": {
            "type": "string"
          },
          "24": {
            "type": "string"
          },
          "30": {
            "type": "string"
          },
          "36": {
            "type": "string"
          },
          "42": {
            "type": "string"
          },
          "48": {
            "type": "string"
          },
          "54": {
            "type": "string"
          }
        }
      },
      "vin": {
        "type": "string"
      },
      "lastUpdate": {
        "type": "string"
      },
      "contract": {
        "type": "string"
      }
    }
  }
};

var referential_schema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "indicatorCode": {
        "type": "string"
      },
      "indicatorLabel": {
        "type": "string"
      },
      "rgrpCode": {
        "type": "string"
      },
      "rgrpLabel": {
        "type": "string"
      }
    },
    "required": [
      "indicatorCode",
      "indicatorLabel",
      "rgrpCode",
      "rgrpLabel"
    ]
  }
};

var referential_alert_schema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "idAlert": {
        "type": "string"
      },
      "alertLabel": {
        "type": "string"
      },
      "alertAdvice": {
        "type": "string"
      },
      "alertCategory": {
        "type": "string"
      },
      "alertCodeFamilyLabel": {
        "type": "string"
      },
      "option": {
        "type": "string"
      },
      "alertCodeFamily": {
        "type": "string"
      }
    },
    "required": [
      "idAlert",
      "alertLabel",
      "alertAdvice",
      "alertCategory",
      "alertCodeFamilyLabel",
      "option",
      "alertCodeFamily"
    ]
  }
};

var referential_ecodriving_schema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "edMarkType": {
        "type": "string"
      },
      "edMarkLabel": {
        "type": "string"
      },
      "edCategoryCode": {
        "type": "string"
      },
      "edCategoryLabel": {
        "type": "string"
      },
      "edEvaluation": {
        "type": "string"
      },
      "edAdvice": {
        "type": "string"
      },
      "edLevel": {
        "type": "string"
      }
    },
    "required": [
      "edMarkType",
      "edMarkLabel",
      "edCategoryCode",
      "edCategoryLabel",
      "edEvaluation",
      "edLevel"
    ]
  }
};

var running_schema = {
    title: 'crash schema',
    type: 'object',
    required: [
        'accelerationVeh',
        'modeBV',
        'engineSpeed',
        'fuelLevel',
        'tempOilEng',
        'instFuelConsumption',
        'gmpState',
        'vin',
        'contract'
    ],
    properties: {
        accelerationVeh: {
            type: 'object'
        },
        modeBV: {
            type: 'object'
        },
        engineSpeed: {
            type: 'object'
        },
        fuelLevel: {
            type: 'string'
        },
        tempOilEng: {
            type: 'string'
        },
        instFuelConsumption: {
            type: 'object'
        },
        gmpState: {
            type: 'number'
        },
        vin: {
            type: 'string'
        },
        contract: {
            type: 'string'
        }
    }
};

var running_light_schema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "fogFront": {
      "type": "object",
      "properties": {
        "30": {
          "type": "integer"
        },
        "41": {
          "type": "integer"
        },
        "60": {
          "type": "integer"
        }
      }
    },
    "fogRear": {
      "type": "object",
      "properties": {
        "30": {
          "type": "integer"
        },
        "41": {
          "type": "integer"
        },
        "60": {
          "type": "integer"
        }
      }
    },
    "turnRight": {
      "type": "object",
      "properties": {
        "1": {
          "type": "integer"
        },
        "2": {
          "type": "integer"
        },
        "3": {
          "type": "integer"
        },
        "4": {
          "type": "integer"
        },
        "5": {
          "type": "integer"
        },
        "6": {
          "type": "integer"
        },
        "7": {
          "type": "integer"
        },
        "8": {
          "type": "integer"
        },
        "9": {
          "type": "integer"
        },
        "10": {
          "type": "integer"
        },
        "11": {
          "type": "integer"
        },
        "12": {
          "type": "integer"
        },
        "13": {
          "type": "integer"
        },
        "14": {
          "type": "integer"
        },
        "15": {
          "type": "integer"
        },
        "16": {
          "type": "integer"
        },
        "17": {
          "type": "integer"
        },
        "18": {
          "type": "integer"
        },
        "19": {
          "type": "integer"
        },
        "20": {
          "type": "integer"
        },
        "21": {
          "type": "integer"
        },
        "22": {
          "type": "integer"
        },
        "23": {
          "type": "integer"
        },
        "24": {
          "type": "integer"
        },
        "25": {
          "type": "integer"
        },
        "26": {
          "type": "integer"
        },
        "27": {
          "type": "integer"
        },
        "28": {
          "type": "integer"
        },
        "29": {
          "type": "integer"
        },
        "30": {
          "type": "integer"
        },
        "31": {
          "type": "integer"
        },
        "32": {
          "type": "integer"
        },
        "33": {
          "type": "integer"
        },
        "34": {
          "type": "integer"
        },
        "35": {
          "type": "integer"
        },
        "36": {
          "type": "integer"
        },
        "37": {
          "type": "integer"
        },
        "38": {
          "type": "integer"
        },
        "39": {
          "type": "integer"
        },
        "40": {
          "type": "integer"
        },
        "41": {
          "type": "integer"
        },
        "42": {
          "type": "integer"
        },
        "43": {
          "type": "integer"
        },
        "44": {
          "type": "integer"
        },
        "45": {
          "type": "integer"
        },
        "46": {
          "type": "integer"
        },
        "47": {
          "type": "integer"
        },
        "48": {
          "type": "integer"
        },
        "49": {
          "type": "integer"
        },
        "50": {
          "type": "integer"
        },
        "51": {
          "type": "integer"
        },
        "52": {
          "type": "integer"
        },
        "53": {
          "type": "integer"
        },
        "54": {
          "type": "integer"
        },
        "55": {
          "type": "integer"
        },
        "56": {
          "type": "integer"
        },
        "57": {
          "type": "integer"
        },
        "58": {
          "type": "integer"
        },
        "59": {
          "type": "integer"
        },
        "60": {
          "type": "integer"
        }
      }
    },
    "turnLeft": {
      "type": "object",
      "properties": {
        "1": {
          "type": "integer"
        },
        "2": {
          "type": "integer"
        },
        "3": {
          "type": "integer"
        },
        "4": {
          "type": "integer"
        },
        "5": {
          "type": "integer"
        },
        "6": {
          "type": "integer"
        },
        "7": {
          "type": "integer"
        },
        "8": {
          "type": "integer"
        },
        "9": {
          "type": "integer"
        },
        "10": {
          "type": "integer"
        },
        "11": {
          "type": "integer"
        },
        "12": {
          "type": "integer"
        },
        "13": {
          "type": "integer"
        },
        "14": {
          "type": "integer"
        },
        "15": {
          "type": "integer"
        },
        "16": {
          "type": "integer"
        },
        "17": {
          "type": "integer"
        },
        "18": {
          "type": "integer"
        },
        "19": {
          "type": "integer"
        },
        "20": {
          "type": "integer"
        },
        "21": {
          "type": "integer"
        },
        "22": {
          "type": "integer"
        },
        "23": {
          "type": "integer"
        },
        "24": {
          "type": "integer"
        },
        "25": {
          "type": "integer"
        },
        "26": {
          "type": "integer"
        },
        "27": {
          "type": "integer"
        },
        "28": {
          "type": "integer"
        },
        "29": {
          "type": "integer"
        },
        "30": {
          "type": "integer"
        },
        "31": {
          "type": "integer"
        },
        "32": {
          "type": "integer"
        },
        "33": {
          "type": "integer"
        },
        "34": {
          "type": "integer"
        },
        "35": {
          "type": "integer"
        },
        "36": {
          "type": "integer"
        },
        "37": {
          "type": "integer"
        },
        "38": {
          "type": "integer"
        },
        "39": {
          "type": "integer"
        },
        "40": {
          "type": "integer"
        },
        "41": {
          "type": "integer"
        },
        "42": {
          "type": "integer"
        },
        "43": {
          "type": "integer"
        },
        "44": {
          "type": "integer"
        },
        "45": {
          "type": "integer"
        },
        "46": {
          "type": "integer"
        },
        "47": {
          "type": "integer"
        },
        "48": {
          "type": "integer"
        },
        "49": {
          "type": "integer"
        },
        "50": {
          "type": "integer"
        },
        "51": {
          "type": "integer"
        },
        "52": {
          "type": "integer"
        },
        "53": {
          "type": "integer"
        },
        "54": {
          "type": "integer"
        },
        "55": {
          "type": "integer"
        },
        "56": {
          "type": "integer"
        },
        "57": {
          "type": "integer"
        },
        "58": {
          "type": "integer"
        },
        "59": {
          "type": "integer"
        },
        "60": {
          "type": "integer"
        }
      }
    },
    "brakeLight": {
      "type": "object",
      "properties": {
        "1": {
          "type": "integer"
        },
        "2": {
          "type": "integer"
        },
        "3": {
          "type": "integer"
        },
        "4": {
          "type": "integer"
        },
        "5": {
          "type": "integer"
        },
        "6": {
          "type": "integer"
        },
        "7": {
          "type": "integer"
        },
        "8": {
          "type": "integer"
        },
        "9": {
          "type": "integer"
        },
        "10": {
          "type": "integer"
        },
        "11": {
          "type": "integer"
        },
        "12": {
          "type": "integer"
        },
        "13": {
          "type": "integer"
        },
        "14": {
          "type": "integer"
        },
        "15": {
          "type": "integer"
        },
        "16": {
          "type": "integer"
        },
        "17": {
          "type": "integer"
        },
        "18": {
          "type": "integer"
        },
        "19": {
          "type": "integer"
        },
        "20": {
          "type": "integer"
        },
        "21": {
          "type": "integer"
        },
        "22": {
          "type": "integer"
        },
        "23": {
          "type": "integer"
        },
        "24": {
          "type": "integer"
        },
        "25": {
          "type": "integer"
        },
        "26": {
          "type": "integer"
        },
        "27": {
          "type": "integer"
        },
        "28": {
          "type": "integer"
        },
        "29": {
          "type": "integer"
        },
        "30": {
          "type": "integer"
        },
        "31": {
          "type": "integer"
        },
        "32": {
          "type": "integer"
        },
        "33": {
          "type": "integer"
        },
        "34": {
          "type": "integer"
        },
        "35": {
          "type": "integer"
        },
        "36": {
          "type": "integer"
        },
        "37": {
          "type": "integer"
        },
        "38": {
          "type": "integer"
        },
        "39": {
          "type": "integer"
        },
        "40": {
          "type": "integer"
        },
        "41": {
          "type": "integer"
        },
        "42": {
          "type": "integer"
        },
        "43": {
          "type": "integer"
        },
        "44": {
          "type": "integer"
        },
        "45": {
          "type": "integer"
        },
        "46": {
          "type": "integer"
        },
        "47": {
          "type": "integer"
        },
        "48": {
          "type": "integer"
        },
        "49": {
          "type": "integer"
        },
        "50": {
          "type": "integer"
        },
        "51": {
          "type": "integer"
        },
        "52": {
          "type": "integer"
        },
        "53": {
          "type": "integer"
        },
        "54": {
          "type": "integer"
        },
        "55": {
          "type": "integer"
        },
        "56": {
          "type": "integer"
        },
        "57": {
          "type": "integer"
        },
        "58": {
          "type": "integer"
        },
        "59": {
          "type": "integer"
        },
        "60": {
          "type": "integer"
        }
      }
    },
    "vin": {
      "type": "string"
    },
    "lastUpdate": {
      "type": "string"
    },
    "contract": {
      "type": "string"
    }
  }
};

var safety_schema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "autoECall": {
      "type": "integer"
    },
    "afil": {
      "type": "object",
      "properties": {
        "1": {
          "type": "integer"
        },
        "2": {
          "type": "integer"
        },
        "3": {
          "type": "integer"
        },
        "4": {
          "type": "integer"
        },
        "5": {
          "type": "integer"
        },
        "6": {
          "type": "integer"
        },
        "7": {
          "type": "integer"
        },
        "8": {
          "type": "integer"
        },
        "9": {
          "type": "integer"
        },
        "10": {
          "type": "integer"
        },
        "11": {
          "type": "integer"
        },
        "12": {
          "type": "integer"
        },
        "13": {
          "type": "integer"
        },
        "14": {
          "type": "integer"
        },
        "15": {
          "type": "integer"
        },
        "16": {
          "type": "integer"
        },
        "17": {
          "type": "integer"
        },
        "18": {
          "type": "integer"
        },
        "19": {
          "type": "integer"
        },
        "20": {
          "type": "integer"
        },
        "21": {
          "type": "integer"
        },
        "22": {
          "type": "integer"
        },
        "23": {
          "type": "integer"
        },
        "24": {
          "type": "integer"
        },
        "25": {
          "type": "integer"
        },
        "26": {
          "type": "integer"
        },
        "27": {
          "type": "integer"
        },
        "28": {
          "type": "integer"
        },
        "29": {
          "type": "integer"
        },
        "30": {
          "type": "integer"
        },
        "31": {
          "type": "integer"
        },
        "32": {
          "type": "integer"
        },
        "33": {
          "type": "integer"
        },
        "34": {
          "type": "integer"
        },
        "35": {
          "type": "integer"
        },
        "36": {
          "type": "integer"
        },
        "37": {
          "type": "integer"
        },
        "38": {
          "type": "integer"
        },
        "39": {
          "type": "integer"
        },
        "40": {
          "type": "integer"
        },
        "41": {
          "type": "integer"
        },
        "42": {
          "type": "integer"
        },
        "43": {
          "type": "integer"
        },
        "44": {
          "type": "integer"
        },
        "45": {
          "type": "integer"
        },
        "46": {
          "type": "integer"
        },
        "47": {
          "type": "integer"
        },
        "48": {
          "type": "integer"
        },
        "49": {
          "type": "integer"
        },
        "50": {
          "type": "integer"
        },
        "51": {
          "type": "integer"
        },
        "52": {
          "type": "integer"
        },
        "53": {
          "type": "integer"
        },
        "54": {
          "type": "integer"
        },
        "55": {
          "type": "integer"
        },
        "56": {
          "type": "integer"
        },
        "57": {
          "type": "integer"
        },
        "58": {
          "type": "integer"
        },
        "59": {
          "type": "integer"
        },
        "60": {
          "type": "integer"
        }
      }
    },
    "respectTimeIntVeh": {
      "type": "object",
      "properties": {
        "1": {
          "type": "integer"
        },
        "2": {
          "type": "integer"
        },
        "3": {
          "type": "integer"
        },
        "4": {
          "type": "integer"
        },
        "5": {
          "type": "integer"
        },
        "6": {
          "type": "integer"
        },
        "7": {
          "type": "integer"
        },
        "8": {
          "type": "integer"
        },
        "9": {
          "type": "integer"
        },
        "10": {
          "type": "integer"
        },
        "11": {
          "type": "integer"
        },
        "12": {
          "type": "integer"
        },
        "13": {
          "type": "integer"
        },
        "14": {
          "type": "integer"
        },
        "15": {
          "type": "integer"
        },
        "16": {
          "type": "integer"
        },
        "17": {
          "type": "integer"
        },
        "18": {
          "type": "integer"
        },
        "19": {
          "type": "integer"
        },
        "20": {
          "type": "integer"
        },
        "21": {
          "type": "integer"
        },
        "22": {
          "type": "integer"
        },
        "23": {
          "type": "integer"
        },
        "24": {
          "type": "integer"
        },
        "25": {
          "type": "integer"
        },
        "26": {
          "type": "integer"
        },
        "27": {
          "type": "integer"
        },
        "28": {
          "type": "integer"
        },
        "29": {
          "type": "integer"
        },
        "30": {
          "type": "integer"
        },
        "31": {
          "type": "integer"
        },
        "32": {
          "type": "integer"
        },
        "33": {
          "type": "integer"
        },
        "34": {
          "type": "integer"
        },
        "35": {
          "type": "integer"
        },
        "36": {
          "type": "integer"
        },
        "37": {
          "type": "integer"
        },
        "38": {
          "type": "integer"
        },
        "39": {
          "type": "integer"
        },
        "40": {
          "type": "integer"
        },
        "41": {
          "type": "integer"
        },
        "42": {
          "type": "integer"
        },
        "43": {
          "type": "integer"
        },
        "44": {
          "type": "integer"
        },
        "45": {
          "type": "integer"
        },
        "46": {
          "type": "integer"
        },
        "47": {
          "type": "integer"
        },
        "48": {
          "type": "integer"
        },
        "49": {
          "type": "integer"
        },
        "50": {
          "type": "integer"
        },
        "51": {
          "type": "integer"
        },
        "52": {
          "type": "integer"
        },
        "53": {
          "type": "integer"
        },
        "54": {
          "type": "integer"
        },
        "55": {
          "type": "integer"
        },
        "56": {
          "type": "integer"
        },
        "57": {
          "type": "integer"
        },
        "58": {
          "type": "integer"
        },
        "59": {
          "type": "integer"
        },
        "60": {
          "type": "integer"
        }
      }
    },
    "survBlindSpot": {
      "type": "object",
      "properties": {
        "1": {
          "type": "integer"
        },
        "2": {
          "type": "integer"
        },
        "3": {
          "type": "integer"
        },
        "4": {
          "type": "integer"
        },
        "5": {
          "type": "integer"
        },
        "6": {
          "type": "integer"
        },
        "7": {
          "type": "integer"
        },
        "8": {
          "type": "integer"
        },
        "9": {
          "type": "integer"
        },
        "10": {
          "type": "integer"
        },
        "11": {
          "type": "integer"
        },
        "12": {
          "type": "integer"
        },
        "13": {
          "type": "integer"
        },
        "14": {
          "type": "integer"
        },
        "15": {
          "type": "integer"
        },
        "16": {
          "type": "integer"
        },
        "17": {
          "type": "integer"
        },
        "18": {
          "type": "integer"
        },
        "19": {
          "type": "integer"
        },
        "20": {
          "type": "integer"
        },
        "21": {
          "type": "integer"
        },
        "22": {
          "type": "integer"
        },
        "23": {
          "type": "integer"
        },
        "24": {
          "type": "integer"
        },
        "25": {
          "type": "integer"
        },
        "26": {
          "type": "integer"
        },
        "27": {
          "type": "integer"
        },
        "28": {
          "type": "integer"
        },
        "29": {
          "type": "integer"
        },
        "30": {
          "type": "integer"
        },
        "31": {
          "type": "integer"
        },
        "32": {
          "type": "integer"
        },
        "33": {
          "type": "integer"
        },
        "34": {
          "type": "integer"
        },
        "35": {
          "type": "integer"
        },
        "36": {
          "type": "integer"
        },
        "37": {
          "type": "integer"
        },
        "38": {
          "type": "integer"
        },
        "39": {
          "type": "integer"
        },
        "40": {
          "type": "integer"
        },
        "41": {
          "type": "integer"
        },
        "42": {
          "type": "integer"
        },
        "43": {
          "type": "integer"
        },
        "44": {
          "type": "integer"
        },
        "45": {
          "type": "integer"
        },
        "46": {
          "type": "integer"
        },
        "47": {
          "type": "integer"
        },
        "48": {
          "type": "integer"
        },
        "49": {
          "type": "integer"
        },
        "50": {
          "type": "integer"
        },
        "51": {
          "type": "integer"
        },
        "52": {
          "type": "integer"
        },
        "53": {
          "type": "integer"
        },
        "54": {
          "type": "integer"
        },
        "55": {
          "type": "integer"
        },
        "56": {
          "type": "integer"
        },
        "57": {
          "type": "integer"
        },
        "58": {
          "type": "integer"
        },
        "59": {
          "type": "integer"
        },
        "60": {
          "type": "integer"
        }
      }
    },
    "speedInfoPanel": {
      "type": "object",
      "properties": {}
    },
    "rearSoundParkAssist": {
      "type": "object",
      "properties": {
        "1": {
          "type": "integer"
        },
        "2": {
          "type": "integer"
        },
        "3": {
          "type": "integer"
        },
        "4": {
          "type": "integer"
        },
        "5": {
          "type": "integer"
        },
        "6": {
          "type": "integer"
        },
        "7": {
          "type": "integer"
        },
        "8": {
          "type": "integer"
        },
        "9": {
          "type": "integer"
        },
        "10": {
          "type": "integer"
        },
        "11": {
          "type": "integer"
        },
        "12": {
          "type": "integer"
        },
        "13": {
          "type": "integer"
        },
        "14": {
          "type": "integer"
        },
        "15": {
          "type": "integer"
        },
        "16": {
          "type": "integer"
        },
        "17": {
          "type": "integer"
        },
        "18": {
          "type": "integer"
        },
        "19": {
          "type": "integer"
        },
        "20": {
          "type": "integer"
        },
        "21": {
          "type": "integer"
        },
        "22": {
          "type": "integer"
        },
        "23": {
          "type": "integer"
        },
        "24": {
          "type": "integer"
        },
        "25": {
          "type": "integer"
        },
        "26": {
          "type": "integer"
        },
        "27": {
          "type": "integer"
        },
        "28": {
          "type": "integer"
        },
        "29": {
          "type": "integer"
        },
        "30": {
          "type": "integer"
        },
        "31": {
          "type": "integer"
        },
        "32": {
          "type": "integer"
        },
        "33": {
          "type": "integer"
        },
        "34": {
          "type": "integer"
        },
        "35": {
          "type": "integer"
        },
        "36": {
          "type": "integer"
        },
        "37": {
          "type": "integer"
        },
        "38": {
          "type": "integer"
        },
        "39": {
          "type": "integer"
        },
        "40": {
          "type": "integer"
        },
        "41": {
          "type": "integer"
        },
        "42": {
          "type": "integer"
        },
        "43": {
          "type": "integer"
        },
        "44": {
          "type": "integer"
        },
        "45": {
          "type": "integer"
        },
        "46": {
          "type": "integer"
        },
        "47": {
          "type": "integer"
        },
        "48": {
          "type": "integer"
        },
        "49": {
          "type": "integer"
        },
        "50": {
          "type": "integer"
        },
        "51": {
          "type": "integer"
        },
        "52": {
          "type": "integer"
        },
        "53": {
          "type": "integer"
        },
        "54": {
          "type": "integer"
        },
        "55": {
          "type": "integer"
        },
        "56": {
          "type": "integer"
        },
        "57": {
          "type": "integer"
        },
        "58": {
          "type": "integer"
        },
        "59": {
          "type": "integer"
        },
        "60": {
          "type": "integer"
        }
      }
    },
    "frontSoundParkAssist": {
      "type": "object",
      "properties": {
        "1": {
          "type": "integer"
        },
        "2": {
          "type": "integer"
        },
        "3": {
          "type": "integer"
        },
        "4": {
          "type": "integer"
        },
        "5": {
          "type": "integer"
        },
        "6": {
          "type": "integer"
        },
        "7": {
          "type": "integer"
        },
        "8": {
          "type": "integer"
        },
        "9": {
          "type": "integer"
        },
        "10": {
          "type": "integer"
        },
        "11": {
          "type": "integer"
        },
        "12": {
          "type": "integer"
        },
        "13": {
          "type": "integer"
        },
        "14": {
          "type": "integer"
        },
        "15": {
          "type": "integer"
        },
        "16": {
          "type": "integer"
        },
        "17": {
          "type": "integer"
        },
        "18": {
          "type": "integer"
        },
        "19": {
          "type": "integer"
        },
        "20": {
          "type": "integer"
        },
        "21": {
          "type": "integer"
        },
        "22": {
          "type": "integer"
        },
        "23": {
          "type": "integer"
        },
        "24": {
          "type": "integer"
        },
        "25": {
          "type": "integer"
        },
        "26": {
          "type": "integer"
        },
        "27": {
          "type": "integer"
        },
        "28": {
          "type": "integer"
        },
        "29": {
          "type": "integer"
        },
        "30": {
          "type": "integer"
        },
        "31": {
          "type": "integer"
        },
        "32": {
          "type": "integer"
        },
        "33": {
          "type": "integer"
        },
        "34": {
          "type": "integer"
        },
        "35": {
          "type": "integer"
        },
        "36": {
          "type": "integer"
        },
        "37": {
          "type": "integer"
        },
        "38": {
          "type": "integer"
        },
        "39": {
          "type": "integer"
        },
        "40": {
          "type": "integer"
        },
        "41": {
          "type": "integer"
        },
        "42": {
          "type": "integer"
        },
        "43": {
          "type": "integer"
        },
        "44": {
          "type": "integer"
        },
        "45": {
          "type": "integer"
        },
        "46": {
          "type": "integer"
        },
        "47": {
          "type": "integer"
        },
        "48": {
          "type": "integer"
        },
        "49": {
          "type": "integer"
        },
        "50": {
          "type": "integer"
        },
        "51": {
          "type": "integer"
        },
        "52": {
          "type": "integer"
        },
        "53": {
          "type": "integer"
        },
        "54": {
          "type": "integer"
        },
        "55": {
          "type": "integer"
        },
        "56": {
          "type": "integer"
        },
        "57": {
          "type": "integer"
        },
        "58": {
          "type": "integer"
        },
        "59": {
          "type": "integer"
        },
        "60": {
          "type": "integer"
        }
      }
    },
    "laneKeepAssistLeft": {
      "type": "object",
      "properties": {
        "1": {
          "type": "integer"
        },
        "2": {
          "type": "integer"
        },
        "3": {
          "type": "integer"
        },
        "4": {
          "type": "integer"
        },
        "5": {
          "type": "integer"
        },
        "6": {
          "type": "integer"
        },
        "7": {
          "type": "integer"
        },
        "8": {
          "type": "integer"
        },
        "9": {
          "type": "integer"
        },
        "10": {
          "type": "integer"
        },
        "11": {
          "type": "integer"
        },
        "12": {
          "type": "integer"
        },
        "13": {
          "type": "integer"
        },
        "14": {
          "type": "integer"
        },
        "15": {
          "type": "integer"
        },
        "16": {
          "type": "integer"
        },
        "17": {
          "type": "integer"
        },
        "18": {
          "type": "integer"
        },
        "19": {
          "type": "integer"
        },
        "20": {
          "type": "integer"
        },
        "21": {
          "type": "integer"
        },
        "22": {
          "type": "integer"
        },
        "23": {
          "type": "integer"
        },
        "24": {
          "type": "integer"
        },
        "25": {
          "type": "integer"
        },
        "26": {
          "type": "integer"
        },
        "27": {
          "type": "integer"
        },
        "28": {
          "type": "integer"
        },
        "29": {
          "type": "integer"
        },
        "30": {
          "type": "integer"
        },
        "31": {
          "type": "integer"
        },
        "32": {
          "type": "integer"
        },
        "33": {
          "type": "integer"
        },
        "34": {
          "type": "integer"
        },
        "35": {
          "type": "integer"
        },
        "36": {
          "type": "integer"
        },
        "37": {
          "type": "integer"
        },
        "38": {
          "type": "integer"
        },
        "39": {
          "type": "integer"
        },
        "40": {
          "type": "integer"
        },
        "41": {
          "type": "integer"
        },
        "42": {
          "type": "integer"
        },
        "43": {
          "type": "integer"
        },
        "44": {
          "type": "integer"
        },
        "45": {
          "type": "integer"
        },
        "46": {
          "type": "integer"
        },
        "47": {
          "type": "integer"
        },
        "48": {
          "type": "integer"
        },
        "49": {
          "type": "integer"
        },
        "50": {
          "type": "integer"
        },
        "51": {
          "type": "integer"
        },
        "52": {
          "type": "integer"
        },
        "53": {
          "type": "integer"
        },
        "54": {
          "type": "integer"
        },
        "55": {
          "type": "integer"
        },
        "56": {
          "type": "integer"
        },
        "57": {
          "type": "integer"
        },
        "58": {
          "type": "integer"
        },
        "59": {
          "type": "integer"
        },
        "60": {
          "type": "integer"
        }
      }
    },
    "laneKeepAssistRight": {
      "type": "object",
      "properties": {
        "1": {
          "type": "integer"
        },
        "2": {
          "type": "integer"
        },
        "3": {
          "type": "integer"
        },
        "4": {
          "type": "integer"
        },
        "5": {
          "type": "integer"
        },
        "6": {
          "type": "integer"
        },
        "7": {
          "type": "integer"
        },
        "8": {
          "type": "integer"
        },
        "9": {
          "type": "integer"
        },
        "10": {
          "type": "integer"
        },
        "11": {
          "type": "integer"
        },
        "12": {
          "type": "integer"
        },
        "13": {
          "type": "integer"
        },
        "14": {
          "type": "integer"
        },
        "15": {
          "type": "integer"
        },
        "16": {
          "type": "integer"
        },
        "17": {
          "type": "integer"
        },
        "18": {
          "type": "integer"
        },
        "19": {
          "type": "integer"
        },
        "20": {
          "type": "integer"
        },
        "21": {
          "type": "integer"
        },
        "22": {
          "type": "integer"
        },
        "23": {
          "type": "integer"
        },
        "24": {
          "type": "integer"
        },
        "25": {
          "type": "integer"
        },
        "26": {
          "type": "integer"
        },
        "27": {
          "type": "integer"
        },
        "28": {
          "type": "integer"
        },
        "29": {
          "type": "integer"
        },
        "30": {
          "type": "integer"
        },
        "31": {
          "type": "integer"
        },
        "32": {
          "type": "integer"
        },
        "33": {
          "type": "integer"
        },
        "34": {
          "type": "integer"
        },
        "35": {
          "type": "integer"
        },
        "36": {
          "type": "integer"
        },
        "37": {
          "type": "integer"
        },
        "38": {
          "type": "integer"
        },
        "39": {
          "type": "integer"
        },
        "40": {
          "type": "integer"
        },
        "41": {
          "type": "integer"
        },
        "42": {
          "type": "integer"
        },
        "43": {
          "type": "integer"
        },
        "44": {
          "type": "integer"
        },
        "45": {
          "type": "integer"
        },
        "46": {
          "type": "integer"
        },
        "47": {
          "type": "integer"
        },
        "48": {
          "type": "integer"
        },
        "49": {
          "type": "integer"
        },
        "50": {
          "type": "integer"
        },
        "51": {
          "type": "integer"
        },
        "52": {
          "type": "integer"
        },
        "53": {
          "type": "integer"
        },
        "54": {
          "type": "integer"
        },
        "55": {
          "type": "integer"
        },
        "56": {
          "type": "integer"
        },
        "57": {
          "type": "integer"
        },
        "58": {
          "type": "integer"
        },
        "59": {
          "type": "integer"
        },
        "60": {
          "type": "integer"
        }
      }
    },
    "vin": {
      "type": "string"
    },
    "lastUpdate": {
      "type": "string"
    },
    "contract": {
      "type": "string"
    }
  }
};

var safety_driving_schema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "infoBeltSecurity": {
      "type": "object",
      "properties": {
        "1": {
          "type": "integer"
        },
        "2": {
          "type": "integer"
        },
        "3": {
          "type": "integer"
        },
        "4": {
          "type": "integer"
        },
        "5": {
          "type": "integer"
        },
        "6": {
          "type": "integer"
        },
        "7": {
          "type": "integer"
        },
        "8": {
          "type": "integer"
        },
        "9": {
          "type": "integer"
        },
        "10": {
          "type": "integer"
        },
        "11": {
          "type": "integer"
        },
        "12": {
          "type": "integer"
        },
        "13": {
          "type": "integer"
        },
        "14": {
          "type": "integer"
        },
        "15": {
          "type": "integer"
        },
        "16": {
          "type": "integer"
        },
        "17": {
          "type": "integer"
        },
        "18": {
          "type": "integer"
        },
        "19": {
          "type": "integer"
        },
        "20": {
          "type": "integer"
        },
        "21": {
          "type": "integer"
        },
        "22": {
          "type": "integer"
        },
        "23": {
          "type": "integer"
        },
        "24": {
          "type": "integer"
        },
        "25": {
          "type": "integer"
        },
        "26": {
          "type": "integer"
        },
        "27": {
          "type": "integer"
        },
        "28": {
          "type": "integer"
        },
        "29": {
          "type": "integer"
        },
        "30": {
          "type": "integer"
        },
        "31": {
          "type": "integer"
        },
        "32": {
          "type": "integer"
        },
        "33": {
          "type": "integer"
        },
        "34": {
          "type": "integer"
        },
        "35": {
          "type": "integer"
        },
        "36": {
          "type": "integer"
        },
        "37": {
          "type": "integer"
        },
        "38": {
          "type": "integer"
        },
        "39": {
          "type": "integer"
        },
        "40": {
          "type": "integer"
        },
        "41": {
          "type": "integer"
        },
        "42": {
          "type": "integer"
        },
        "43": {
          "type": "integer"
        },
        "44": {
          "type": "integer"
        },
        "45": {
          "type": "integer"
        },
        "46": {
          "type": "integer"
        },
        "47": {
          "type": "integer"
        },
        "48": {
          "type": "integer"
        },
        "49": {
          "type": "integer"
        },
        "50": {
          "type": "integer"
        },
        "51": {
          "type": "integer"
        },
        "52": {
          "type": "integer"
        },
        "53": {
          "type": "integer"
        },
        "54": {
          "type": "integer"
        },
        "55": {
          "type": "integer"
        },
        "56": {
          "type": "integer"
        },
        "57": {
          "type": "integer"
        },
        "58": {
          "type": "integer"
        },
        "59": {
          "type": "integer"
        },
        "60": {
          "type": "integer"
        }
      }
    },
    "AdEmergencyBrakeSystem": {
      "type": "object",
      "properties": {
        "1": {
          "type": "integer"
        },
        "2": {
          "type": "integer"
        },
        "3": {
          "type": "integer"
        },
        "4": {
          "type": "integer"
        },
        "5": {
          "type": "integer"
        },
        "6": {
          "type": "integer"
        },
        "7": {
          "type": "integer"
        },
        "8": {
          "type": "integer"
        },
        "9": {
          "type": "integer"
        },
        "10": {
          "type": "integer"
        },
        "11": {
          "type": "integer"
        },
        "12": {
          "type": "integer"
        },
        "13": {
          "type": "integer"
        },
        "14": {
          "type": "integer"
        },
        "15": {
          "type": "integer"
        },
        "16": {
          "type": "integer"
        },
        "17": {
          "type": "integer"
        },
        "18": {
          "type": "integer"
        },
        "19": {
          "type": "integer"
        },
        "20": {
          "type": "integer"
        },
        "21": {
          "type": "integer"
        },
        "22": {
          "type": "integer"
        },
        "23": {
          "type": "integer"
        },
        "24": {
          "type": "integer"
        },
        "25": {
          "type": "integer"
        },
        "26": {
          "type": "integer"
        },
        "27": {
          "type": "integer"
        },
        "28": {
          "type": "integer"
        },
        "29": {
          "type": "integer"
        },
        "30": {
          "type": "integer"
        },
        "31": {
          "type": "integer"
        },
        "32": {
          "type": "integer"
        },
        "33": {
          "type": "integer"
        },
        "34": {
          "type": "integer"
        },
        "35": {
          "type": "integer"
        },
        "36": {
          "type": "integer"
        },
        "37": {
          "type": "integer"
        },
        "38": {
          "type": "integer"
        },
        "39": {
          "type": "integer"
        },
        "40": {
          "type": "integer"
        },
        "41": {
          "type": "integer"
        },
        "42": {
          "type": "integer"
        },
        "43": {
          "type": "integer"
        },
        "44": {
          "type": "integer"
        },
        "45": {
          "type": "integer"
        },
        "46": {
          "type": "integer"
        },
        "47": {
          "type": "integer"
        },
        "48": {
          "type": "integer"
        },
        "49": {
          "type": "integer"
        },
        "50": {
          "type": "integer"
        },
        "51": {
          "type": "integer"
        },
        "52": {
          "type": "integer"
        },
        "53": {
          "type": "integer"
        },
        "54": {
          "type": "integer"
        },
        "55": {
          "type": "integer"
        },
        "56": {
          "type": "integer"
        },
        "57": {
          "type": "integer"
        },
        "58": {
          "type": "integer"
        },
        "59": {
          "type": "integer"
        },
        "60": {
          "type": "integer"
        }
      }
    },
    "abs": {
      "type": "object",
      "properties": {
        "1": {
          "type": "integer"
        },
        "2": {
          "type": "integer"
        },
        "3": {
          "type": "integer"
        },
        "4": {
          "type": "integer"
        },
        "5": {
          "type": "integer"
        },
        "6": {
          "type": "integer"
        },
        "7": {
          "type": "integer"
        },
        "8": {
          "type": "integer"
        },
        "9": {
          "type": "integer"
        },
        "10": {
          "type": "integer"
        },
        "11": {
          "type": "integer"
        },
        "12": {
          "type": "integer"
        },
        "13": {
          "type": "integer"
        },
        "14": {
          "type": "integer"
        },
        "15": {
          "type": "integer"
        },
        "16": {
          "type": "integer"
        },
        "17": {
          "type": "integer"
        },
        "18": {
          "type": "integer"
        },
        "19": {
          "type": "integer"
        },
        "20": {
          "type": "integer"
        },
        "21": {
          "type": "integer"
        },
        "22": {
          "type": "integer"
        },
        "23": {
          "type": "integer"
        },
        "24": {
          "type": "integer"
        },
        "25": {
          "type": "integer"
        },
        "26": {
          "type": "integer"
        },
        "27": {
          "type": "integer"
        },
        "28": {
          "type": "integer"
        },
        "29": {
          "type": "integer"
        },
        "30": {
          "type": "integer"
        },
        "31": {
          "type": "integer"
        },
        "32": {
          "type": "integer"
        },
        "33": {
          "type": "integer"
        },
        "34": {
          "type": "integer"
        },
        "35": {
          "type": "integer"
        },
        "36": {
          "type": "integer"
        },
        "37": {
          "type": "integer"
        },
        "38": {
          "type": "integer"
        },
        "39": {
          "type": "integer"
        },
        "40": {
          "type": "integer"
        },
        "41": {
          "type": "integer"
        },
        "42": {
          "type": "integer"
        },
        "43": {
          "type": "integer"
        },
        "44": {
          "type": "integer"
        },
        "45": {
          "type": "integer"
        },
        "46": {
          "type": "integer"
        },
        "47": {
          "type": "integer"
        },
        "48": {
          "type": "integer"
        },
        "49": {
          "type": "integer"
        },
        "50": {
          "type": "integer"
        },
        "51": {
          "type": "integer"
        },
        "52": {
          "type": "integer"
        },
        "53": {
          "type": "integer"
        },
        "54": {
          "type": "integer"
        },
        "55": {
          "type": "integer"
        },
        "56": {
          "type": "integer"
        },
        "57": {
          "type": "integer"
        },
        "58": {
          "type": "integer"
        },
        "59": {
          "type": "integer"
        },
        "60": {
          "type": "integer"
        }
      }
    },
    "esp": {
      "type": "object",
      "properties": {
        "1": {
          "type": "integer"
        },
        "2": {
          "type": "integer"
        },
        "3": {
          "type": "integer"
        },
        "4": {
          "type": "integer"
        },
        "5": {
          "type": "integer"
        },
        "6": {
          "type": "integer"
        },
        "7": {
          "type": "integer"
        },
        "8": {
          "type": "integer"
        },
        "9": {
          "type": "integer"
        },
        "10": {
          "type": "integer"
        },
        "11": {
          "type": "integer"
        },
        "12": {
          "type": "integer"
        },
        "13": {
          "type": "integer"
        },
        "14": {
          "type": "integer"
        },
        "15": {
          "type": "integer"
        },
        "16": {
          "type": "integer"
        },
        "17": {
          "type": "integer"
        },
        "18": {
          "type": "integer"
        },
        "19": {
          "type": "integer"
        },
        "20": {
          "type": "integer"
        },
        "21": {
          "type": "integer"
        },
        "22": {
          "type": "integer"
        },
        "23": {
          "type": "integer"
        },
        "24": {
          "type": "integer"
        },
        "25": {
          "type": "integer"
        },
        "26": {
          "type": "integer"
        },
        "27": {
          "type": "integer"
        },
        "28": {
          "type": "integer"
        },
        "29": {
          "type": "integer"
        },
        "30": {
          "type": "integer"
        },
        "31": {
          "type": "integer"
        },
        "32": {
          "type": "integer"
        },
        "33": {
          "type": "integer"
        },
        "34": {
          "type": "integer"
        },
        "35": {
          "type": "integer"
        },
        "36": {
          "type": "integer"
        },
        "37": {
          "type": "integer"
        },
        "38": {
          "type": "integer"
        },
        "39": {
          "type": "integer"
        },
        "40": {
          "type": "integer"
        },
        "41": {
          "type": "integer"
        },
        "42": {
          "type": "integer"
        },
        "43": {
          "type": "integer"
        },
        "44": {
          "type": "integer"
        },
        "45": {
          "type": "integer"
        },
        "46": {
          "type": "integer"
        },
        "47": {
          "type": "integer"
        },
        "48": {
          "type": "integer"
        },
        "49": {
          "type": "integer"
        },
        "50": {
          "type": "integer"
        },
        "51": {
          "type": "integer"
        },
        "52": {
          "type": "integer"
        },
        "53": {
          "type": "integer"
        },
        "54": {
          "type": "integer"
        },
        "55": {
          "type": "integer"
        },
        "56": {
          "type": "integer"
        },
        "57": {
          "type": "integer"
        },
        "58": {
          "type": "integer"
        },
        "59": {
          "type": "integer"
        },
        "60": {
          "type": "integer"
        }
      }
    },
    "vin": {
      "type": "string"
    },
    "lastUpdate": {
      "type": "string"
    },
    "contract": {
      "type": "string"
    }
  }
};

var trip_schema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "trips": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "tripId": {
            "type": "integer"
          },
          "dateTripBegin": {
            "type": "string"
          },
          "dateTripEnd": {
            "type": "string"
          },
          "tripDuration": {
            "type": "integer"
          },
          "dateUpdate": {
            "type": "string"
          },
          "avgFuelConsumption": {
            "type": "number"
          },
          "deltaFuelLevel": {
            "type": "number"
          },
          "tripMileage": {
            "type": "number"
          },
          "totMileage": {
            "type": "number"
          },
          "avgSpeed": {
            "type": "number"
          },
          "engineSpeed": {
            "type": "number"
          },
          "engineOilTemp": {
            "type": "number"
          },
          "fuelPrice": {
            "type": "number"
          },
          "tripCost": {
            "type": "number"
          },
          "referenceTrip": {
            "type": "integer"
          },
          "CO2Emission": {
            "type": "integer"
          },
          "ecoDriving": {
            "type": "number"
          },
          "refueling": {
            "type": "number"
          },
          "modePrivacy": {
            "type": "integer"
          },
          "refuelingCost": {
            "type": "number"
          },
          "siphoning": {
            "type": "number"
          },
          "siphoningCost": {
            "type": "number"
          },
          "fuelTankLevel": {
            "type": "number"
          },
          "tripFuelConsumption": {
            "type": "number"
          },
          "vin": {
            "type": "string"
          },
          "contract": {
            "type": "string"
          }
        }
      }
    }
  }
};

var trip_uniq_schema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "tripId": {
      "type": "integer"
    },
    "dateTripBegin": {
      "type": "string"
    },
    "dateTripEnd": {
      "type": "string"
    },
    "tripDuration": {
      "type": "integer"
    },
    "dateUpdate": {
      "type": "string"
    },
    "avgFuelConsumption": {
      "type": "number"
    },
    "deltaFuelLevel": {
      "type": "number"
    },
    "tripMileage": {
      "type": "number"
    },
    "totMileage": {
      "type": "number"
    },
    "avgSpeed": {
      "type": "integer"
    },
    "engineSpeed": {
      "type": "integer"
    },
    "engineOilTemp": {
      "type": "number"
    },
    "fuelPrice": {
      "type": "number"
    },
    "tripCost": {
      "type": "number"
    },
    "referenceTrip": {
      "type": "integer"
    },
    "CO2Emission": {
      "type": "integer"
    },
    "ecoDriving": {
      "type": "integer"
    },
    "refueling": {
      "type": "integer"
    },
    "modePrivacy": {
      "type": "integer"
    },
    "refuelingCost": {
      "type": "number"
    },
    "siphoning": {
      "type": "number"
    },
    "siphoningCost": {
      "type": "number"
    },
    "fuelTankLevel": {
      "type": "number"
    },
    "tripFuelConsumption": {
      "type": "number"
    },
    "geoLocalisation": {
      "type": "object",
      "properties": {}
    },
    "vin": {
      "type": "string"
    },
    "contract": {
      "type": "string"
    }
  }
};

var trips_schema = { 
  "type": "object",
  "properties": {
    "totalNumberTrips": {
      "type": "integer"
    },
    "trips": {
      "type": "array",
      			"minItems": 1,
			"uniqueItems": true,

      "items": {
        "type": "object",
        "properties": {
          "tripId": {
            "type": "integer"
          },
          "dateTripBegin": {
            "type": "string"
          },
          "dateTripEnd": {
            "type": "string"
          },
          "tripDuration": {
            "type": "integer"
          },
          "dateUpdate": {
            "type": "string"
          },
          "avgFuelConsumption": {
            "type": "number"
          },
          "deltaFuelLevel": {
            "type": "integer"
          },
          "tripMileage": {
            "type": "number"
          },
          "totMileage": {
            "type": "number"
          },
          "avgSpeed": {
            "type": "integer"
          },
          "engineSpeed": {
            "type": "integer"
          },
          "engineOilTemp": {
            "type": "integer"
          },
          "fuelPrice": {
            "type": "integer"
          },
          "tripCost": {
            "type": "integer"
          },
          "referenceTrip": {
            "type": "integer"
          },
          "CO2Emission": {
            "type": "integer"
          },
          "ecoDriving": {
            "type": "integer"
          },
          "refueling": {
            "type": "integer"
          },
          "modePrivacy": {
            "type": "integer"
          },
          "refuelingCost": {
            "type": "integer"
          },
          "siphoning": {
            "type": "integer"
          },
          "siphoningCost": {
            "type": "integer"
          },
          "fuelTankLevel": {
            "type": "integer"
          },
          "tripFuelConsumption": {
            "type": "number"
          },
          "geoLocalisation": {
            "type": "object",
            "properties": {}
          },
          "vin": {
            "type": "string"
          },
          "contract": {
            "type": "string"
          }
        },
        "required": [
          "tripId",
          "dateTripBegin",
          "dateTripEnd",
          "tripDuration",
          "dateUpdate",
          "avgFuelConsumption",
          "deltaFuelLevel",
          "tripMileage",
          "totMileage",
          "avgSpeed",
          "engineSpeed",
          "engineOilTemp",
          "fuelPrice",
          "tripCost",
          "referenceTrip",
          "CO2Emission",
          "ecoDriving",
          "refueling",
          "modePrivacy",
          "refuelingCost",
          "siphoning",
          "siphoningCost",
          "fuelTankLevel",
          "tripFuelConsumption",
          "geoLocalisation",
          "vin",
          "contract"
        ]
      }
    }
  },
  "required": [
    "totalNumberTrips",
    "trips"
  ]
}; 

var trips_fuel_schema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "fuelPrice": {
      "type": "number"
    },
    "vin": {
      "type": "string"
    },
    "contract": {
      "type": "string"
    }
  }
};

var vehicle_schema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "color": {
      "type": "string"
    },
    "cod_fin": {
      "type": "string"
    },
    "cod_sil": {
      "type": "string"
    },
    "cod_ccn": {
      "type": "string"
    },
    "cod_log": {
      "type": "integer"
    },
    "lcdv": {
      "type": "string"
    },
    "vis": {
      "type": "string"
    },
    "imei": {
      "type": "string"
    },
    "deliveryDate": {
      "type": "string"
    },
    "manufacturingDate": {
      "type": "string"
    },
    "cod_acc": {
      "type": "string"
    },
    "cod_eng": {
      "type": "string"
    },
    "cod_fam": {
      "type": "string"
    },
    "flagSual": {
      "type": "integer"
    },
    "brand": {
      "type": "string"
    },
    "design": {
      "type": "string"
    },
    "vehLiv": {
      "type": "string"
    },
    "vin": {
      "type": "string"
    }
  }
};

describe('Crash', function() {
	this.timeout(150000);		
    it('getLast() response should match the schema', function(done) {
        psa.crash.getLast(vehicle, list_of_seconds, function(err, res) {
            should.not.exist(err);
            res.should.be.jsonSchema(crash_schema);
            done();
        });

    });
    /*
    it('searchByDate() response should match the schema', function(done) {
        psa.crash.searchByDate(vehicle, yesterday, today, 1, function(err, res) {
            should.not.exist(err);
            res.should.be.jsonSchema(crash_list_schema);
            done();
        });

    });
    */
});

describe('Ecodriving', function() {
 	this.timeout(150000);		
    it('get() sould should match the schema', function(done) {
		psa.ecodriving.get(vehicle, function(err,res){
            should.not.exist(err);
            res.should.be.jsonSchema(ecodriving_schema);
            done();
        });
    });
    it('getByDate() response should match the schema', function(done) {
		psa.ecodriving.getByDate(vehicle, yesterday, 1, function(err,res){
            should.not.exist(err);
            res.should.be.jsonSchema(ecodriving_list_schema);
            done();
        });
    });
    
    it('getByTrip() response should match the schema', function(done) {
		psa.ecodriving.getByTrip(vehicle, trip, function(err,res){
            should.not.exist(err);
            res.should.be.jsonSchema(ecodriving_schema);
            done();
        });
    });

    it('getForLastTrip() response should match the schema', function(done) {
		psa.ecodriving.getForLastTrip(vehicle,  function(err,res){
            should.not.exist(err);
            res.should.be.jsonSchema(ecodriving_schema);
            done();
        });
    });
    it('searchByDate() response should match the schema', function(done) {
		psa.ecodriving.searchByDate(vehicle, yesterday, today, function(err,res){
            should.not.exist(err);
            res.should.be.jsonSchema(ecodriving_list_schema);
            done();
        });
    });
    it('searchByMonth() response should match the schema', function(done) {
		psa.ecodriving.searchByMonth(vehicle, onemonthago, today, function(err,res){
            should.not.exist(err);
            res.should.be.jsonSchema(ecodriving_list_schema);
            done();
        });
    });
});

describe('Environment', function() {
	this.timeout(150000);		
    it('get() response should match the schema', function(done) {
        psa.environment.get(vehicle, '1,2,3,4,5,6,7,8,9,10,11,12', function(err, res) {
            should.not.exist(err);
            res.should.be.jsonSchema(environment_schema);
            done();
        });
    });
});

describe('Maintenance', function() {
	this.timeout(150000);		
    it('get() response should match the schema', function(done) {
        psa.maintenance.get(vehicle, function(err, res) {
            should.not.exist(err);
            res.should.be.jsonSchema(maintenance_schema);
            done(err);
        });
    });
  /*  it('getAlerts() response should match the schema', function(done) {
        psa.maintenance.getAlerts(vehicle, true, function(err, res) {
            should.exist(err);
            res.should.not.be.jsonSchema(maintenance_schema);
            done(err);
        });
    });*/
});

describe('Place', function() {
	this.timeout(150000);		
    it('getLast() response should match the schema', function(done) {
        psa.place.getLast(vehicle, list_of_seconds, 1, function(err, res) {
            should.not.exist(err);
            res.should.be.jsonSchema(place_schema);
            done(err);
        });
    });
    it('getForTrip() response should match the schema', function(done) {
        psa.place.getForTrip(vehicle, trip, list_of_seconds, 1, function(err, res) {
            should.not.exist(err);
            res.should.be.jsonSchema(place_list_schema);
            done(err);
        });
    });
});

describe('Referential', function() {
	this.timeout(150000);		
    it('getAlertsReference() response should match the schema', function(done) {
        psa.referential.getAlertsReference(vehicle, function(err, res) {
            should.not.exist(err);
            res.should.be.jsonSchema(referential_alert_schema);
            done(err);
        });
    });		
    it('getMaintenanceReference() response should match the schema ', function(done) {
        psa.referential.getMaintenanceReference(vehicle, function(err, res) {
            should.not.exist(err);
            res.should.be.jsonSchema(referential_schema);
            done(err);
        });
    });
    it('getEcodrivingReference() response should match the schema ', function(done) {
        psa.referential.getEcodrivingReference(vehicle, function(err, res) {
            should.not.exist(err);
            res.should.be.jsonSchema(referential_ecodriving_schema);
            done(err);
        });
    });
});

describe('Running', function() {
	this.timeout(150000);		
    it('getStatus() response should match the schema', function(done) {
        psa.running.getStatus(vehicle, list_of_seconds, function(err, res) {
            should.not.exist(err);
            res.should.be.jsonSchema(running_schema);
            done();
        });
    });
    it('getLightStatus() response should match the schema', function(done) {
        psa.running.getLightStatus(vehicle, list_of_seconds, function(err, res) {
            should.not.exist(err);
            res.should.be.jsonSchema(running_light_schema);
            done();
        });
    });
});

describe('Safety', function() {
	this.timeout(150000);		
    it('getDrivingAssistanceStatus() response should match the schema', function(done) {
        psa.safety.getDrivingAssistanceStatus(vehicle, list_of_seconds, function(err, res) {
            should.not.exist(err);
            res.should.be.jsonSchema(safety_schema);
            done();
        });
    });
    it('getDrivingAssistanceStatusByDay() response should match the schema', function(done) {
        psa.safety.getDrivingAssistanceStatusByDay(vehicle, yesterday, list_of_seconds, function(err, res) {
            should.not.exist(err);
            res.should.be.jsonSchema(safety_schema);
            done();
        });
    });
    it('getSafetyAssistanceStatus() response should match the schema', function(done) {
        psa.safety.getSafetyAssistanceStatus(vehicle, list_of_seconds, function(err, res) {
            should.not.exist(err);
            res.should.be.jsonSchema(safety_driving_schema);
            done();
        });
    });
    it('getSafetyAssistanceStatusByDay() response should match the schema', function(done) {
        psa.safety.getSafetyAssistanceStatusByDay(vehicle, yesterday, list_of_seconds, function(err, res) {
            should.not.exist(err);
            res.should.be.jsonSchema(safety_driving_schema);
            done();
        });
    });
});

describe('Trip', function() {
	this.timeout(150000);		
    it('get() response should match the schema', function(done) {
        psa.trip.get(vehicle, 2, function(err, res) {
            should.not.exist(err);
            res.should.be.jsonSchema(trips_schema);
            done();
        });
    });
    it('getLast() response should match the schema', function(done) {
        psa.trip.getLast(vehicle, function(err, res) {
            should.not.exist(err);
            res.should.be.jsonSchema(trips_schema);
            done();
        });
    });
    it('getById() response should match the schema', function(done) {
        psa.trip.getById(vehicle, trip, function(err, res) {
            should.not.exist(err);
            res.should.be.jsonSchema(trip_uniq_schema);
            done();
        });
    });
    it('getByDay() response should match the schema', function(done) {
        psa.trip.getByDay(vehicle, yesterday, 1, function(err, res) {
            should.not.exist(err);
            res.should.be.jsonSchema(trips_schema);
            done();
        });
    });
    it('getReferenceTrip() response should match the schema', function(done) {
        psa.trip.getReferenceTrip(vehicle, function(err, res) {
            should.not.exist(err);
            res.should.be.jsonSchema(trip_schema);
            done();
        });
    });
    it('getFuelPrice() response should match the schema', function(done) {
        psa.trip.getFuelPrice(vehicle, function(err, res) {
            should.not.exist(err);
            res.should.be.jsonSchema(trips_fuel_schema);
            done();
        });
    });
    it('searchByDate() response should match the schema', function(done) {
        psa.trip.searchByDate(vehicle, yesterday, today, 1, function(err, res) {
            should.not.exist(err);
            res.should.be.jsonSchema(trips_schema);
            done();
        });
    });
    it('getWaypoints() response should match the schema', function(done) {
        psa.trip.getWaypoints(vehicle, trip, _seconds, near, function(err, res) {
            should.not.exist(err);
            res.should.be.jsonSchema(place_list_schema);
            done();
        });
    });
});

describe('Vehicle', function() {
	this.timeout(150000);		
    it('getInformations() response should match the schema', function(done) {
        psa.vehicle.getInformations(vehicle, function(err, res) {
            should.not.exist(err);
            res.should.be.jsonSchema(vehicle_schema);
            done(err);
        });
    });
});

