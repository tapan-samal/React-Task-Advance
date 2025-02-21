import React from "react";

const Profile = ({ data, setData, error }) => {
  const { name, age, email } = data;
  
  const handleInputData = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="profile-tab">
      <h2> Profile </h2>
      <div>
        <label>Name:</label> <br />
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputData}
        />
        {error.name && <span className="error-message">{error.name}</span>}
      </div>
      <div>
        <label>Age:</label> <br />
        <input
          type="number"
          name="age"
          value={age}
          onChange={handleInputData}
        />
        {error.age && <span className="error-message">{error.age}</span>}
      </div>
      <div>
        <label>Email:</label> <br />
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInputData}
        />
        {error.email && <span className="error-message">{error.email}</span>}
      </div>
    </div>
  );
};

export default Profile;
