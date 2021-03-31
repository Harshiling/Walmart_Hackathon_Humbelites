const Ajv = require("ajv").default;
const ajv = new Ajv({ allErrors: true, strictRequired: true, strict: true});

const _TvSchema = {
    type: "object",
    properties: {
        name: {type: "string"},
        productName: {type: "string"},
        typeOf: {type: "string"},
        screenSize : {
            type: "object", properties: {
                height: {type: "number"},
                width: {type: "number"}
            }
        },
        manufacturer: { type: "string"},
        resolution: { type: "number"},
        connectors: {
            type: "object", properties: {
                HDMI: {type: "number"},
                USB: {type: "number"}
            }
        }
    },
    required: ["name", "productName", "typeOf", "screenSize","manufacturer", "resolution", "connectors"],
    additionalProperties: false
}

const _LaptopSchema = {
    type: "object",
    properties: {
        name: {type: "string"},
        productName: {type: "string"},
        processor: {type: "string"},
        hardDrive: {type: "string"},
        screenSize: {type: "string"},
        manufacturer: {type: "string"},
        resolution: {type: "string"},
        connectors: {
            type: "object", properties: {
                HDMI: {type: "number"},
                USB: {type: "number"},
                ethernet: {type: "boolean"},
                wifi: {type: "string"},
                bluetooth: {type: "string"}
            }
        },
        batteryLife: {type: "number"},
        OS: {type: "string"},
        webCam: {type: "string"},
        weight: {type: "string"},
        color: {type: "string"}
    },
    required: ["name", "productName", "processor", "hardDrive", "batteryLife", "OS", "webCam", "weight"
              , "screenSize", "manufacturer", "resolution", "connectors", "color"],
    additionalProperties: false
}

const _HeadPhoneSchema = {
    type: "object",
    properties: {
        name: {type: "string"},
        productName: {type: "string"},
        wireless: {type: "boolean"},
        ramSize: {type: "string"},
        manufacturer: {type: "string"},
        batteryLife: {type: ["number", "null"]},
        weight: {type: "string"},
        color: {type: "string"},
        compatibleDevices: {
            type: "array",
            minItems: 1
        },
        features: {
            type: ["array", "null"],
        },
    },
    required: ["ramSize", "name", "productName", "wireless", "manufacturer", "batteryLife", "weight", "color", "compatibleDevices", "features"],
    additionalProperties: false
}

const TvValidation = ajv.compile(_TvSchema);
const LaptopValidation = ajv.compile(_LaptopSchema);
const HeadPhoneValidation = ajv.compile(_HeadPhoneSchema);



module.exports = {
    TvValidation,
    LaptopValidation,
    HeadPhoneValidation,
}