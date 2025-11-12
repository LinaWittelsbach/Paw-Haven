import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001/api", // adjust if different
});

// Example endpoints:
export const fetchAnimals = () => API.get("/animals");
export const addAnimal = (data) => API.post("/animals", data);
export const registerUser = (data) => API.post("/auth/register", data);
export const loginUser = (data) => API.post("/auth/login", data);
