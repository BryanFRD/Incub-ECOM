import React from 'react';
import { PlusIcon, MinusIcon, TrashIcon } from '@heroicons/react/24/outline';

const CartProduct = ({ product, className }) => {
  return (
    <div className={`flex flex-col md:flex-row overflow-hidden border border-t-0 ${className}`}>
      <img src={product.src} alt={product.alt} className='md:w-52'/>
      <div className='flex flex-col md:flex-row justify-between py-5 px-10 grow gap-14'>
        <div className='flex justify-center items-center'>
          <button className='text-zinc-900 dark:text-white dark:border-zinc-600 dark:bg-zinc-700 border rounded-l-lg'>
            <MinusIcon className='w-6'/>
          </button>
          <span className='text-zinc-900 dark:text-white dark:border-zinc-600 dark:bg-zinc-700 w-12 md:w-9 text-center border-y'>
            {product.amount}
          </span>
          <button className='text-zinc-900 dark:text-white dark:border-zinc-600 dark:bg-zinc-700 border rounded-r-lg'>
            <PlusIcon className='w-6 '/>
          </button>
        </div>
        <div className='flex gap-5 justify-between items-center w-full'>
          <div>
            {`${new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(product.price * product.amount)}`}
          </div>
          <div>
            <TrashIcon className='w-8 text-red-500'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;