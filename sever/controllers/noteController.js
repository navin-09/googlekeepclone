// controllers/noteController.js
const Note = require("../models/notes");

const noteController = {
  getAllNotes: async (req, res) => {
    try {
      const notes = await Note.getAllNotes();
      res.json(notes);
    } catch (error) {
      console.error("Error fetching notes:", error);
      res.status(500).send("Internal Server Error");
    }
  },

  createNote: async (req, res) => {
    const { title, content, color } = req.body;
    try {
      const newNote = await Note.createNote({ title, content, color });
      res.status(201).json(newNote);
    } catch (error) {
      console.error("Error creating note:", error);
      res.status(500).send("Internal Server Error");
    }
  },

  updateNote: async (req, res) => {
    const { id } = req.params;
    const { title, content, color } = req.body;
    try {
      const updatedNote = await Note.updateNote({ id, title, content, color });
      res.json(updatedNote);
    } catch (error) {
      console.error("Error updating note:", error);
      res.status(500).send("Internal Server Error");
    }
  },

  deleteNote: async (req, res) => {
    const { id } = req.params;
    try {
      await Note.deleteNote(id);
      res.send("Note deleted successfully");
    } catch (error) {
      console.error("Error deleting note:", error);
      res.status(500).send("Internal Server Error");
    }
  },
};

module.exports = noteController;
