import React, { useState } from "react";

const InputField = ({ num }) => {
  const [state, setState] = useState(num);
  const handleChangeInput = (event) => {
    setState(event.target.value.replace(/[^0-9]/g, ""));
  };
  return <input type="text" step="1" value={state} onChange={handleChangeInput} placeholder={num} />;
};
export default InputField;
