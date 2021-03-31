

function formLaptopText(req, res, next) {
    const details = req.details;
    const height = req.body.product.screenSize.height;
    const width = req.body.product.screenSize.width;
    req.text = `This is ${details.product_name} with ${details.processor} processor with hard drive capacity of ${details.harddrive}
     and ram size of ${details.ram_size}. A screen size of ${height} x ${width} with resolution of ${details.resolution}. It is
     manufactured by ${details.manufacturer}. It has a Battery life of ${details.battery_life} hours with ${details.os} Operating system
     and has ${details.HDMI} HDMI port, ${details.USB} USB port and ${details.wifi}. This Laptop weighs ${details.weight}.`;
    next();
}

module.exports = formLaptopText;