import React, { useState } from "react";

const Dropdown: React.FC = () => {
  const [selected, setSelected] = useState("Date");
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "date", label: "Date" },
    { value: "time", label: "Time" },
    { value: "trust-score", label: "Trust Score" },
  ];

  const handleOptionClick = (value: string) => {
    setSelected(value);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block w-full text-left bg-[#101827] text-[#a9b2c3] px-3 py-2 text-sm border border-[#7D8390] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6DD49A] focus:border-[#6DD49A]"
      >
        {selected}
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-[#a9b2c3]">
          ▼
        </div>
      </button>

      {isOpen && (
        <ul className="absolute w-full bg-[#101827] border border-[#7D8390] rounded-lg mt-2 z-10">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option.label)}
              className="px-3 py-2 text-sm text-[#a9b2c3] hover:bg-[#6DD49A] hover:text-white cursor-pointer"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
