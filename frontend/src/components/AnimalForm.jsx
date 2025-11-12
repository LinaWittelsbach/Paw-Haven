import { useState } from "react";

export default function AnimalForm({ onSubmit }) {
  const [animal, setAnimal] = useState({
    name: "",
    species: "",
    age: "",
    description: "",
  });

  const handleChange = (e) => {
    setAnimal({ ...animal, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(animal);
    setAnimal({ name: "", species: "", age: "", description: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">Add Animal</h2>
      <input
        name="name"
        value={animal.name}
        onChange={handleChange}
        placeholder="Animal name"
        className="border w-full p-2 rounded mb-3"
        required
      />
      <input
        name="species"
        value={animal.species}
        onChange={handleChange}
        placeholder="Species"
        className="border w-full p-2 rounded mb-3"
        required
      />
      <input
        name="age"
        value={animal.age}
        onChange={handleChange}
        placeholder="Age"
        className="border w-full p-2 rounded mb-3"
      />
      <textarea
        name="description"
        value={animal.description}
        onChange={handleChange}
        placeholder="Description"
        className="border w-full p-2 rounded mb-3"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Save
      </button>
    </form>
  );
}