import { Tab } from '@headlessui/react';
import React, { Fragment } from 'react';
import { useSearchParams } from 'react-router-dom';
import ConnectionPanel from '../components/connection/ConnectionPanel';
import SignupPanel from '../components/connection/SignupPanel';

const ConnectionScreen = () => {
  const [searchParams] = useSearchParams();
  
  return (
    <div className='flex justify-center items-center h-full'>
      <div className='bg-zinc-200 dark:bg-zinc-700 rounded-lg overflow-hidden shadow shadow-zinc-200 dark:shadow-zinc-700'>
        <Tab.Group defaultIndex={searchParams.get('selected')}>
          <Tab.List className='text-zinc-900 dark:text-white'>
            <Tab as={Fragment}>
              {({ selected }) => 
                <button className={`outline-none py-2 px-5 w-1/2 border border-zinc-300 dark:border-zinc-600 rounded-tl-lg hover:bg-zinc-300 hover:dark:bg-zinc-600 ${selected && 'bg-zinc-300 dark:bg-zinc-600'}`}>
                  Connexion
                </button>
              }
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => 
                <button className={`outline-none py-2 px-5 w-1/2 border border-zinc-300 dark:border-zinc-600 rounded-tr-lg hover:bg-zinc-300 hover:dark:bg-zinc-600 ${selected && 'bg-zinc-300 dark:bg-zinc-600'}`}>
                  Inscription
                </button>
              }
            </Tab>
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