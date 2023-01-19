import React, { useEffect } from 'react';
import { SunIcon, MoonIcon, ShoppingCartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom';

const Navbar = ({search, setSearch}) => {
  const handleSearchOnChange = (event) => {
    setSearch(event.target.value);
  }
  
  const handleChangeTheme = () => {
    if(document.documentElement.classList.contains('dark')){
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  }
  
  return (
    <nav className="bg-zinc-200 shadow-md px-4 md:px-24 py-2.5 dark:bg-zinc-900">
      <div className="flex flex-col md:flex-row gap-5 items-center justify-between">
        <NavLink to="/"  className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-zinc-900 dark:text-white">Incubateur e-commerce</span>
        </NavLink>
        <div className="flex items-center w-auto gap-5 md:gap-10">
          <input 
            className="bg-gray-100 dark:bg-zinc-700 rounded-lg px-2 text-lg py-1 dark:text-white"
            placeholder='Rechercher' 
            onChange={handleSearchOnChange}
            value={search}>
          </input>
          <div className='flex gap-5'>
            <button>
              <ShoppingBagIcon className='h-8 w-8 md:h-6 md:w-6 text-zinc-900 dark:text-white'/>
            </button>
            <button className='align-middle' onClick={handleChangeTheme}>
              <SunIcon className='h-8 w-8 md:h-6 md:w-6 dark:hidden text-zinc-900'/>
              <MoonIcon className='h-6 w-6 hidden dark:block text-white'/>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;