import { useEffect, useState } from "react";
import axios from "../api";

export default function Admin() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      try {
        const res = await axios.get("/admin/stats");
        setStats(res.data);
      } catch (err) {
        console.error("Failed to load admin stats:", err);
      } finally {
        setLoading(false);
      }
    }
    loadStats();
  }, []);

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-500 animate-pulse">
        Loading admin dashboard…
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {stats ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-white shadow rounded-2xl">
            <h2 className="text-lg font-semibold mb-2">Animals</h2>
            <p className="text-2xl font-bold">{stats.animals}</p>
          </div>

          <div className="p-4 bg-white shadow rounded-2xl">
            <h2 className="text-lg font-semibold mb-2">Users</h2>
            <p className="text-2xl font-bold">{stats.users}</p>
          </div>

          <div className="p-4 bg-white shadow rounded-2xl">
            <h2 className="text-lg font-semibold mb-2">Volunteers</h2>
            <p className="text-2xl font-bold">{stats.volunteers}</p>
          </div>
        </div>
      ) : (
        <p className="text-gray-600">No stats available.</p>
      )}
    </div>
  );
}