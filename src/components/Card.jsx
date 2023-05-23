/** @format */

import React from 'react'
export default function Card({ link, name, description, charge }) {
  return (
    <article className="flex flex-col items-center w-[400px] mt-4 bg-blue rounded-xl border-[1px] border-pinkSpace hover:shadow-pinkSpace shadow-lg">
      <div className=" w-[200px] h-[200px] mx-auto my-8 bg-black border-[1px] rounded-full ">
        <img
          src={link}
          className="flex  rounded-full"
          width={300}
          alt="Memoji Gaby"
        />
      </div>
      <h2 className="font-Inter text-space font-semibold text-xl">{name}</h2>
      <p className="mx-4 my-4 overflow-hidden font-Inter font-normal text-base">
        {description}
      </p>
      <p className="mt-2 mb-4 font-Sedwick font-semibold">{charge}</p>
    </article>
  )
}
