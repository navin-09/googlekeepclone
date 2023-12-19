// NoteList.js
import React from "react";
import Note from "./Note";

const NoteList = ({ notes, onDelete, onEdit }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          color={note.color}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default NoteList;
