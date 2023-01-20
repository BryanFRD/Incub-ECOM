import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/cart/cart-slice';

const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(addProduct(product));
  }
  
  return (
    <div className="max-w-sm m-auto bg-white border border-gray-200 rounded-lg dark:shadow-zinc-900 shadow-md dark:bg-zinc-900 dark:border-zinc-800">
      <img className="rounded-t-lg" src={product.src} alt={product.alt} />
      <div className="p-5 flex flex-col">
          <div className='flex justify-between'>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">{product.name}</h5>
            <span className='text-zinc-900 dark:text-white'>{`${new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(product.price)} / unité`}</span>
          </div>
          <button onClick={handleClick}
            className="inline-flex mx-auto items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Ajouter au panier
          </button>
      </div>
  </div>
  );
};

export default ProductCard;