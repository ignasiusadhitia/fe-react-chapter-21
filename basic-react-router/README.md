# Mengenal React Router

**React Router** adalah sebuah library yang digunakan untuk mengelola navigasi dalam aplikasi React. Dengan menggunakan React Router, kita dapat membangun navigasi antar halaman atau komponen dengan cara yang efisien dalam **Single Page Application (SPA)**. Aplikasi SPA ini memungkinkan pengguna untuk berpindah halaman tanpa harus memuat ulang seluruh halaman, membuat pengalaman pengguna lebih cepat dan interaktif.

## Instalasi React Router

Sebelum memulai, Anda perlu menginstal React Router DOM agar bisa menggunakan routing dalam aplikasi React Anda. Gunakan perintah berikut untuk menginstal:

```bash
npm install react-router-dom
```

## Komponen Utama dalam React Router

Ada beberapa komponen penting yang disediakan oleh React Router untuk mengatur navigasi:

### BrowserRouter:

- Komponen ini digunakan untuk membungkus seluruh aplikasi Anda dan mengaktifkan routing menggunakan History API dari browser.
- BrowserRouter memungkinkan aplikasi memiliki URL yang bersih (tanpa karakter # seperti di hash-based routing).
  **Contoh:**

```jsx
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* Komponen lain yang membutuhkan routing */}
    </BrowserRouter>
  );
}
```

### Routes:

- Routes adalah komponen tempat Anda mendefinisikan semua rute dalam aplikasi.
- Di dalam Routes, Anda akan menempatkan elemen Route yang menentukan rute spesifik dan komponen yang akan dirender saat rute tersebut diakses.
  **Contoh:**

```jsx
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### Route:

- Route digunakan untuk mendefinisikan path URL dan komponen yang akan dirender ketika path tersebut diakses.
- Setiap Route memiliki properti path yang mewakili URL dan element yang menentukan komponen mana yang akan dirender.
  **Contoh:**

```jsx
<Route path="/" element={<Home />} />
```

### Link:

- Link digunakan untuk membuat navigasi antar halaman dalam aplikasi tanpa memuat ulang halaman (seperti halnya elemen HTML <a>).
- Menggunakan Link memungkinkan navigasi yang cepat dan menjaga status aplikasi.
  **Contoh:**

```jsx
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
```

### Navigate:

- Navigate digunakan untuk melakukan navigasi secara programatik. Ini berguna ketika Anda ingin mengarahkan pengguna ke rute lain berdasarkan kondisi tertentu (misalnya, setelah login sukses atau error).
  **Contoh:**

```jsx
import { Navigate } from "react-router-dom";

function ProtectedRoute({ isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <Dashboard />;
}
```

## Contoh Aplikasi Sederhana dengan React Router

Berikut adalah contoh aplikasi sederhana yang menggunakan React Router untuk membuat navigasi antar halaman:

```jsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function NotFound() {
  return <h2>404 - Page Not Found</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### Penjelasan:

- Home, About, Contact, NotFound: Ini adalah komponen sederhana yang akan dirender ketika pengguna mengakses URL tertentu.
- BrowserRouter membungkus seluruh aplikasi untuk mengaktifkan routing.
- Link digunakan untuk membuat navigasi antara halaman Home, About, dan Contact.
- Routes digunakan untuk mendefinisikan rute, dengan setiap Route menentukan URL (path) dan komponen (element) yang harus dirender.
- NotFound digunakan sebagai fallback ketika pengguna mengakses rute yang tidak ada (404 page).
