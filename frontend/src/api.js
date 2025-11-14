import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001/api", // adjust if different
});

// Example endpoints:
export const fetchAnimals = () => API.get("/animals");
export const addAnimal = (data) => API.post("/animals", data);
export const registerUser = (data) => API.post("/auth/register", data);
export const loginUser = (data) => API.post("/auth/login", data);

export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

export async function request(path, options = {}) {
  const url = `${API_URL}${path.startsWith('/') ? '' : '/'}${path}`;
  const res = await fetch(url, options);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API Error: ${res.status} ${text}`);
  }
  return res.json();
}

export default request;