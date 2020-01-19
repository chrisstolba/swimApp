import React from 'react';

const SelectTeam = props => {
  return (
    <select id="team" name="team" required>
      <option key="Men" value="Men">Men's</option>
      <option key="Women" value="Women">Women's</option>
    </select>
  );
};

export default SelectTeam;
