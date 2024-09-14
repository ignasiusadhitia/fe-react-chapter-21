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

// Validasi props dengan PropTypes
UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isAdmin: PropTypes.bool.isRequired,
    hobbies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

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
