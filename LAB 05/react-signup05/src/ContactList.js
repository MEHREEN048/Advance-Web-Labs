
import React, { useState } from "react";

function ContactList() {
  const [selected, setSelected] = useState("");

  const contacts = [
    "Ayesha",
    "Fatima",
    "Hira",
    "Zara",
    "Sara"
  ];

  return (
    <div className="contacts">
      <h2>My Contacts</h2>

      {contacts.map((person, index) => (
        <div
          key={index}
          className="contact"
          onClick={() => setSelected(person)}
        >
          {person}
        </div>
      ))}

      <p>
        {selected
          ? `Selected Contact: ${selected}`
          : "Select a contact"}
      </p>
    </div>
  );
}

export default ContactList;
