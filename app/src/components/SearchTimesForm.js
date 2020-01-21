import React, { useState } from 'react';

import SelectMeet from './SelectMeet';
import SelectTeam from './SelectTeam';
import SelectEvent from './SelectEvent';

const SearchTimesForm = props => {
  const [ meet, setMeet ] = useState('');
  const [ team, setTeam ] = useState("Men");
  const [ event, setEvent ] = useState('');

  const onChange = () => {
    const selectedMeet = document.getElementById("meet").value;
    const selectedTeam = document.getElementById("team").value;
    const selectedEvent = document.getElementById("event").value;

    setMeet(selectedMeet);
    setTeam(selectedTeam); 
    setEvent(selectedEvent);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const resultsPerSwimmer = document.getElementById('resultsPerSwimmer').value;
    const meetID = meet === '' ? 'null' : meet;
    const swimmer = null;
    const sortField = 'time';

    const params = `/${team}/${meetID}/${event}/${swimmer}/${sortField}/${resultsPerSwimmer}`;

    const options = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };

    props.fetchRaces(params, options);
  }

  return (
    <form className="SearchTimesForm" onChange={onChange} onSubmit={onSubmit}>
      <p className="formElement">
        <label htmlFor="meet">Meet:</label>
        <SelectMeet meets={props.meets} notRequired="true" />
      </p>
      <p className="formElement">
        <label htmlFor="team">Team:</label>
        <SelectTeam />
      </p>
      <p className="formElement">
        <label htmlFor="event">Event:</label>
        <SelectEvent events={props.events} />
      </p>
      <p className="formElement_longLabel">
        <label htmlFor="resultsPerSwimmer">Results Per Swimmer:</label>
        <input id="resultsPerSwimmer" type="number" defaultValue="1" min="1" required />
      </p>
      <button type="Submit">Search Times</button> 
    </form>
  );
};

export default SearchTimesForm;
