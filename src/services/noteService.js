// frontend/src/services/noteService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/notes';

export const getNotes = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createNote = async (note) => {
  const response = await axios.post(API_URL, note);
  return response.data;
};

export const deleteNote = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};