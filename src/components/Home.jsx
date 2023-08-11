import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div  name='home'className='w-full h-screen bg-[#0a192f]'>

      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white'>
      <p className='text-pink-600'>Hi, my name is</p>
      <h1 className='text-4xl sm:text-7xl font-bold text-white'>Alcarzin Cardona</h1>
      <h2 className='text-4xl sm:text-7xl font-bold text-gray-500'>I'm a Full Stack Developer.</h2>
      <p className='text-[#8892b0]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vitae minus, repellat amet at optio maiores nulla perspiciatis earum praesentium voluptatum dicta fugiat obcaecati laborum sapiente corrupti fugit, nesciunt assumenda?</p>
      <div className='flex'>
        <span>
          <Link to='work' smooth={true} duration={500}>
           <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work 
           <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span> 
           </button>
           </Link>
        </span>
       
      </div>
      </div>
    </div>
  )
}

export default Home