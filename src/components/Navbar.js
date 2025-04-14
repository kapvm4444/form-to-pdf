import React from "react";
import TextField from "./TextField";

export default function Navbar({ doctor, onSetDoctor }) {
  return (
    <>
      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div href="#" className="flex items-center">
            <span className="h-10 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Patient Health Report Form
            </span>
          </div>
          <div className="flex align-center justify-center">
            <label className="h-10 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Dr.&nbsp;
            </label>
            <TextField
              value={doctor}
              onChange={(e) => onSetDoctor(e.target.value)}
            ></TextField>
          </div>
        </div>
      </nav>
    </>
  );
}
