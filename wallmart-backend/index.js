const express = require("express")
const bodyParser = require("body-parser")
const electronicsValidation = require("./src/middlewares/electronicsValidation");
const createAudio = require("./src/middlewares/createAudio");
const updateResourcesToDB = require("./src/middlewares/updateResourceToDB");
const fetchDetails = require("./src/middlewares/fetchDetails");
const cors = require("cors");
const App = express();
const path = require("path");

App.use(cors());
// parse application/x-www-form-urlencoded
App.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
App.use(bodyParser.json())


App.get("/", fetchDetails);

App.post("/electronics", electronicsValidation, createAudio, updateResourcesToDB);

App.get("/:fileName", (req, res) => {
    let filePath = `${path.join(__dirname, 'src/audio/', req.params.fileName)}`;
    res.sendFile(filePath);
})

App.listen(3001, () => {
    console.log("Listening to PORT", 3001);
})
