import React from 'react';

const Button = ({ text }) => {
  return (
    <button
      className={`text-3xl font-medium text-blue box-border flex flex-row justify-center items-center px-10 py-4 gap-2.5 border-[3px] border-solid border-blue hover:bg-blue hover:text-white transition-all duration-300`}
    >
      {text}
    </button>
  );
};

export default Button;
