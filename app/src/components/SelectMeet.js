import React from 'react';

const SelectMeet = props => {
  const required = props.notRequired === undefined ? true : false;

  return (
    <select id="meet" name="meet" required={required}>
      <option key="default" value="">Select Meet</option>
      {
        props.meets.map( meet => {
          return (
            <option key={meet.id} value={meet.id}>
              {new Date(meet.date).toLocaleDateString("en-US", { month: '2-digit', day: '2-digit', year: '2-digit' })} - {meet.name}
            </option>) })
      }
    </select>
  );
};

export default SelectMeet;
