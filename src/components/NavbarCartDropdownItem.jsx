import React from 'react';
import { useDispatch } from 'react-redux';
import { decreaseProductAmount, increaseProductAmount, removeProduct } from '../features/cart/cart-slice';
import { PlusIcon, MinusIcon, TrashIcon } from '@heroicons/react/24/outline';

const NavbarCartDropdownItem = ({product}) => {
  const dispatch = useDispatch();
  
  return (
    <div className='flex gap-5 border-b border-zinc-200 dark:border-zinc-600 justify-between'>
      <img src={product.src} alt={product.alt} className='w-20 object-cover img-pixelated'/>
      <div className='flex gap-5 items-center grow'>
        <div className='flex items-center grow'>
          <button 
            className='p-1 border dark:border-zinc-600 rounded-l dark:bg-zinc-500'
            onClick={() => dispatch(decreaseProductAmount(product))}>
              <MinusIcon className='w-4 h-auto text-zinc-900 dark:text-white'/>
          </button>
          <span className='text-zinc-900 dark:text-white w-9 text-center border-y dark:border-zinc-600 dark:bg-zinc-500'>{product.amount}</span>
          <button 
            className='p-1 border dark:border-zinc-600 rounded-r dark:bg-zinc-500' 
            onClick={() => dispatch(increaseProductAmount(product))}>
              <PlusIcon className='w-4 h-auto text-zinc-900 dark:text-white opacity-100'/>
          </button>
        </div>
        <div className='text-zinc-900 dark:text-white flex gap-3 justify-between overflow-hidden w-36'>
          <span className='ml-auto'>{`${new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(product.price * product.amount)}`}</span>
          <button className='align-middle mr-2' onClick={() => dispatch(removeProduct(product))}>
            <TrashIcon className='w-6 h-auto text-red-500'/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarCartDropdownItem;