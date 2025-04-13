import React from 'react';

export default function Navbar(props) {
    return (
        <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                <div href="#" className="flex items-center ">
                    {/*<img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"/>*/}
                    <span
                        className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Public Seva</span>
                </div>
            </div>
        </nav>


    );
}