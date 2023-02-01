import React from 'react';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Navbar from '../components/Navbar';
import 'react-toastify/dist/ReactToastify.css';

const BaseScreen = () => {  
  return (
    <div className='flex flex-col h-screen bg-zinc-50 dark:bg-zinc-800'>
      <header>
        <Navbar/>
      </header>
      <main className='grow overflow-auto'>
        <Outlet/>
      </main>
      <ToastContainer 
          position='bottom-right' 
          autoClose={1000} 
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          pauseOnFocusLoss={false}
          draggable={false}
          limit={3}
          toastClassName='bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white'/>
    </div>
  );
};

export default BaseScreen;