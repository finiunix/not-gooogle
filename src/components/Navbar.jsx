import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-slate-700 border-slate-200 ">

        <div className='flex justify-between items-center space-x-5 w-screen'>

          <Link to='/'>
            <p className="text-1xl bg-slate-200 font-bold text-slate-900 py-1 px-2 rounded-full dark:bg-slate-50 dark:text-slate-900 hover:shadow-lg">
              not-gooogle 🚀
            </p>
          </Link>

          <button type='button' onClick={() => setDarkTheme(!darkTheme)} className='text-1xl dark:bg-slate-50 dark:text-slate-900 bg-slate-200 border rounded-full px-2 py-1 hover:shadow-lg'>

            {darkTheme ? 'light 🔆' : 'dark 🔅'} {/*adding a dynamic block*/}
          </button>
        </div>
    </div>
  )
};
