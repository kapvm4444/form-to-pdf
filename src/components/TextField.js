import React from 'react';

export default function TextField({children, placeholder, type = 'text', value, onChange}) {
    return (
        <>
            <div className="mb-5">
                <label className="block mb-2  text-gray-900 dark:text-white">
                    {children}
                </label>
                {type === 'textarea' ?
                    <textarea id="message" rows="4" placeholder={placeholder} value={value} onChange={onChange}
                              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                    :
                    <input type={type} id="name" placeholder={placeholder} value={value} onChange={onChange}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       required/>
                }

            </div>
        </>
    );
}

