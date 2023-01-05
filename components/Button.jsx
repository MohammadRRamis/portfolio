import React from 'react';

const Button = ({ text, mainColor, hoverColor }) => {
  return (
    <button
      className={`text-3xl font-medium text-${mainColor} box-border flex flex-row justify-center items-center px-10 py-4 gap-2.5 border-[3px] border-solid border-${mainColor} hover:bg-${mainColor} hover:text-${hoverColor} transition-all duration-300`}
    >
      {text}
    </button>
  );
};

export default Button;
