export default function AnimalCard({ animal }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 text-center hover:shadow-lg transition">
      <img
        src={animal.image || "https://place-puppy.com/200x200"}
        alt={animal.name}
        className="rounded-xl mx-auto mb-3"
      />
      <h3 className="text-lg font-semibold">{animal.name}</h3>
      <p className="text-sm text-gray-600">{animal.breed}</p>
    </div>
  );
}