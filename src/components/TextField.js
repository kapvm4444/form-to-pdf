import React from "react";

export default function TextField({
  children,
  placeholder,
  type = "text",
  value,
  onChange,
}) {
  return (
    <>
      <div className="mb-5">
        <label className="block mb-2 text-white">{children}</label>
        {type === "textarea" ? (
          <textarea
            id="message"
            rows="4"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        ) : (
          <input
            type={type}
            id="name"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
            required
          />
        )}
      </div>
    </>
  );
}
