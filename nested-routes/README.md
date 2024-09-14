# Nested Routes (Rute Bersarang)

Rute bersarang memungkinkan kita membuat beberapa rute dalam satu halaman utama. Ini sangat berguna ketika kita ingin membuat halaman profil dengan beberapa tab seperti Info dan Settings, di mana setiap tab akan memiliki rutenya sendiri.

## Contoh Kode untuk Nested Routes

```jsx
import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useResolvedPath,
  useMatch,
} from "react-router-dom";

function Profile() {
  let match = useMatch("/profile/*");
  let path = match?.pathname || "";
  let url = useResolvedPath("").pathname;

  return (
    <div>
      <h1>Profile Page</h1>
      <ul>
        <li>
          <Link to={`${url}/info`}>Info</Link>
        </li>
        <li>
          <Link to={`${url}/settings`}>Settings</Link>
        </li>
      </ul>
      <Routes>
        <Route path={path} element={<h3>Please select a sub-page.</h3>} />
        <Route path={`${path}/info`} element={<Info />} />
        <Route path={`${path}/settings`} element={<Settings />} />
      </Routes>
    </div>
  );
}

function Info() {
  return (
    <div>
      <h2>Info Page</h2>
      <p>This is the info page content.</p>
    </div>
  );
}

function Settings() {
  return (
    <div>
      <h2>Settings Page</h2>
      <p>This is the settings page content.</p>
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
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/" element={<h1>Home Page</h1>} />
        </Routes>
      </div>
    </Router>
  );
}
```

## Penjelasan Kode:

- `useMatch("/profile/*")`: Hook ini digunakan untuk mencocokkan URL dengan rute bersarang (nested route). Kita menggunakan pattern `/*` untuk menangkap rute yang bersarang di bawah `/profile`.
- `useResolvedPath("")`: Hook ini digunakan untuk mendapatkan URL yang sesuai dengan rute bersarang. Pada komponen Profile, kita menggunakan useResolvedPath untuk menggabungkan path dinamis pada URL seperti `/profile/info dan /profile/settings`.
- `Routes` dan `Route` untuk Nested Routes: Nested routes didefinisikan di dalam komponen Profile, dengan rute untuk halaman Info dan Settings.
