// routes/notes.js
const express = require("express");
const pool = require("../db");

const router = express.Router();

// Get all notes
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM notes ORDER BY created_at DESC"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Create a new note
router.post("/", async (req, res) => {
  const { title, content, color } = req.body;
  console.log({ title, content, color });
  try {
    const result = await pool.query(
      "INSERT INTO notes(title, content, color) VALUES($1, $2, $3) RETURNING *",
      [title, content, color]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating note:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Update a note
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content, color } = req.body;

  try {
    const result = await pool.query(
      "UPDATE notes SET title = $1, content = $2, color = $3 WHERE id = $4 RETURNING *",
      [title, content, color, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error updating note:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Delete a note
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query("DELETE FROM notes WHERE id = $1", [id]);
    res.send("Note deleted successfully");
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
