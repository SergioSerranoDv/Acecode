/** @format */

import React from 'react'
import { socialNetworks } from '../lib/Networks'
export default function Footer() {
  return (
    <div className=" flex flex-col items-center mt-12 bg-grayMouse ">
      <div className="flex justify-center my-4">
        {socialNetworks.map((network) => (
          <div
            className="mx-2 rounded-full bg-blueDesign  cursor-pointer"
            key={network.id}>
            <a href={network.url}>{network.svg}</a>
          </div>
        ))}
      </div>
      <p className="">
        Terms of use <span className="text-newRed">|</span> Privacy Policy
      </p>
    </div>
  )
}
