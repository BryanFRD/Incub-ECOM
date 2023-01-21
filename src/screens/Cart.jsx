import React from 'react';
import { useSelector } from 'react-redux';
import CartProduct from '../components/CartProduct';

const Cart = () => {
  const { products, total } = useSelector((state) => state.cart);
  
  return (
    <div className='flex flex-col md:flex-row h-full'>
      <div className='grow overflow-auto text-zinc-900 dark:text-white w-full'>
        {products.length === 0 ?
          <div className='text-center w-full text md:text-3xl font-semibold mt-5'>
            Vous n'avez pas d'articles dans votre panier !
          </div>
        :
          <div className='flex flex-col m-10'>
            {products.map((product, index) => 
              <CartProduct key={product.id} product={product} className={`${index === 0 && 'border-t rounded-t-lg'} ${index === products.length - 1 && 'rounded-b-lg'}`}/>
            )}
          </div>
        }
      </div>
      <div className='md:w-1/3'>
        
      </div>
    </div>
  );
};

export default Cart;