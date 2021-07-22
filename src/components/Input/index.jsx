import React from 'react';

function Input({ label, children, className, ...attrs }) {
  // console.log(label);
  // console.log(children);
  // console.log(attrs);
  // console.log(className);
  return (
    <div>
      {label && (
        <label
          htmlFor={attrs.id}
        >{label}</label>
      )}
        <input {...attrs} />
        { children }
    </div>
  );
}

export default Input;