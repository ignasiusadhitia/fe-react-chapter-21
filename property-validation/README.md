# UserCard dan PropTypes Validation di React

Proyek ini adalah aplikasi sederhana yang menampilkan informasi tentang pengguna menggunakan komponen UserCard di React. Komponen ini menggunakan props untuk menerima data dari parent component dan menampilkan informasi seperti nama, usia, status admin, dan daftar hobi pengguna. Selain itu, PropTypes digunakan untuk melakukan validasi tipe data props yang diterima oleh komponen tersebut.

## Instalasi

Instal dependensi PropTypes untuk melakukan validasi props:

```bash
npm install prop-types
```

## Struktur Proyek

```bash
src/
│
├── App.js         # Komponen utama yang merender UserCard
└── index.js       # File untuk merender App ke DOM
```

## Komponen UserCard

```javascript
import React from "react";
import PropTypes from "prop-types";

// Komponen UserCard yang menampilkan informasi pengguna
const UserCard = (props) => {
  const { name, age, isAdmin, hobbies } = props.user;

  return (
    <div>
      <h2>
        {name} (Age: {age})
      </h2>
      <p>{isAdmin ? "Admin" : "User"}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};
```

### Penjelasan:

- Komponen UserCard menerima data `user` sebagai props. Props ini di-destructuring ke dalam variabel `name`, `age`, `isAdmin`, dan `hobbies`.
- Komponen ini merender informasi pengguna:
  - Menampilkan nama dan usia.
  - Menentukan apakah pengguna adalah Admin atau User berdasarkan nilai boolean `isAdmin`.
  - Menampilkan daftar hobi pengguna dalam elemen `<ul>` dengan menggunakan fungsi `map()` untuk merender setiap hobi sebagai item `<li>`.

### Validasi Props Menggunakan PropTypes

```javascript
// Validasi props dengan PropTypes
UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isAdmin: PropTypes.bool.isRequired,
    hobbies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
```

### Penjelasan:

- PropTypes digunakan untuk memastikan bahwa data `user` yang diterima oleh komponen memiliki tipe data yang benar.
- `PropTypes.shape()` memastikan bahwa `user` adalah objek yang memiliki struktur tertentu: - name: Harus berupa string dan wajib (`isRequired`). - age: Harus berupa number dan wajib. - isAdmin: Harus berupa boolean dan wajib. - hobbies: Harus berupa array yang berisi string dan wajib.
  Jika tipe data tidak sesuai dengan yang diharapkan, React akan memberikan peringatan di konsol selama pengembangan.

## Komponen App

```javascript
// Komponen utama App yang merender UserCard
const App = () => {
  const user1 = {
    name: "John Doe",
    age: 28,
    isAdmin: true,
    hobbies: ["Reading", "Gaming", "Traveling"],
  };

  const user2 = {
    name: "Jane Smith",
    age: 22,
    isAdmin: false,
    hobbies: ["Cooking", "Cycling"],
  };

  return (
    <div>
      <h1>User List</h1>
      <UserCard user={user1} />
      <UserCard user={user2} />
    </div>
  );
};

export default App;
```

### Penjelasan:

- Komponen App adalah komponen utama yang merender dua buah komponen UserCard, masing-masing dengan data pengguna yang berbeda.
- Data pengguna pertama (`user1`) memiliki nama John Doe, berusia 28 tahun, seorang Admin, dan memiliki hobi Reading, Gaming, serta Traveling.
- Data pengguna kedua (`user2`) memiliki nama Jane Smith, berusia 22 tahun, seorang User, dan memiliki hobi Cooking serta Cycling.
