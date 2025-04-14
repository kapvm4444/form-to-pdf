import React from "react";

export default function Dropdown({ value, onChange, options, children }) {
  return (
    <>
      <div className="mb-5">
        <label htmlFor="gender" className="block mb-2 text-white">
          {children}
        </label>
        <select
          id="gender"
          value={value}
          onChange={onChange}
          className="bg-gray-50 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
        >
          {options.map((val, index) => (
            <option value={val} key={index}>
              {val}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
