import React, { useState } from 'react';

import SearchTimesForm from './SearchTimesForm';
import SearchTimesResults from './SearchTimesResults';

const SearchTimes = props => {
  const [ results, setResults ] = useState([]);

  const fetchRaces = (params, options) => {
    fetch(process.env.REACT_APP_API_URL + "/races" + params, options)
      .then( res => res.json() )    
      .then( res => {
        console.log(res);
        setResults(res);
      })
      .catch( e => console.error(e) );
  }

  return (
    <div className="SearchTimesContainer">
      <h1>Seacrch Times</h1>
      <SearchTimesForm {...props} fetchRaces={fetchRaces} />
      <SearchTimesResults results={results} />
    </div>
  );
};

export default SearchTimes;
