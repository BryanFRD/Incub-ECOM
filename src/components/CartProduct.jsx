import React from 'react';
import { PlusIcon, MinusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { decreaseProductAmount, increaseProductAmount, removeProduct } from '../features/cart/cart-slice';

const CartProduct = ({ product, className }) => {
  const dispatch = useDispatch();
  
  return (
    <div className={`flex flex-col md:flex-row overflow-hidden border border-t-0 ${className}`}>
      <img src={product.src} alt={product.alt} className='md:w-52 img-pixelated'/>
      <div className='flex flex-col md:flex-row justify-between py-5 px-10 grow gap-14'>
        <div className='flex justify-center items-center'>
          <button
            className='text-zinc-900 dark:text-white dark:border-zinc-600 dark:bg-zinc-700 border rounded-l-lg'
            onClick={() => dispatch(decreaseProductAmount(product))}>
              <MinusIcon className='w-6'/>
          </button>
          <span className='text-zinc-900 dark:text-white dark:border-zinc-600 dark:bg-zinc-700 w-12 md:w-9 text-center border-y'>
            {product.amount}
          </span>
          <button
            className='text-zinc-900 dark:text-white dark:border-zinc-600 dark:bg-zinc-700 border rounded-r-lg'
            onClick={() => dispatch(increaseProductAmount(product))}>
              <PlusIcon className='w-6 '/>
          </button>
        </div>
        <div className='flex gap-5 justify-between items-center w-full flex-col md:flex-row'>
          <div className='flex items-center'>
            <h2 className='text-4xl'>{product.name}</h2>
          </div>
          <div className='flex gap-5 items-center'>
            <span className='text-1xl'>
              {`Total: ${new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(product.price * product.amount)}`}
            </span>
            <button onClick={() => dispatch(removeProduct(product))}>
              <TrashIcon className='w-8 text-red-500'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;