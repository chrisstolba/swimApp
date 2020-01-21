import React from 'react';

import SearchTimesForm from './SearchTimesForm';

const SearchTimes = props => {
  return (
    <div className="SearchTimesContainer">
      <h1>Seacrch Times</h1>
      <SearchTimesForm {...props} />
    </div>
  );
};

export default SearchTimes;
