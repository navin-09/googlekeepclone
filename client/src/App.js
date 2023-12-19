// App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import NoteList from "./NoteList";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
    color: "yellow",
  });

  useEffect(() => {
    // Fetch notes from the backend API
    axios
      .get("http://localhost:3001/api/notes")
      .then((response) => {
        setNotes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching notes:", error);
      });
  }, []);

  const handleAddNote = () => {
    // Implement logic to add a new note
    axios
      .post("http://localhost:3001/api/notes", newNote)
      .then((response) => {
        setNotes([...notes, response.data]);
        setNewNote({ title: "", content: "", color: "yellow" });
      })
      .catch((error) => {
        console.error("Error adding note:", error);
      });
  };

  const handleDeleteNote = (id) => {
    // Implement logic to delete a note
    axios
      .delete(`http://localhost:3001/api/notes/${id}`)
      .then(() => {
        setNotes(notes.filter((note) => note.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting note:", error);
      });
  };

  const handleEditNote = (id, updatedNote) => {
    // Implement logic to edit a note
    axios
      .put(`http://localhost:3001/api/notes/${id}`, updatedNote)
      .then((response) => {
        setNotes((prevNotes) =>
          prevNotes.map((note) => (note.id === id ? response.data : note))
        );
      })
      .catch((error) => {
        console.error("Error updating note:", error);
      });
  };

  return (
    <div className="app">
      <h1>Google Keep Clone</h1>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          value={newNote.content}
          onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
        />
        <select
          value={newNote.color}
          onChange={(e) => setNewNote({ ...newNote, color: e.target.value })}
        >
          <option value="yellow">Yellow</option>
          <option value="blue">Blue</option>
          {/* Add more color options as needed */}
        </select>
        <button onClick={handleAddNote}>Add Note</button>
      </div>
      <NoteList
        notes={notes}
        onDelete={handleDeleteNote}
        onEdit={handleEditNote}
      />
    </div>
  );
};

export default App;
