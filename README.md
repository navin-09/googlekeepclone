# Google Keep Clone

This project is a simplified version of Google Keep, a note-taking application, built using Node.js, Express, React, and PostgreSQL.

## Getting Started

These instructions will help you clone and run the project on your local machine.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

### Installation

1. git clone https://github.com/your-username/googlekeepclone.git
2. cd googlekeepclone/server
3. npm install
4. (in knexfile file keep your postgres connection details here i have given my sample creds for reference)
5. npx knex migrate:latest
6. npx knex seed:latest
7. npm run start:server
8. cd ../client
9. npm install
10. npm run start:client





