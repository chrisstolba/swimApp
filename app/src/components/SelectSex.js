import React from "react";

const SelectSex = props => {
  return (
    <select id="sex" name="sex" required>
      <option key="Male" value="Male">
        Male
      </option>
      <option key="Female" value="Female">
        Female
      </option>
    </select>
  );
};

export default SelectSex;
