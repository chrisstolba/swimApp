import React from 'react';

const SelectClassOf = props => {
  const curYear = new Date().getFullYear();
  const years = [];
  for(let year = 0; year < 5; year++) {
    years.push(curYear+year);
  }

  return (
    <select id="classOf" name="classOf" required>
      {years.map( year => <option key={year} value={year}>{year}</option> )}
    </select>
  );
};

export default SelectClassOf;
