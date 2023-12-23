const express = require("express");
const mobileController = require("../controller/mobile.controller");
const router = express.Router();

router.post("/create", mobileController.createMobile);
router.get("/", mobileController.getAllMobile);
router.delete("/:id", mobileController.deleteMobile);
router.patch("/update/:id", mobileController.updateMobile);
router.get("/search", mobileController.searchTerm);

module.exports = router;
