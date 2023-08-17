import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Burger from '../assets/projects/burger.png'

const Activity = () => {

  return (
    <>
         <div name='activity' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Activity
          </p>
          <p className='py-6'>UseState Activity</p>
        </div>

{/* container for projects */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 height-vh">
          {/* Grid Item */}
  
    
  <div 
  style={{ backgroundImage: `url(${Burger})` }}
  className="  text-[#040c16] shadow-lg shadow-[#040c16] group container rounded-md  pl-[20px] text-center items-center mx-auto activity-div">
          <h2 className='text-xl pl-[-20px] text-left p-2 text-white font-bold border-b-4 border-pink-600 absolute'>Please Select Youre Order</h2>
    <Menu as="div" className="relative inline-block text-left pl-[30px] ">

      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-pink-600 px-2 py-2 text-sm font-semibold text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-pink-500 mt-[60px] ml-[50px]">
          Select
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md opacity-90 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
                <p className='cursor-pointer font-bold  text-pink-600 block px-4 py-2 text-sm'>BURGER</p>
            </Menu.Item>
             <Menu.Item>
                <p className='cursor-pointer font-bold text-pink-600 block px-4 py-2 text-sm'>ICE CREAM</p>
            </Menu.Item>
            <Menu.Item>
                <p className='cursor-pointer font-bold text-pink-600 block px-4 py-2 text-sm'>COKE</p>
            </Menu.Item>
          
          </div>
        </Menu.Items>
      </Transition>
    </Menu>

    
  </div>
      <div className="text-[#040c16] shadow-lg shadow-[#040c16] group container rounded-md  pl-[20px] text-center items-center mx-auto activity-div">

      </div>
        <div className="text-[#040c16] shadow-lg shadow-[#040c16] group container rounded-md  pl-[20px] text-center items-center mx-auto activity-div">
        
      </div>


</div>
      </div>
    </div>
    </>
  )
}

export default Activity