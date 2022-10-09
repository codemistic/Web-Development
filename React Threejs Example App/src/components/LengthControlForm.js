import React from "react";
import "./LengthControlForm.css";

const LengthControlForm = ({ sideLength, onChange }) => {
  return (
    <div className="length-control-form">
      Side length:
      <input
        type="number"
        value={sideLength}
        onChange={onChange}
        min={50}
        max={500}
      />
    </div>
  );
};

export default LengthControlForm;
