const express = require("express");
const router = express.Router();
const user = require("../controllers/user.controller")

router.get("/patata", (req, res, next) => {res.json({ "patata": "muy buena" })})
router.post("/user", user.create)
router.post("/login", user.Login)

module.exports = router;
