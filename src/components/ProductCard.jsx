import React from 'react';

const ProductCard = ({name, type, price, src, alt}) => {
  return (
    <div class="max-w-sm m-auto bg-white border border-gray-200 rounded-lg shadow-md dark:bg-zinc-900 dark:border-zinc-700">
      <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
      <div class="p-5">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          <button
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
          </button>
      </div>
  </div>
  );
};

export default ProductCard;