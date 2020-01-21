import React, { useState } from 'react';

import SelectMeet from './SelectMeet';
import SelectTeam from './SelectTeam';
import SelectSwimmer from './SelectSwimmer';
import SelectEvent from './SelectEvent';

const SubmitTimesForm = props => {
  const [ meet, setMeet ] = useState(null);
  const [ team, setTeam ] = useState("Men");
  const [ swimmer, setSwimmer ] = useState(null);
  const [ event, setEvent ] = useState(null);

  const onChange = (e) => {
    const selectedMeet = document.getElementById("meet").value;
    const selectedTeam = document.getElementById("team").value;
    const selectedSwimmer = document.getElementById("swimmer").value;
    const selectedEvent = document.getElementById("event").value;
    
    setMeet(selectedMeet);
    setTeam(selectedTeam); 
    setSwimmer(selectedSwimmer);
    setEvent(selectedEvent);
  } 

  const onSubmit = (e) => {
    e.preventDefault();

    const minutes = parseInt(document.getElementById("minutes").value);
    const seconds = parseInt(document.getElementById("seconds").value);
    const hundredths = parseInt(document.getElementById("hundredths").value);

    const time = (minutes * 60) + seconds + (hundredths / 100);

    const data = { meetID: meet, team, swimmerID: swimmer, eventID: event, time };

    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
    };

    fetch(process.env.REACT_APP_API_URL + "/races", options)
      .catch( e => console.error(e) );

    document.getElementById("minutes").value = '';
    document.getElementById("seconds").value = '';
    document.getElementById("hundredths").value = '';
  } 
  
  return (
    <form className="SubmitTimesForm" onChange={onChange} onSubmit={onSubmit}>
      <p className="formElement">
        <label htmlFor="meet">Meet:</label>
        <SelectMeet meets={props.meets} />
      </p>
      <p className="formElement">
        <label htmlFor="team">Team:</label>
        <SelectTeam />
      </p>
      <p className="formElement">
        <label htmlFor="swimmer">Swimmer:</label>
        {
          team === "Men" 
            ? <SelectSwimmer swimmers={props.swimmersMen} />
            : <SelectSwimmer swimmers={props.swimmersWomen} /> 
        }
      </p>
      <p className="formElement">
        <label htmlFor="event">Event:</label>
        <SelectEvent events={props.events} />
      </p>
      <p className="formElement">
        <label htmlFor="minutes">Time:</label>
        <span className="formElement_timeEntry">
          <input id="minutes" type="number" placeholder="Mins" required min="0" />:
          <input id="seconds" type="number" placeholder="Secs" required min="0" max="59" />.
          <input id="hundredths" type="number" placeholder="00" required min="0"max="99" />
        </span>
      </p>
      <button type="Submit">Submit Time</button>
    </form>
  );
};

export default SubmitTimesForm;
