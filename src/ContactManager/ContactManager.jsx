import React, { useState, useEffect } from "react";
import "./contact.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import uuid4 from "uuid4";

const ContactManager = () => {
  const localStorageKey = "contacts";
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  });
  
  //Set to local storage
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  //Data get from ContactForm Comp by Props
  const addContact = (data) => {
    setContacts([...contacts, { id: uuid4(), data }]);
    // console.log(data, "From Contact Manager Comp");
  };

  //Remove contact list indivisually
  const removeSingleContact = (id) => {
    const updatedList = contacts.filter((val) => {
      return val.id !== id;
    });
    setContacts(updatedList);
  };

  //Remove all contact lists
  const RemoveAllContacts = () => {
    setContacts([]);
  };

  return (
    <>
      <h1 className="header">Cantact Manager</h1>
      <ContactForm addContact={addContact} />
      <ContactList
        contacts={contacts}
        removeSingleContact={removeSingleContact}
        handleRemoveAllClick={RemoveAllContacts}
      />
    </>
  );
};

export default ContactManager;
