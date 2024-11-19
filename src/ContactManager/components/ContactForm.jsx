import React, { useState } from "react";

const ContactForm = ({ addContact }) => {
  const [contactData, setContactData] = useState({ name: "", email: "" });

  const handleInputChange = (e) => {
    if (e.target.name === "name") {
      setContactData({ ...contactData, name: e.target.value });
    } else {
      setContactData({ ...contactData, email: e.target.value });
    }
    // console.log(e.target.value);
  };

  const handleSubmitClick = () => {
    if (contactData.name === "" && contactData.email === "") {
      alert("Please fill the all details!");
      return;
    }
    addContact(contactData);
    setContactData({ name: "", email: "" });
    // console.log(contactData, "From ContactForm Comp");
  };

  return (
    <div className="contact-form">
      <h2>Enter Contacts </h2>
      <form>
        <label>Name :</label> <br />
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={contactData.name}
          onChange={handleInputChange}
        />{" "}
        <br />
        <label>Email :</label> <br />
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          value={contactData.email}
          onChange={handleInputChange}
        />{" "}
        <br />
      </form>
      <div>
        <button onClick={handleSubmitClick}>Add Contact</button>
      </div>
    </div>
  );
};

export default ContactForm;
