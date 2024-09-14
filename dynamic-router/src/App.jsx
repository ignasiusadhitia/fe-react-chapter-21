import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";

// Komponen Detail yang menerima parameter id dari URL
function Detail() {
  let { id } = useParams(); // Mengambil parameter id dari URL
  return (
    <div>
      <h2>Detail Page</h2>
      <p>Ini adalah detail untuk item dengan ID: {id}</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/detail/1">Detail 1</Link>
            </li>
            <li>
              <Link to="/detail/2">Detail 2</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/" element={<h1>Home Page</h1>} />
        </Routes>
      </div>
    </Router>
  );
}
