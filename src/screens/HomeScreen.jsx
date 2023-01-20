import ProductCard from '../components/ProductCard';

const HomeScreen = () => {
  const products = [
    {id: 1, name: 'test1', price: 40, type: 'Fruits', src: 'https://flowbite.com/docs/images/blog/image-1.jpg', alt: 'Test1'},
    {id: 2, name: 'test2', price: 40, type: 'Legume', src: 'https://flowbite.com/docs/images/blog/image-1.jpg', alt: 'Test2'},
    {id: 3, name: 'test3', price: 40, type: 'Epicerie', src: 'https://flowbite.com/docs/images/blog/image-1.jpg', alt: 'Test3'},
    {id: 4, name: 'test4', price: 40, type: 'Fruit', src: 'https://flowbite.com/docs/images/blog/image-1.jpg', alt: 'Test4'},
  ];
  
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
          products
            .filter((product) => true)
            .map((product) => <ProductCard key={product.id} product={product}/>)
          }
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;