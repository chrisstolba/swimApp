import React from 'react';

const SelectSwimmer = props => {
  return (
    <select id="swimmer" name="swimmer" required>
      <option key="default" value="">Pick Swimmer</option>
      {
        props.swimmers.map(swimmer => {
          return (
            <option key={swimmer.id} value={swimmer.id}>{swimmer.firstname} {swimmer.lastname} - {swimmer.class}</option>
          );
        })
      }
    </select>
  );
};

export default SelectSwimmer;
