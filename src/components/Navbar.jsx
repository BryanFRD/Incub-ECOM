import React, { useContext } from 'react';
import { SunIcon, MoonIcon, ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import { Popover } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../features/navbar-search/navbar-search-slice';
import NavbarCartDropdownItem from './NavbarCartDropdownItem';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
  const { products, total } = useSelector((state) => state.cart);
  const { search } = useSelector((state) => state.navbarSearch);
  const dispatch = useDispatch();
  const { auth, handleLogout } = useContext(AuthContext);
  
  const handleSearchOnChange = (event) => {
    dispatch(setSearch(event.target.value));
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
    <nav className='bg-zinc-200 shadow-md px-4 md:px-24 py-2.5 dark:bg-zinc-900'>
      <div className='flex flex-col md:flex-row gap-5 items-center justify-between'>
        <Link to='/' className='flex items-center'>
            <span className='self-center text-2xl font-semibold whitespace-nowrap text-zinc-900 dark:text-white'>Incubateur E-Commerce</span>
        </Link>
        <div className='flex items-center w-auto gap-5 md:gap-10 flex-col md:flex-row'>
          <input 
            className='bg-gray-100 dark:bg-zinc-700 rounded-lg px-2 text-lg py-1 dark:text-white'
            placeholder='Rechercher' 
            onChange={handleSearchOnChange}
            value={search}>
          </input>
          <div className='flex gap-10 md:gap-5'>
            <button className='text-center align-middle' onClick={handleChangeTheme}>
              <SunIcon className='h-8 w-8 md:h-6 md:w-6 dark:hidden text-zinc-900'/>
              <MoonIcon className='h-6 w-6 hidden dark:block text-white'/>
            </button>
            <Popover className='relative'>
              <Popover.Button className='text-center align-middle'>
                {products.length > 0 &&
                  <span className='text-white rounded-3xl bg-red-500 -top-1 left-3 leading-tight h-fit px-1 py-0.5 text-xs absolute pointer-events-none'>
                    {products.length}
                  </span>
                }
                <ShoppingBagIcon className='h-8 w-8 md:h-6 md:w-6 text-zinc-900 dark:text-white'/>
              </Popover.Button>
              <Popover.Panel className='absolute z-10 -right-24 py-3'>
                <div className='bg-zinc-100 dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-600 rounded-lg overflow-hidden w-max'>
                  {!products?.length ?
                    <>
                      <span className='whitespace-nowrap px-5 text-zinc-900 dark:text-white'>Vous n'avez pas d'article dans votre panier</span>
                    </>
                    :
                    <>
                      {products.map(product =>
                        <NavbarCartDropdownItem key={product.id} product={product}/>
                      )}
                      <div className='flex mx-2 my-2 gap-3 text-zinc-900 dark:text-white items-center'>
                        <span>{`Total: ${new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(total)}`}</span>
                        <Popover.Button as={Link} to='/cart' className='ml-auto text-white bg-green-600 px-2 py-1 rounded-md'>Valider panier</Popover.Button>
                      </div>
                    </>
                  }
                </div>
              </Popover.Panel>
            </Popover>
            <Popover className='relative' >
              <Popover.Button className='text-center align-middle'>
                <UserCircleIcon className='h-8 w-8 md:h-6 md-6 text-zinc-900 dark:text-white' />
              </Popover.Button>
              <Popover.Panel className='absolute z-20 text-right -right-6 py-3 leading-8'>
                <div className='flex flex-col bg-zinc-100 dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-600 rounded-lg overflow-hidden w-max'>                  
                  {auth ? 
                    <>
                      <span className='text-zinc-900 dark:text-white px-4 hover:bg-zinc-200 hover:dark:bg-zinc-600 border-b border-zinc-200 dark:border-zinc-600'>
                        {`Bonjour ${auth.firstname} !`}
                      </span>
                      <Popover.Button className='text-zinc-900 dark:text-white px-4 hover:bg-zinc-200 hover:dark:bg-zinc-600 border-b border-zinc-200 dark:border-zinc-600' onClick={handleLogout}>
                        Déconnexion
                      </Popover.Button>
                    </>
                    :
                    <>
                      <Popover.Button as={Link} to='/connection?selected=0' className='text-zinc-900 dark:text-white px-4 hover:bg-zinc-200 hover:dark:bg-zinc-600 border-b border-zinc-200 dark:border-zinc-600'>
                        Connexion
                      </Popover.Button>
                      <Popover.Button as={Link} to='/connection?selected=1' className='text-zinc-900 dark:text-white px-4 hover:bg-zinc-200 hover:dark:bg-zinc-600'>
                        Inscription
                      </Popover.Button>
                    </>
                  }
                </div>
              </Popover.Panel>
            </Popover>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;