const { fetchEssentials } = require("../controllers/MainController");

async function fetchDetails(req, res, next) {
  let details = await fetchEssentials();
  if (details === -1) {
    return res.status(400).json({ message: "Unsucessful" });
  }
  res.status(200).json(details);
  next();
}

module.exports = fetchDetails;
