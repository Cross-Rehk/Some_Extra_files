import React, { useState } from 'react';

function App() {
  const [contacts, setcontacts] = useState([]);
  const [newFirstName, setNewFirstName] = useState("");
  const [newSecondName, setNewSecondName] = useState("");
  const [newPhoneNo, setNewPhoneNo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newFirstName) return;
    setcontacts([...contacts, { first: newFirstName ,second: newSecondName,phone: newPhoneNo}]);
    setNewFirstName("");
    setNewSecondName("");
    setNewPhoneNo("");
  };

  const handleChangeFirst = (event) => {
    setNewFirstName(event.target.value);
  };

  const handleChangeSecond = (event) => {
    setNewSecondName(event.target.value);
  };

  const handleChangePhone = (event) => {
    setNewPhoneNo(event.target.value);
  };

 

  const handleCompleted = (index) => {
    setcontacts(
      contacts.map((contact, i) => {
        if (i === index) {
          return { ...contact, completed: !contact.completed };
        }
        return contact;
      })
    );
  };

  return (
    <div className='main' >
      <div>
        <div className='headr'>
          <p className='title'>
            Conatacts App
          </p>
          <form
            onSubmit={handleSubmit}>
            <input
              className='inout'
              type="text"
              placeholder="FirstName"
              value={newFirstName}
              onChange={handleChangeFirst}
            />
            <input
              className='inout'
              type="text"
              placeholder="LastName"
              value={newSecondName}
              onChange={handleChangeSecond}
            />
            <input
              className='inout'
              type="text"
              placeholder="Phone No."
              value={newPhoneNo}
              onChange={handleChangePhone}
            />
            <button className='buttonsubmit' type="submit">Add</button>
          </form>
        </div>

        <ul className='contactlist'>
          {contacts.map((contact, index) => (
            <li key={index} >
              <span
                style={{
                  textDecoration: contact.completed ? "line-through" : "",
                  fontSize: "24px",
                }}
                onClick={() => handleCompleted(index)}
              >
                {contact.first} {contact.second} {contact.phone}
              </span>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
