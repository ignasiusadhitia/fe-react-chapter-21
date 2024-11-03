# Validasi Properti (PropTypes) di React JS

Dalam React, kita sering mengirim data dari komponen induk (parent) ke komponen anak (child) melalui *props*. Untuk memastikan bahwa data yang diterima oleh komponen anak memiliki tipe yang sesuai, kita bisa menggunakan *prop-types*, sebuah pustaka yang membantu melakukan validasi tipe data. Berikut adalah penjelasan lengkap tentang cara menggunakan `PropTypes` untuk memvalidasi tipe properti pada komponen React.

## Contoh Kode

### 1. Import PropTypes

Sebelum mulai melakukan validasi properti, pastikan untuk mengimpor `PropTypes` dari pustaka `prop-types`:
```javascript
import PropTypes from 'prop-types';
```
### 2. Validasi Properti Dasar
Contoh berikut menunjukkan cara memvalidasi tipe-tipe dasar seperti string, number, boolean, array, dan object.
```javascript
import PropTypes from 'prop-types';

const ChildComp = ({ string, number, boolean, array, object }) => {
  return (
    <div>
      <p>String: {string}</p>
      <p>Number: {number}</p>
      <p>Boolean: {boolean ? 'True' : 'False'}</p>
      <p>Array: {array.join(', ')}</p>
      <p>Object: {JSON.stringify(object)}</p>
    </div>
  );
};

// Menambahkan validasi tipe properti menggunakan PropTypes
ChildComp.propTypes = {
  string: PropTypes.string.isRequired,   // Mengharuskan properti ini bertipe string
  number: PropTypes.number.isRequired,   // Mengharuskan properti ini bertipe number
  boolean: PropTypes.bool.isRequired,    // Mengharuskan properti ini bertipe boolean
  array: PropTypes.array.isRequired,     // Mengharuskan properti ini bertipe array
  object: PropTypes.object.isRequired    // Mengharuskan properti ini bertipe object
};
```
#### Penjelasan
- string, number, boolean, array, dan object adalah props yang diterima oleh ChildComp.
- PropTypes.string.isRequired memastikan bahwa properti string wajib bertipe string dan harus ada.
- isRequired digunakan untuk memastikan bahwa props ini wajib diberikan saat komponen dipanggil.
### 3. Validasi Array dengan Tipe Data Spesifik
Anda bisa memastikan bahwa sebuah array hanya berisi tipe data tertentu. Misalnya, untuk array yang hanya berisi string:
```javascript
ChildComp.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string)  // Array yang hanya berisi string
};
```
#### Penjelasan
arrayOf digunakan untuk memvalidasi bahwa items adalah array yang hanya boleh berisi elemen bertipe string.
### 4. Validasi Object dengan Bentuk Tertentu (Shape)
Terkadang, kita mungkin ingin memastikan bahwa objek memiliki struktur tertentu. Contohnya, user adalah objek yang memiliki properti name bertipe string dan age bertipe number:
```javascript
ChildComp.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,   // Properti name harus ada dan bertipe string
    age: PropTypes.number.isRequired     // Properti age harus ada dan bertipe number
  })
};
```
#### Penjelasan
- PropTypes.shape digunakan untuk menentukan struktur objek user.
- Setiap properti dalam shape bisa memiliki tipe datanya sendiri, dan isRequired menandakan bahwa properti ini wajib ada dalam objek user.
