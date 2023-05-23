/** @format */

import React, { useContext, useState } from 'react'
import { appContext } from './ContexProvider'
import Dropdown from './Dropdown'
export default function Navbar() {
  const [state] = useContext(appContext)
  const [isOpen, setIsOpen] = useState(false)
  const links = [
    { id: 0, page: 'Home', path: '' },
    { id: 2, page: 'Services', path: 'services' },
  ]
  return (
    <>
      <nav className="sticky flex justify-between ">
        <ul className="hidden my-12 ml-4 lg:flex   ">
          {links.map((link) => (
            <li key={link.id} className="mx-4 text-center">
              <a
                href={`/${link.path}`}
                className="text-center text-[16px] font-Inter font-medium leading-5 hover:text-space cursor-pointer">
                {link.page}
              </a>
            </li>
          ))}
          {state === 'admin' ? (
            <li className="mx-4 text-center">
              <a
                href="/Dashboard"
                className="text-center text-[16px] font-Inter font-mendium leading-5 hover:text-aquamarine cursor-pointer">
                Dashboard
              </a>
            </li>
          ) : null}
        </ul>
        <img src="/Home/planet.png" width={200} className="" />
        <div className="flex justify-center mr-12 my-8">
          <Dropdown />
        </div>
        <div className=" flex py-4 mr-8  md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>
      {isOpen ? (
        <div className="flex justify-center w-full sm:hidden">
          <ul className="flex-col w-full">
            {links.map((link) => (
              <li key={link.id} className="mx-2 text-center">
                <a
                  href={link.page}
                  className=" text-center font-medium hover:text-emerald-200 cursor-pointer ">
                  {link.page}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  )
}
