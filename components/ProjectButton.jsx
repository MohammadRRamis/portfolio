import React from 'react';

const ProjectButton = ({ text }) => {
  return (
    <button
      className={`text-3xl font-medium text-black box-border flex flex-row justify-center items-center px-10 py-4 gap-2.5 border-[3px] border-solid border-black hover:bg-black hover:text-white transition-all duration-300`}
    >
      {text}
    </button>
  );
};

export default ProjectButton;
