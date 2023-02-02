import { MinusIcon } from '@heroicons/react/24/outline';
import { PlusIcon } from '@heroicons/react/24/solid';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import API from '../api/Api';
import ProductCard from '../components/ProductCard';

const size = 12;

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [productType, setProductTypes] = useState([]);
  const [page, setPage] = useState(0);
  const [selectedType, setSelectedType] = useState('');
  const { search } = useSelector((state) => state.navbarSearch);
  
  useEffect(() => {
    API.get(`v1/product?page=${page}&size=${size}&type=${selectedType}&search=${search}`)
      .then(resp => {
        setProducts(resp.data);
        
        if(resp.data?.totalPages - 1 < page)
          setPage(resp.data.totalPages - 1);
      })
      .catch(error => console.log(error));
  }, [page, selectedType, search]);
  
  useEffect(() => {
    API.get('v1/producttype')
      .then(resp => setProductTypes([{name: 'Tout', id: '', noFiltter: true}, ...resp.data]))
      .catch(error => error);
  }, []);
  
  const handleNextPage = () => {
    setPage(prevPage => Math.min(prevPage + 1, products.totalPages - 1));
  }
  
  const handlePrevPage = () => {
    setPage(prevPage => Math.max(prevPage - 1, 0));
  }
  
  return (
    <div className='text-gray-100 flex flex-col md:flex-row h-full max-h-full'>
      <div className='py-5 flex flex-row md:flex-col bg-zinc-100 dark:bg-zinc-900 shadow-md dark:border-zinc-800 border w-full md:w-1/12'>
        {
          productType.map(productType => 
            <button 
              key={productType.id} 
              onClick={() => setSelectedType(productType.id)}
              className={`text-zinc-900 py-2 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 w-full p-1 ${selectedType === productType.id && 'bg-zinc-200 dark:bg-zinc-700'}`}>
                {productType.name}
              </button>
            )
        }
      </div>
      <div className='grow flex flex-col justify-between overflow-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-y-7 py-7'>
        {
          products.products
            // ?.filter((product) => 
            //   product.name.toLowerCase().includes(search.toLowerCase()) && (!selectedType || selectedType === product.productType.id))
            ?.map((product) => <ProductCard key={product.id} product={product}/>)
        }
        </div>
        <div className='justify-self-center flex justify-center h-10 text-zinc-900 dark:text-white my-5'>
          <button className='w-8 border rounded-l border-zinc-300 dark:border-zinc-600' onClick={handlePrevPage}><MinusIcon /></button>
          <span className='text-3xl align-middle w-16 text-center border-t border-b border-zinc-300 dark:border-zinc-600'>{page + 1}</span>
          <button className='w-8 border rounded-r border-zinc-300 dark:border-zinc-600' onClick={handleNextPage}><PlusIcon /></button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;