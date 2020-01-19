import React from 'react';

import CreateMeetForm from "./CreateMeetForm";

const CreateMeet = props => {
  return (
    <div className="CreateMeetContainer">
      <h1>Create New Meet</h1>
      <CreateMeetForm {...props} />
    </div>
  );
};

export default CreateMeet;
