import React, { useState } from "react";

const Note = ({ id, title, content, color, onDelete, onEdit, searchTerm }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState({ title, content, color });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(id, editedNote);
    setIsEditing(false);
  };

  const handleDelete = () => {
    // Ask for confirmation before deleting
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this note?"
    );
    if (confirmDelete) {
      onDelete(id);
    }
  };

  return (
    <div className="note" style={{ backgroundColor: color }}>
      <div>
        {isEditing ? (
          <div style={{ marginBottom: "20px" }}>
            {/* ... (unchanged) */}
            <button
              onClick={handleSave}
              style={{
                backgroundColor: "green",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                marginRight: "10px",
              }}
            >
              Save
            </button>
          </div>
        ) : (
          <div>
            <h3>{title}</h3>
            <p>{content}</p>
            <button
              onClick={handleDelete}
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                marginRight: "10px",
              }}
            >
              Delete
            </button>
            <button
              onClick={handleEdit}
              style={{
                backgroundColor: "green",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
              }}
            >
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Note;
