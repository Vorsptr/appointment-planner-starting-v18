import React from "react";

export const ContactPicker = ({ contacts, handleChange, contact }) => {
  return (
    <>
      <select value={contact} onChange={handleChange} required>
        <option value="no contact selected" key="default" selected>
          Select contact
        </option>
        {contacts &&
          contacts.map((contact, index) => {
            return (
              <option value={contact.name} key={index}>
                {contact.name}
              </option>
            );
          })}
      </select>
    </>
  );
};
