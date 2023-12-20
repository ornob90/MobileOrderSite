import React from "react";

const SelectOption = ({ value, name, options, onChange }) => {
  return (
    <div className="border-b border-b-gray-400 pb-5">
      <p className="mt-4 ">{name}</p>
      <select
        value={value}
        name={name}
        onChange={onChange}
        className="w-full bg-gray-300 focus:outline-none mt-3 py-1 px-2 max-h-[100px] overflow-y-auto focus-within:max-h-[100px]"
      >
        <option className="" value="">
          Any
        </option>
        {options?.map((option, idx) => (
          <option className="" key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOption;
