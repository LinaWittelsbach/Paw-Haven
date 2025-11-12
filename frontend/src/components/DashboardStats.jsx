export default function DashboardStats({ stats }) {
  const defaultStats = stats || {
    animals: 12,
    volunteers: 5,
    adoptions: 8,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {Object.entries(defaultStats).map(([key, value]) => (
        <div
          key={key}
          className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition"
        >
          <h3 className="text-xl capitalize text-gray-600">{key}</h3>
          <p className="text-3xl font-bold text-blue-600">{value}</p>
        </div>
      ))}
    </div>
  );
}