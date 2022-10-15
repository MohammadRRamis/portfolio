import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <div className='fixed w-full z-[100] '>
      <div className='flex justify-between items-center w-full h-full px-12 2xl:px-16 py-6 '>
        <Image src="/../public/assets/logo.png" alt="image" width="165" height="61" />
        <div>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-20 uppercase hover:border-b'>Work</li>
            </Link>
            <Link href='/'>
              <li className='ml-20 uppercase'>About</li>
            </Link>
            <Link href='/'>
              <li className='ml-20 uppercase'>CV</li>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25}/>
          </div>
          </div>
        </div>
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : 'hidden'}>
          <div onClick={handleNav} className='flex flex-col w-full  items-end px-12 py-12'>
            <div>
              <AiOutlineClose size={25}/>
            </div>
            
          <ul className='flex flex-col items-center justify-center w-full h-screen'>
            <Link href='/'>
              <li className='mb-20 uppercase text-[#F8F9FA]'>Work</li>
            </Link>
            <Link href='/'>
              <li className='mb-20 uppercase text-[#F8F9FA]'>About</li>
            </Link>
            <Link href='/'>
              <li className='mb-20 uppercase text-[#F8F9FA]'>CV</li>
            </Link>
          </ul>
          
          </div>

        </div>
      </div>
  )
}

export default Navbar