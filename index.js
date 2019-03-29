var Validator = require('jsonschema').Validator;
var v = new Validator();
class Jsonvalidator{
    constructor(data){
        this.data = data;
    };

/* VALIDATING BOTH OBJECTS, THIS WILL GIVE ERRORS IN CONSOLE WHEN TRUE THAT CAN BE IGNORED */ 
    checkValidttndatahardware(){
        var ttndata = this.data;
        var hardwaredata = v.validate(ttndata, schemaNewhardware);
        
        if(!(hardwaredata.valid)){
            console.log("Errors for schemaHardware: " + hardwaredata.errors);
            return false;
        }return true;
    }

    checkValidttndatabutton(){
        var ttndata = this.data;
        var buttondata = v.validate(ttndata, schemaButton);
        
        if(!(buttondata.valid)){
            console.log("Errors for schemaButton: " + buttondata.errors);
            return false;
        }return true;
    }
    
    checkValidclientdata(){ //THIS METHOD WILL BE USED IN GROUP GAME
        var clientdata = this.data;
        var data = v.validate(clientdata, schemaObject);
        if(!data.valid){
            console.log("Errors for clientdata: " + data.errors); 
            return false;
        }

        return true;
    }
};

module.exports = Jsonvalidator

/* Schemas for validating ttndata */
var schemaButton = {
    "id": "/schemaButton",
    "type": "object",
    "properties": {
        "movements": {"type": "string"},
        "action":  {"type": "string"},
        "dev_id":  {"type": "string"}
    },
    "required": ["dev_id"]
};

var schemaNewhardware = {
    "id" : "/schemaNewhardware",
    "type" : "object",
    "properties" : {
        "id" : {"type" : "integer"},
        "add_1" : {"type" : "integer"},
        "add_2" : {"type" : "integer"},
        "add_3" : {"type" : "integer"},
        "dev_id": {"type" : "string"}
    },
    "required": ["id", "add_1" , "add_2" , "add_3"]
};

/* Schemas for validating client data */
/* Split schema for Player */
var jsonschemaPlayer = {
    "id": "/SchemaPlayer",
    "type": "object",
    "properties": {
        "username": {"type": "string"},
        "movement": {
            "type": ["string", null]
        },
        "dev_id": {"type": "string"},
        "action": {
            "type": ["string", null]
        },
        "joined": {"type": "boolean"},
    },
    "required": ["dev_id"]
};

/* Split schema for Controller */
var jsonschemaController = {
    "id": "/SchemaController",
    "type": "object",
    "properties": {
        "id": {"type": "integer"},
        "addons": {
            "type": "array",
            "items":  {
                "type": ["integer", null]
            }
        },
        "dev_id": {"type": "string"}
    },
    "required": ["id", "addons", "dev_id"]
};

/* JSON schema for JSON object 'dataObject' */
var schemaObject = {
    "id": "/SchemaObject",
    "type": "object",
    "properties": {
        "Player": {"$ref": "/SchemaPlayer"},
        "Controller": {"$ref": "/SchemaController"}
    }
};

v.addSchema(jsonschemaPlayer, '/SchemaPlayer');
v.addSchema(jsonschemaController, '/SchemaController');


