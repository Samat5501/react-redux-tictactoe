import React from 'react';

function Input({ label, children, className, ...attrs }) {
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