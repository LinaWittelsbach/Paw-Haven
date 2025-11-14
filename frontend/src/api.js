// Minimal API helper used by the frontend
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
