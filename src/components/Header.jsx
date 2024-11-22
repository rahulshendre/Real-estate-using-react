import React from 'react'
import Navbar from './Navbar'
import {motion} from "framer-motion"

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage: "url('/header_img.png')"}} id='Header'>
        {/* in this header section we are going to mount our navbar mb- margin bottom */}
        <Navbar/>
        <motion.div 
        initial ={{opacity:0, y:100}}
        transition={{duration: 1}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white '> 
            {/* mx-auto means that it adds an equal amount of margin from both the sides 
                py- padding from y*
                px- padding from x*/}
            <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore homes, bigger than your dreams </h2>
            <div className='space-x-6 mt-16'>
                {/* space between both and margin top */}
                <a href="#Projects" className='border border-white px-8 py-3 rounded'>Projects</a>
                <a href="Contact" className=' bg-blue-500 px-8 py-3 rounded'>Contact us</a>
            </div>
        </motion.div>
    </div>
  )
}

export default Header