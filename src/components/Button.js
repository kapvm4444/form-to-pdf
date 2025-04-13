import React from 'react';

export default function Button({children, onClick}) {
    return (
        <button type="button" onClick={onClick}
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 rounded-lg font-bold px-5 py-2.5 text-center me-2 mb-2 ">
            {children}
        </button>
    );
}