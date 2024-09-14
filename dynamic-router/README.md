# Membuat URL Dinamis

Dalam aplikasi, kita seringkali perlu membuat halaman dinamis yang dapat menerima parameter dari URL. Misalnya, ketika pengguna mengklik link detail produk, halaman tersebut akan menampilkan detail berdasarkan ID produk yang ada di URL.

## Contoh Kode untuk URL Dinamis

```jsx
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
```

## Penjelasan Kode:

- `useParams()`: Hook ini digunakan untuk mengambil parameter id dari URL. Parameter ini diakses melalui `useParams()` dan digunakan untuk menampilkan informasi dinamis dalam komponen Detail.
- `<Route path="/detail/" element={<Detail />} />`: Rute ini menangkap nilai parameter id dari URL dan mengirimkannya ke komponen Detail. Ketika pengguna mengklik link Detail 1 atau Detail 2, aplikasi akan menavigasi ke halaman yang menampilkan detail untuk item yang bersesuaian berdasarkan ID di URL.
- `<Link to="/detail/1">Detail 1</Link>`: Link ini mengarahkan pengguna ke halaman detail produk dengan id 1.
