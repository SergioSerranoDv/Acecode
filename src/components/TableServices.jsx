/** @format */

import React, { useEffect, useState } from 'react'
import ModifyService from './ModifyService'
import DeleteService from './DeleteService'
import NewService from './NewService'
export default function TableServices() {
  const [services, setServices] = useState([])

  async function getServices() {
    await fetch('http://localhost:5000/dashboard')
      .then((res) => res.json())
      .then((data) => setServices(data))
  }
  useEffect(() => {
    getServices()
  }, [])

  return (
    <table className=" w-full mt-[101px] -z-20">
      <thead>
        <tr className=" w-full h-[43px] bg-white rounded-xl text-black">
          <th className="w-[200px] font-Inter font-semibold text-[12px] rounded-l-lg">
            PRODUCTS
          </th>
          <th className="w-[200px] font-Inter font-semibold text-[12px]">
            SERVICES
          </th>
          <th className=" w-[200px] font-Inter font-semibold text-[12px]">
            RATING
          </th>
          <th className="w-[200px] font-Inter font-semibold text-[12px] rounded-r-lg">
            EDIT
          </th>
        </tr>
      </thead>
      <tbody>
        {services.map((service, index) => (
          <tr key={index} className="">
            <td className="flex mt-4">
              <img
                src={`/services/${service.link}`}
                alt="Services"
                className="w-16 h-16 rounded-lg ml-8 "
              />
            </td>
            <td>
              <span className="font-Inter font-extralight  text-base">
                {service.service}
              </span>
            </td>
            <td>
              {[...Array(service.raiting)].map((star, idx) => (
                <span className="inline-block ml-4" key={idx}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="yellow"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentcolor"
                    className="w-6 h-6 ">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </span>
              ))}
            </td>
            <td className="">
              <div className="flex">
                <DeleteService id={service._id} />
                <ModifyService id={service._id} />
                <NewService id={service._id} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
