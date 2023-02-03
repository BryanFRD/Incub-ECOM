import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartProduct from '../components/CartProduct';
import { validateCart } from '../features/cart/cart-slice';

const CartScreen = () => {
  const { products, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  const handleValidate = () => {
    dispatch(validateCart());
  }
  
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
      <div className='md:w-1/3 p-5'>
        <div className='rounded-lg border border-zinc-200 dark:border-zinc-600 w-full h-full flex flex-col p-5 justify-between text-zinc-900 dark:text-white'>
          <div className='flex flex-col overflow-auto'>
            {products.map((product, index) => 
              <div key={product.id} className={`flex px-2 p-1 justify-between border-zinc-300 dark:border-zinc-700 ${index < products.length - 1 && 'border-b'}`}>
                <span>{product.name}</span>
                <span>{`${new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(product.price * product.amount)}`}</span>
              </div>
            )}
          </div>
          <div className='flex justify-between items-center'>
            <span className='font-semibold text-lg'>{`Total: ${new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(total)}`}</span>
            <button className='bg-green-600 text-white px-4 py-2 rounded-md' onClick={handleValidate}>Valider</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;