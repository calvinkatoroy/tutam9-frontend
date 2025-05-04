// frontend/src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { getNotes, createNote, deleteNote } from '../services/noteService';

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: '', content: '' });

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const data = await getNotes();
      setNotes(data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createNote(newNote);
      setNewNote({ title: '', content: '' });
      fetchNotes();
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
      fetchNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Note App</h1>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Title"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input
          type="text"
          placeholder="Content"
          value={newNote.content}
          onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button type="submit" style={{ padding: '5px 15px' }}>Add Note</button>
      </form>

      <div>
        {notes.map(note => (
          <div key={note._id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button 
              onClick={() => handleDelete(note._id)}
              style={{ padding: '5px 15px', backgroundColor: 'red', color: 'white' }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;