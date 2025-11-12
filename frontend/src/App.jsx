import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Animals from "./pages/Animals";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile.jsx";
import Volunteer from "./pages/Volunteer.jsx";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen bg-orange-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/volunteer" element={<Volunteer />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
