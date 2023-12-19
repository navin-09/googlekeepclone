import React, { useState, useEffect } from "react";
import axios from "axios";
import NoteList from "./NoteList";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
    color: "yellow",
  });

  // Inside the App component
  useEffect(() => {
    // Fetch notes from the backend API
    axios
      .get("http://localhost:3001/api/notes")
      .then((response) => {
        // Filter notes based on the search term
        const filteredNotes = response.data.filter(
          (note) =>
            note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            note.content.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setNotes(filteredNotes);
      })
      .catch((error) => {
        console.error("Error fetching notes:", error);
      });
  }, [searchTerm]);

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
      <h1 style={{ marginBottom: "20px" }}>Google Keep Clone</h1>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Title"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Content"
          value={newNote.content}
          onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
          style={{ marginRight: "10px" }}
        />
        <select
          value={newNote.color}
          onChange={(e) => setNewNote({ ...newNote, color: e.target.value })}
          style={{ marginRight: "10px" }}
        >
          <option value="lightyellow">Light Yellow</option>
          <option value="lightgreen">Light Green</option>
          <option value="lightpink">Light Pink</option>
          <option value="Violet">Violet</option>
        </select>
        <button
          onClick={handleAddNote}
          style={{
            backgroundColor: "green",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
          }}
        >
          Add Note
        </button>
      </div>
      <NoteList
        notes={notes}
        onDelete={handleDeleteNote}
        onEdit={handleEditNote}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default App;
