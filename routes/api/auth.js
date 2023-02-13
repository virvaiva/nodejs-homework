const express = require("express");

const { auth: ctrl } = require("../../controllers");
const { validation, ctrlWrapper } = require("../../middlewares");
const { joiSchema } = require("../../models/user");

const router = express.Router();

router.post("/register", validation(joiSchema), ctrlWrapper(ctrl.register));

module.exports = router;