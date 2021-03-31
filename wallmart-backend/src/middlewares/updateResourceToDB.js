const { insertResources } = require("../controllers/MainController")

async function updateResource(req, res, next) {
    let id = req.details.id;
    let audioURL = req.audioURL;
    let imageURL = req.imageURL;
    let insertId = await insertResources(id, audioURL, imageURL);
    if(insertId === -1) {
        res.status(500).json({message: "Failed"});
    }
    else {
        res.status(200).json({message: "Successful"});
    }
    next();
}

module.exports = updateResource;