import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import icons from react-icons

const Accordion = ({ title, content, openSection, setOpenSection }) => {
  const isOpen = openSection === title;

  const toggleAccordion = () => {
    setOpenSection(isOpen ? null : title);
  };

  return (
    <div className="border rounded-md shadow-md my-4">
      <button
        className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="text-xl font-semibold">{title}</span>
        {isOpen ? (
          <FaChevronUp className="w-6 h-6 text-gray-600" />
        ) : (
          <FaChevronDown className="w-6 h-6 text-gray-600" />
        )}
      </button>
      {isOpen && (
        <div className="p-4 border-t">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
