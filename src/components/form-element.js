import React from "react";

const inputWithLabel = (props) => {
  return (
    <div className="form-group text-left">
      <label className="form-label">{props.label}</label>
      <input
        className={props.classes}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChangeEvent}
      />
    </div>
  );
};

export default inputWithLabel;
