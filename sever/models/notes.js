// models/notes.js
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig.development);

class Note {
  static async getAllNotes() {
    return knex("notes").select("*").orderBy("created_at", "desc");
  }

  static async createNote({ title, content, color }) {
    return knex("notes").insert({ title, content, color }).returning("*");
  }

  static async updateNote({ id, title, content, color }) {
    return knex("notes")
      .where({ id })
      .update({ title, content, color })
      .returning("*");
  }

  static async deleteNote(id) {
    return knex("notes").where({ id }).del();
  }
}

module.exports = Note;
