import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const BaseScreen = () => {
  const [search, setSearch] = useState('');
  
  return (
    <div className='flex flex-col h-screen bg-zinc-50 dark:bg-zinc-800'>
      <header>
        <Navbar search={search} setSearch={setSearch}/>
      </header>
      <main className='grow overflow-auto'>
        <Outlet context={{search}}/>
      </main>
    </div>
  );
};

export default BaseScreen;