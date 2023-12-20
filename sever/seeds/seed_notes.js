// seeds/seed_notes.js

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("notes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("notes").insert([
        { title: "Note 1", content: "Content for note 1", color: "blue" },
        { title: "Note 2", content: "Content for note 2", color: "yellow" },
        // Add more sample notes as needed
      ]);
    });
};
