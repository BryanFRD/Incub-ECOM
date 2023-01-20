import { Tab } from '@headlessui/react';
import React from 'react';
import ConnectionPanel from '../components/connection/ConnectionPanel';
import SignupPanel from '../components/connection/SignupPanel';

const ConnectionScreen = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      <div className='bg-zinc-200 dark:bg-zinc-700 rounded-lg overflow-hidden shadow shadow-zinc-200 dark:shadow-zinc-700'>
        <Tab.Group>
          <Tab.List className='text-zinc-900 dark:text-white'>
            <Tab className='outline-none py-2 px-5 w-1/2 border border-zinc-300 dark:border-zinc-600 rounded-tl-lg hover:bg-zinc-300 hover:dark:bg-zinc-600'>Connexion</Tab>
            <Tab className='outline-none py-2 px-5 w-1/2 border border-l-0 border-zinc-300 dark:border-zinc-600 rounded-tr-lg hover:bg-zinc-300 hover:dark:bg-zinc-600'>Inscription</Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <ConnectionPanel />
            </Tab.Panel>
            <Tab.Panel>
              <SignupPanel />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default ConnectionScreen;