import React from 'react';

import SubmitTimesForm from "./SubmitTimesForm";

const SubmitTimes = props => {
  return (
    <div className="SubmitTimesContainer">
      <h1>Submit Times</h1>
      <SubmitTimesForm {...props} />
    </div>
  );
};

export default SubmitTimes;
