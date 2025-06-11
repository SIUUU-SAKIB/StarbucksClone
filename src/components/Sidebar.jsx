import React from 'react';

const Sidebar = () => {
    return (
        <div className='h-screen min-w-[600px] shadow-md bg-white absolute top-21 -right-80 z-0'>
          <ul className='flex flex-col gap-8 px-8 py-16'>
            <li>Menu</li>
          </ul>
        </div>
    );
};

export default Sidebar;