/** @format */

import React from 'react'
import { useState, useEffect } from 'react'
import Cookies from 'universal-cookie'
import Slider from '../components/Slider'
import Navbar from '../components/Navbar'
export default function Services() {
  const cookie = new Cookies()
  const token = cookie.get('session')
  console.log(token.token)
  const [services, setServices] = useState([])
  async function getServices() {
    await fetch('http://localhost:5000/services', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
        Authorization: `Bearer ${token.token} `,
      },
    })
      .then((res) => res.json())
      .then((data) => setServices(data))
  }
  useEffect(() => {
    getServices()
  }, [])

  return (
    <>
      <Navbar />
      <div className="relative">
        <div className=" flex justify-center mt-8 mx-4">
          <div className=" flex bg-grayMouse bg-opacity-25 border-purple border-2 px-4 py-2 rounded-2xl">
            {services.map((service, index) => (
              <div key={service.id} className="flex justify-between my-2 ">
                <span className=" font-Inter font-medium text-white text-[14px] leading-5 hover:text-space">
                  {service.service}
                </span>
                <img
                  src="./arrowLighting.png"
                  width={24}
                  height={24}
                  alt=""
                  className="ml-2 mx-4"
                />
              </div>
            ))}
          </div>
        </div>
        <div
          className=" grid grid-cols-3 mt-12 backdrop-blur-sm"
          style={{
            background:
              'linear-gradient(180deg, #171718 0%, #000000 57.09%, #2C2B3E 100%)',
          }}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className=" flex flex-col items-center w-[380px] my-12 bg-gray-900 rounded-xl mx-auto border-space shadow-white shadow-sm ">
              <img
                width={350}
                height={200}
                src={`./${service.link}`}
                alt=""
                className=" h-[220px] my-4 pcs rounded-2xl shadow-lg "
              />
              <span className="flex justify-center mt-8">
                {service.service}
              </span>

              <button
                href="/services/webDevelopment"
                className=" w-40 my-4 px-4 py-2 bg-space backdrop-blur rounded-full hover:bg-space hover:opacity-20 transition delay-150 duration-300 ease-in-out"
                style={{
                  transition: 'all 0.5s ease-out',
                }}>
                <a href="/services/webDevelopment"> View More</a>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
