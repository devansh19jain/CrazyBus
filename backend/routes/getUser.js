const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
//const {isAdmin, isAuthenticated, isSignedIn} = require("../controllers/auth");

router.post("/booking", userController.findUserByEmail);

module.exports = router;