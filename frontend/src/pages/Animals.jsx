import { useEffect, useState } from "react";
import { request } from "../api";
import AnimalCard from "../components/AnimalCard";

export default function Animals() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    request("/animals")
      .then(data => setAnimals(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">🐶 Available Animals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {animals.map(a => <AnimalCard key={a._id} animal={a} />)}
      </div>
    </div>
  );
}