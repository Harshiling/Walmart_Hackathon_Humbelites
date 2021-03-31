const knexFile = require('../../knexfile').production;
const knex = require("knex")(knexFile);


async function insertLaptop(details) {
    let id;
    try {
        id = await knex("laptop")
            .insert({
                product_name: details.product_name,
                processor: details.processor,
                hardrive: details.harddrive,
                screen_size: details.screen_size,
                hdmi: details.HDMI,
                usb: details.USB,
                ethernet: details.ethernet,
                wifi: details.wifi,
                bluetooth: details.bluetooth,
                battery_life: details.battery_life,
                os: details.os,
                webcam: details.webcam,
                weight: details.weight,
                color: details.color,
                manufacturer: details.manufacturer,
                resolution: details.resolution,
                ram_size: details.ram_size
            }, "id");
    }
    catch (e) {
        console.error(e);
        id = -1;
    }
    return id;
}

async function insertResources(id, audioURL, imageURL) {
    let afterId;
    try {
        afterId = knex("resources").insert({id: parseInt(id), image: imageURL, audio: audioURL}, "id");
    }
    catch (e) {
        afterId = -1;
    }
    return afterId;
}

async function fetchEssentials() {
    let details;
    try {
        details = await knex("laptop").join('resources', 'laptop.id', '=', 'resources.id').select("*");
    } catch(e) {
        console.log(e);
        details = -1;
    }
    return details;
}

module.exports = {
    insertLaptop,
    insertResources,
    fetchEssentials
};

/*
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
 */
