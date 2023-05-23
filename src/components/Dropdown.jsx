/** @format */

import React, { useContext } from 'react'
import { useState } from 'react'
import Cookies from 'universal-cookie'
import { appContext } from './ContexProvider'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
export default function Dropdown() {
  const SignOut = () => {
    cookie.remove('session')
    window.location.reload()
  }
  const cookie = new Cookies()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className=" relative flex-col w-[200px] items-center py-1 px-1 rounded  ">
      <div className="flex w-[64px] h-[64px] mx-auto rounded-full bg-purple font-Inter ">
        <img
          src="/Team/sergioDev.png"
          className=" rounded-full"
          alt="Memoji Sergio"
        />
        <button onClick={() => setIsOpen(!isOpen)}>
          <ChevronDownIcon
            className="h-6 w-6 mx-2 text-space "
            aria-hidden="true"
          />
        </button>
      </div>

      {isOpen ? (
        <div className="absolute w-[200px] flex flex-col items-center top-20 rounded-lg bg-grayMouse bg-opacity-80 order-1 ">
          {cookie.get('session') ? (
            <button
              className="font-Robot my-1 py-2 cursor-pointer hover:text-newRed"
              onClick={() => SignOut()}>
              Sign Out
            </button>
          ) : (
            <a
              className="font-Roboto my-1 py-2 cursor-pointer hover:text-newRed"
              href="/login">
              Sign In
            </a>
          )}
        </div>
      ) : null}
    </div>
  )
}
