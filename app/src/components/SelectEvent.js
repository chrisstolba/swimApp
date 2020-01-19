import React from 'react';

const SelectEvent = props => {
  console.log(props);
  return (
    <select id="event" name="event" required>
      <option key="default" value="">Pick Event</option>
      {
        props.events.map(event => {
          return (
            <option key={event.id} value={event.id}>{event.name}</option>
          );
        })
      }
    </select>
  );
};

export default SelectEvent;
