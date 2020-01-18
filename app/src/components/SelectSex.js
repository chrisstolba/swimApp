import React from 'react';

const SelectSex = props => {
  return (
    <select id="sex" name="sex" required>
      <option key="Male">Male</option>
      <option key="Female">Female</option>
    </select>
  );
};

export default SelectSex;
