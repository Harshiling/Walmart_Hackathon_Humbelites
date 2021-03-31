const { insertLaptop } = require("../controllers/MainController");
const formLaptopScript = require("./formLaptopScript");
function extract(product) {
    let productDetails = {};
    productDetails.product_name = product.productName;
    productDetails.processor = product.processor;
    productDetails.harddrive = product.hardDrive;
    productDetails.screen_size = product.screenSize.height.toString() + " x " + product.screenSize.width.toString();
    productDetails.HDMI = product.connectors.HDMI;
    productDetails.USB = product.connectors.USB;
    productDetails.ethernet = product.connectors.ethernet;
    productDetails.wifi = product.connectors.wifi;
    productDetails.bluetooth = product.connectors.bluetooth;
    productDetails.battery_life = product.batteryLife;
    productDetails.os = product.OS;
    productDetails.webcam = product.webCam;
    productDetails.weight = product.weight;
    productDetails.color = product.color;
    productDetails.manufacturer = product.manufacturer;
    productDetails.resolution = product.resolution;
    productDetails.ram_size = product.ramSize;
    return productDetails;
}

async function addLaptopToDB(req, res, next) {
    const product = req.body.product;
    let productDetails = extract(product);
    console.log(productDetails);
    let id = await insertLaptop(productDetails);
    req.details = productDetails;
    req.details.id = id;
    formLaptopScript(req, res, next);
}

module.exports = addLaptopToDB;