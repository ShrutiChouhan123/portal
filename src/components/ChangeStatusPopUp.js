import React, { useState } from 'react';

const Popover = ({ trigger, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <div onClick={handleToggle}>{trigger}</div>
      {isOpen && (
        <div className="absolute z-10 w-48 bg-white border border-gray-200 rounded shadow-lg p-4">
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;
