// routes/notes.js
const express = require("express");
const noteController = require("../controllers/noteController");
const router = express.Router();

router.get("/", noteController.getAllNotes);
router.post("/", noteController.createNote);
router.put("/:id", noteController.updateNote);
router.delete("/:id", noteController.deleteNote);

module.exports = router;
