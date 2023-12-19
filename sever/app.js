// app.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const notesRouter = require("./routes/notes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/notes", notesRouter);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
