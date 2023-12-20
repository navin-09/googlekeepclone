// knexfile.js
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "navin@345",
      database: "BillEasy",
      port: 5432,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
};
