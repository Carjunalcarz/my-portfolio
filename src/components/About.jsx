import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* container */}
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
            </div>
            <div className=''></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='pb-8 pl-4'>
                <p className='text-4xl font-bold inline'>Hi, I'm Alcarz , nice to meet you. Please take a look around.</p>
            </div>
            <div className=''>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur nihil consequuntur natus, architecto molestiae quaerat commodi fuga, labore amet nam quas fugit distinctio praesentium voluptatem esse ad mollitia facilis!
            </div>
          </div>
        </div> 
    </div>
  )
}

export default About