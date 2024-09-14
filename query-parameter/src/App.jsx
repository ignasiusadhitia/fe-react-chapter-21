import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

// Hook untuk mengambil query parameter dari URL
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

// Komponen Home untuk membaca dan mengatur query parameter
function Home() {
  const query = useQuery(); // Mengambil query parameter dari URL
  const navigate = useNavigate(); // Hook untuk navigasi dan mengatur query parameter

  // Mengambil nilai dari query parameter
  const paramUsername = query.get("username");
  const paramCountry = query.get("country");

  // Function untuk mengatur query parameter baru
  const setQueryParam = () => {
    const queryParams = new URLSearchParams();
    queryParams.set("username", "newUser");
    queryParams.set("country", "newCountry");
    navigate(`?${queryParams.toString()}`);
  };

  return (
    <div>
      <h1>Query Parameter Example</h1>
      {/* Menampilkan nilai query parameter */}
      <p>
        Value of "Username": <strong>{paramUsername || "N/A"}</strong>
      </p>
      <p>
        Value of "Country": <strong>{paramCountry || "N/A"}</strong>
      </p>

      {/* Tombol untuk mengatur query parameter */}
      <button onClick={setQueryParam}>Set Query Parameter</button>
    </div>
  );
}

// Komponen NotFound untuk menangani rute yang tidak ditemukan
function NotFound() {
  return <h2>404 Not Found</h2>;
}

// Komponen utama App yang mengatur routing
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
