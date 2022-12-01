import React from 'react';

const Button = ({ text }) => {
  return (
    <button className='text-3xl font-medium text-[#6FC2FF] box-border flex flex-row justify-center items-center px-10 py-4 gap-2.5 border-[3px] border-solid border-[#6FC2FF] hover:bg-[#6FC2FF] hover:text-[#F8F9FA] transition-all duration-300'>
      {text}
    </button>
  );
};

export default Button;
