const Ajv = require("ajv").default;
const ajv = new Ajv();
const { LaptopValidation, HeadPhoneValidation, TvValidation} = require("../validators/Electronics")
const addLaptopToDB = require("./addLaptopToDB");



function electronicsValidation(req, res, next) {
    const product = req.body.product;
    let validate;
    if(product) {
        if(product.name === "tv") {
            validate = TvValidation(product);
        }
        else if(product.name === "laptop") {
            validate = LaptopValidation(product);
            return addLaptopToDB(req, res, next);
        }
        else if(product.name === "headphone") {
            validate = HeadPhoneValidation(product);
        }
        else {
            res.status(400).json({
                message: "We're Working on it"
            })
        }
    }
    else {
        res.status(500).json({
            message: "Send us the product"
        })
    }
    if(!validate) {
        console.log(ajv.errorsText(validate.errors));
        res.status(500).json("Something Went Wrong");
    }
    else {
        res.status(200).json(validate);
    }
    next();
}

module.exports = electronicsValidation;