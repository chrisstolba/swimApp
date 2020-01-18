import React from 'react';

import CreateSwimmerForm from './CreateSwimmerForm';

const CreateSwimmer = props => {
  return (
    <div className="CreateSwimmerContainer">
      <h1>Create New Swimmer</h1>
      <CreateSwimmerForm {...props} />
    </div>
  );
};

export default CreateSwimmer;
