// Note.js
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
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedNote.title}
            onChange={(e) =>
              setEditedNote({ ...editedNote, title: e.target.value })
            }
          />
          <textarea
            value={editedNote.content}
            onChange={(e) =>
              setEditedNote({ ...editedNote, content: e.target.value })
            }
          />
          <select
            value={editedNote.color}
            onChange={(e) =>
              setEditedNote({ ...editedNote, color: e.target.value })
            }
          >
            <option value="yellow">Yellow</option>
            <option value="blue">Blue</option>
            {/* Add more color options as needed */}
          </select>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{title}</h3>
          <p>{content}</p>
          <button onClick={() => onDelete(id)}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Note;
