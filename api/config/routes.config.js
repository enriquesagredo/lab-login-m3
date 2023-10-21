const express = require("express");
const router = express.Router();

router.get("/patata", (req, res, next) => {res.json({ "patata": "muy buena" })})



module.exports = router;
