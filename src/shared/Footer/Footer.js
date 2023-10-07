import React from 'react'
import './Footer.css'
import { BiLogoFacebookCircle, BiLogoYoutube } from 'react-icons/bi';
import { AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.jpg'

const Footer = () => {
  return (
    <div>
      <footer className="footer items-center justify-between lg:px-10 p-4 bg-base-200 text-neutral-content border-style">

        <div className="block md:flex gap-2 items-center justify-center m-auto">
          <img className='w-24' src={logo} alt="" />
          <h1 className='text-end text-black text-xl font-bold'> Maheen Accessories Ltd.
          </h1>
        </div>


        <div className="flex">
          {/* target="_blank" */}
          <Link to=''>
            <BiLogoFacebookCircle className='h-6 w-6 text-black' />
          </Link>
          <Link to=''>
            <BiLogoYoutube className='h-6 w-6 text-black' />
          </Link>
          <Link to=''>
            <AiFillLinkedin className='h-6 w-6 text-black' />
          </Link>

        </div>

      </footer>
    </div>
  )
}

export default Footer