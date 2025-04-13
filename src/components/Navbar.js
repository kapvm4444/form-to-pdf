import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
          <div href="#" className="flex items-center">
            <span className="h-10 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Patient Health Report Form
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}
