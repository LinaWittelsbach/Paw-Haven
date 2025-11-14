import DashboardStats from "../components/DashboardStats.jsx";
import AnimalForm from "../components/AnimalForm.jsx";

export default function Volunteer() {
  const handleAddAnimal = (data) => {
    console.log("New animal added:", data);
    alert(`Added ${data.name}`);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Volunteer Dashboard
      </h1>
      <DashboardStats />
      <div className="mt-10">
        <AnimalForm onSubmit={handleAddAnimal} />
      </div>
    </div>
  );
}