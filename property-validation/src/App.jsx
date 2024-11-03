import React from 'react';
import PropTypes from 'prop-types';

// Definisikan komponen ChildComp dengan berbagai props dan validasi tipe data
const ChildComp = ({ string, number, boolean, array, object, items, user }) => {
  return (
    <div>
      <h2>Contoh Validasi PropTypes di React</h2>
      <p>String: {string}</p>
      <p>Number: {number}</p>
      <p>Boolean: {boolean ? 'True' : 'False'}</p>
      <p>Array: {array.join(', ')}</p>
      <p>Object: {JSON.stringify(object)}</p>
      <p>Items Array: {items ? items.join(', ') : 'No items provided'}</p>
      <p>User Info: {user ? `Name: ${user.name}, Age: ${user.age}` : 'No user info provided'}</p>
    </div>
  );
};

// Menambahkan validasi tipe properti menggunakan PropTypes
ChildComp.propTypes = {
  string: PropTypes.string.isRequired,        // Harus bertipe string
  number: PropTypes.number.isRequired,        // Harus bertipe number
  boolean: PropTypes.bool.isRequired,         // Harus bertipe boolean
  array: PropTypes.array.isRequired,          // Harus bertipe array
  object: PropTypes.object.isRequired,        // Harus bertipe object
  items: PropTypes.arrayOf(PropTypes.string), // Array yang hanya berisi string
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,        // name wajib bertipe string
    age: PropTypes.number.isRequired          // age wajib bertipe number
  })
};

// Definisikan komponen utama App yang akan mengirim props ke ChildComp
const App = () => {
  const sampleString = "Hello, React!";
  const sampleNumber = 42;
  const sampleBoolean = true;
  const sampleArray = ["React", "PropTypes", "Validation"];
  const sampleObject = { key: "value" };
  const sampleItems = ["Item1", "Item2", "Item3"];
  const sampleUser = { name: "John Doe", age: 30 };

  return (
    <div>
      <ChildComp
        string={sampleString}
        number={sampleNumber}
        boolean={sampleBoolean}
        array={sampleArray}
        object={sampleObject}
        items={sampleItems}
        user={sampleUser}
      />
    </div>
  );
};

export default App;
