const express = require("express");
const router = express.Router();

const usercontroller = require("../controllers/usecontroller");

// Routes
router.get("/", usercontroller.getAllItems);        // GET all items
router.post("/", usercontroller.addItem);           // POST new item
router.put("/:id", usercontroller.updateItem);      // PUT update whole item
router.patch("/:id", usercontroller.patchItem);     // PATCH partial update
router.delete("/:id", usercontroller.deleteItem);   // DELETE item

module.exports = router;
