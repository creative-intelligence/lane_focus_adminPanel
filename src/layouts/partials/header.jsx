import React, { useState } from 'react'
import { PiBellLight } from "react-icons/pi";
import { RiCloseFill } from 'react-icons/ri';
import { ImProfile } from "react-icons/im";
import { Link } from 'react-router-dom';

export default function Header({ header }) {
  const [drop, setDrop] = useState(false);
  const [showMenue, setShowMenue] = useState(false);
  // console.log(users)
  return (
    <div>
      <div className='bg-white' >
        <nav className="text-gray-350">
          <div className=" flex flex-wrap items-center justify-between px-4 py-9 sm:p-8">
            <div className="flex items-center drop-shadow-lg">
              <span className="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap uppercase ">{header ? header : "Home"}</span>
            </div>
            <div className="relative" id="navbar-default">
              <div className='flex flex-row'>
                <div onClick={e => setShowMenue(true)} className='rounded-full drop-shadow-lg  flex justify-center items-center  mr-1 sm:mr-4 w-9 h-9'>
                  <PiBellLight className='w-6 h-6' />
                </div>
                <button type="button" className="flex items-center text-sm rounded-full md:mr-0" onClick={e => setDrop(!drop)} >
                  <div className='flex items-center text-sm drop-shadow-lg gap-2'>
                  <ImProfile className="w-4 h-4 text-gray-250"/>
                    <span className='hidden sm:block text-lg font-semibold'>Admin</span>
                  </div>
                </button>
              </div>
              {/* <div className="absolute items-center z-20"> */}
              <div className={`z-50 ${drop ? null : 'hidden'} absolute w-full px-2 my-4 text-gray-950 font-medium list-none bg-white backdrop-blur-md bg-opacity-10 divide-y divide-gray-100 rounded-lg shadow`}>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-background hover:text-black hover:rounded-md ">Profile</Link>
                  </li>
                </ul>
              </div>
              {/* </div> */}
            </div>
          </div>
          {/* <Notifications /> */}
        </nav>
      </div>

      <aside className={`fixed top-0 right-0 z-40 w-96 text-black bg-gradient-to-b from-gray-50 to-gray-100 h-screen ${showMenue ? 'block' : `hidden`}`} aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto space-y-3">
          {showMenue &&
            <button className='float-right text-xl text-black' onClick={e => setShowMenue(false)}>
              <RiCloseFill />
            </button>
          }
          <div className='pt-5'>
            <div className='rounded-md border px-4 py-1.5 space-y-1 bg-white shadow-md'>
              <h1 className='font-semibold'>Title</h1>
              <p className='text-xs font-medium text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, eligendi.</p>
            </div>
          </div>

        </div>
      </aside>
    </div>
  )
}
