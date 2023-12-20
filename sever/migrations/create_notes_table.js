// migrations/20231220120000_create_notes_table.js

exports.up = function (knex) {
  return knex.schema.createTable("notes", function (table) {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.text("content").notNullable();
    table.string("color");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("notes");
};
