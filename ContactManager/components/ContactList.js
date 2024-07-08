import React from "react";
import { AiFillDelete } from "react-icons/ai";

const ContactList = ({ contacts, removeSingleContact, handleRemoveAllClick }) => {
  const contactList = contacts.map((val) => {
    return (
      <div className="contact-row" key={val.id}>
        <div>{val.data.name}</div>
        <div>{val.data.email}</div>
        <span onClick={() => removeSingleContact(val.id)}>
          <AiFillDelete />
        </span>
      </div>
    );
  });

  return (
    <div className="contact-list">
      <h2>Contact Lists</h2>
      <div className="contact-lists">{contactList}</div>
      {contacts.length >= 2 && <button onClick={handleRemoveAllClick}>Remove All</button>}
    </div>
  );
};

export default ContactList;
