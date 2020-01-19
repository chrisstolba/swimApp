import React from 'react';

import SelectClassOf from "./SelectClassOf";
import SelectSex from "./SelectSex";

const CreateSwimmerForm = props => {
  const onSubmit = (e) => {
    e.preventDefault();
    
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const classOf = document.getElementById("classOf").value;
    const sex = document.getElementById("sex").value;
    const active = true;

    const data = { firstName, lastName, classOf, sex, active };

    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
    };

    fetch(process.env.REACT_APP_API_URL + "/swimmers", options)
      .then( () => props.dispatchReloadSwimmers() )
      .catch( e => console.error(e) );

    document.getElementById("firstName").value = '';
    document.getElementById("lastName").value = '';
  };

  return (
    <form className="CreateSwimmerForm" onSubmit={onSubmit}>
      <p className="formElement">
        <label htmlFor="firstName">First Name:</label>
        <input id="firstName" type="text" required />
      </p> 
      <p className="formElement">
        <label htmlFor="lastName">Last Name:</label>
        <input id="lastName" type="text" required />
      </p> 
      <p className="formElement">
        <label htmlFor="classOf">Class Of:</label>
        <SelectClassOf />
      </p> 
      <p className="formElement">
        <label htmlFor="sex">Sex:</label>
        <SelectSex />
      </p> 
      <button type="Submit" className="submitButton">Create Swimmer</button>
    </form>
  );
};

export default CreateSwimmerForm;
