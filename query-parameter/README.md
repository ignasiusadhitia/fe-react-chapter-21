# React Router + Query Parameters

Proyek ini adalah contoh aplikasi React yang menggunakan React Router untuk mengelola routing dan query parameters dalam URL. Aplikasi ini memungkinkan Anda untuk membaca dan mengatur query parameters secara dinamis menggunakan React Router hooks seperti `useLocation()` dan `useNavigate()`.
##Fitur Utama

- Mengambil query parameters dari URL menggunakan `useLocation()` dan URLSearchParams.
- Menampilkan nilai query parameters di halaman Home.
- Mengatur nilai query parameters baru menggunakan `useNavigate()`.
- Menyediakan routing untuk menangani halaman NotFound jika rute tidak ditemukan.

## Struktur Proyek

```bash
src/
│
├── App.jsx        # Komponen utama yang mengatur routing
└── index.js       # File untuk merender App ke DOM
```

## Penggunaan

Aplikasi ini memiliki dua komponen utama: **Home** dan **NotFound**. Berikut adalah penjelasan lengkap tentang cara kerja masing-masing komponen.

## Komponen `Home`

Komponen ini berfungsi untuk:

- Membaca query parameters dari URL menggunakan custom hook `useQuery()`.
- Menampilkan nilai query parameters seperti username dan country di layar.
- Mengatur query parameters baru menggunakan `useNavigate()`.

```jsx
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
```

## Komponen NotFound

Komponen ini hanya menampilkan pesan "404 Not Found" ketika pengguna mencoba mengakses URL yang tidak dikenal oleh aplikasi.

```jsx
function NotFound() {
  return <h2>404 Not Found</h2>;
}
```

## Custom Hook `useQuery()`

Hook ini menggunakan useLocation dari React Router untuk mengambil query parameters dari URL. Ini memungkinkan kita mengakses dan memanipulasi query string di URL dengan mudah.

```jsx
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
```

## Komponen Utama `App`

Komponen App mengatur routing untuk aplikasi. Menggunakan React Router untuk menentukan rute utama (`/`) yang merender komponen Home, serta rute wildcard (`*`) yang merender komponen NotFound jika rute yang diakses tidak dikenali.

```jsx
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
```

## Alur Penggunaan

- Membaca Query Parameters: Saat aplikasi diakses melalui URL seperti `http://localhost:3000/?username=john&country=usa`, nilai query parameter username dan country akan ditampilkan di halaman Home.
- Mengatur Query Parameters: Pengguna dapat mengklik tombol Set Query Parameter untuk mengubah query parameter menjadi `username=newUser&country=newCountry`.
- Navigasi Programatik: Aplikasi menggunakan `useNavigate` untuk melakukan navigasi programatik tanpa perlu memuat ulang halaman.
- Handling Rute Tidak Ditemukan: Jika pengguna mencoba mengakses URL yang tidak ada (misalnya, `http://localhost:3000/unknown`), aplikasi akan merender komponen NotFound dan menampilkan pesan 404 Not Found.
