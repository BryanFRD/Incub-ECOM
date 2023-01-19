import React from 'react';
import { useOutletContext } from 'react-router';
import ProductCard from '../components/ProductCard';

const HomeScreen = () => {
  const {search} = useOutletContext();
  
  const test = [
    {name: 'test1', price: 40, type: 'Fruits', src: '', alt: 'Test1'},
    {name: 'test2', price: 40, type: 'Legume', src: '', alt: 'Test2'},
    {name: 'test3', price: 40, type: 'Epicerie', src: '', alt: 'Test3'},
    {name: 'test4', price: 40, type: 'Fruit', src: '', alt: 'Test4'},
  ]
  
  return (
    <div className='text-gray-100 flex flex-col md:flex-row h-full max-h-full p-7'>
      <div className='py-3 px-6'>
        <ul>
          <li></li>
        </ul>
      </div>
      <div className='grow'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-y-7'>
          {
          test
            .filter((t) => true)
            .map((t) => <ProductCard {...t}/>)
          }
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;