import React from 'react';

const CreateMeetForm = props => {
  const onSubmit = (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const location = document.getElementById("location").value; 
    const date = document.getElementById("date").value; 

    const data = { name, location, date };

    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
    };

    fetch(process.env.REACT_APP_API_URL + "/meets", options)
      .then( () => props.dispatchReloadMeets() )
      .catch( e => console.error(e) );

    document.getElementById("name").value = ''; 
    document.getElementById("date").value = ''; 
  }

  return (
    <form className="CreateMeetForm" onSubmit={onSubmit}>
      <p className="formElement">
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" required />
      </p>
      <p className="formElement">
        <label htmlFor="location">Location:</label>
        <select id="location" name="location" required>
          <option key="Home">Home</option>
          <option key="Away">Away</option>
        </select>
      </p>
      <p className="formElement">
        <label htmlFor="Date">Date:</label>
        <input id="date" type="date" required />
      </p>
      <button type="Submit" className="submitButton">Create Meet</button>
    </form>
  );
};

export default CreateMeetForm;
