import React, { useState } from "react";

const Note = ({ id, title, content, color, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState({ title, content, color });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(id, editedNote);
    setIsEditing(false);
  };

  return (
    <div className="note" style={{ backgroundColor: color }}>
      <div>
        {isEditing ? (
          <div style={{ marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="Title"
              value={editedNote.title}
              onChange={(e) =>
                setEditedNote({ ...editedNote, title: e.target.value })
              }
              style={{ marginRight: "10px" }}
            />
            <input
              placeholder="text"
              value={editedNote.content}
              onChange={(e) =>
                setEditedNote({ ...editedNote, content: e.target.value })
              }
              style={{ marginRight: "10px" }}
            />
            <select
              value={editedNote.color}
              onChange={(e) =>
                setEditedNote({ ...editedNote, color: e.target.value })
              }
              style={{ marginRight: "10px" }}
            >
              <option value="lightyellow">Light Yellow</option>
              <option value="lightgreen">Light Green</option>
              <option value="lightpink">Light Pink</option>
              <option value="Violet">Violet</option>
              {/* Add more color options as needed */}
            </select>
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
              onClick={() => onDelete(id)}
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
