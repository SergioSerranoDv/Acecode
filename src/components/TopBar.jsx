/** @format */

import React from 'react'

export default function TopBar() {
  return (
    <div className=" h-[90px] mt-4 ml-[29px] bg-ceniza rounded-lg">
      <div className="  flex justify-between items-center">
        <span className="font-Inter font-normal text-[20px] ml-[20px] mt-[40px]">
          Hello, Drex
        </span>
        <div className="flex mr-[135px]">
          <img
            src={'/avatar.png'}
            alt="avatar"
            className=" w-16 h-16 rounded-full border border-newRed   mt-4"
          />
          <span className="mt-8 mx-4 ">Drex</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mt-8 cursor-pointer">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
