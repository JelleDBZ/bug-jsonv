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
        "movement": {"type": "string"},
        "action":  {"type": "string"},
        "dev_id":  {"type": "string"}
    },
    "required": ["dev_id"]
};

var schemaNewhardware = {
    "id" : "/schemaNewhardware",
    "type" : "object",
    "properties" : {
        "id" : {"type" : "string"},
        "add_1" : {"type" : "string"},
        "add_2" : {"type" : "string"},
        "add_3" : {"type" : "string"},
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
    },
    "required": ["dev_id"]
};

/* Split schema for Controller */
var jsonschemaController = {
    "id": "/SchemaController",
    "type": "object",
    "properties": {
        "id": {"type": "string"},
        "addons": {
            "type": "array",
            "items":  {
                "type": ["string", null]
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


