import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const BaseScreen = () => {  
  return (
    <div className='flex flex-col h-screen bg-zinc-50 dark:bg-zinc-800'>
      <header>
        <Navbar/>
      </header>
      <main className='grow overflow-auto'>
        <Outlet/>
      </main>
    </div>
  );
};

export default BaseScreen;