/** @format */

import React from 'react'
import { useForm } from 'react-hook-form'
export default function Register() {
  const { register, handleSubmit } = useForm()

  async function Onsubmit(data, e) {
    e.preventDefault()
    fetch('http://localhost:3001/users/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      }),
    })
      .then((res) => res.json())
      .then(
        (data) =>
          data.error
            ? alert(data.error)
            : alert('You have succesfully registered'),
        (window.location.href = '/')
      )
  }
  return (
    <div className="h-screen w-full grid md:grid grid-cols-2">
      <div
        className="flex items-center justify-center rounded-lg "
        style={{
          background:
            'linear-gradient(180deg, #05A2E6 0%, #27282B 0.01%, #0B0D09 20.83%, rgba(111, 26, 182, 0.47) 64.58%)',
        }}>
        <div className="flex-col ">
          <h1 className="font-bold font-Sedwick text-[40px] leading-[60px]">
            Acecode
          </h1>
          <h2 className=" font-medium font-sedwick text-[18px] leading-4">
            The hottest place in the tech industry{' '}
          </h2>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <form
          className="flex flex-col w-[600px] items-center"
          onSubmit={handleSubmit(Onsubmit)}>
          <img src="/Home/planet.png" width={64} />
          <h2 className="font-bold font-Sedwick text-2xl mt-[3px]">Welcome</h2>
          <div className="grid grid-cols-2 w-full ">
            <div>
              <div className="relative my-4 ">
                <input
                  type="text"
                  {...register('name', {
                    required: true,
                  })}
                  className="w-[200px] h-[60px] mt-2 rounded-[30px] px-[40px]  bg-white  text-ceniza cursor-pointer"
                  id="name"
                  placeholder="Name"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="black"
                  class="w-6 h-6 absolute top-6 left-4">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
              <div className="relative my-4">
                <input
                  type="text"
                  {...register('lastName', {
                    required: true,
                  })}
                  className="w-[200px] h-[60px] mt-2 rounded-[30px] px-[40px]  bg-white  text-ceniza cursor-pointer"
                  id="email"
                  placeholder="Last Name"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="black"
                  class="w-6 h-6 absolute top-6 left-4">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
            </div>
            <div className="">
              <div className="relative mt-4">
                <input
                  type="email"
                  {...register('email', { required: true })}
                  className="w-[300px] h-[60px] mt-2 rounded-[30px] px-[65px] bg-white text-ceniza cursor-pointer"
                  id="password"
                  placeholder="Email Address"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#333333"
                  className="w-6 h-6 absolute top-6 left-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                  />
                </svg>
              </div>
              <div className="relative my-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#333333"
                  className="w-6 h-6 absolute top-6 left-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
                <input
                  type="password"
                  {...register('password', { required: true })}
                  className="w-[300px] h-[60px] mt-2 rounded-[30px] px-[65px] bg-white text-ceniza cursor-pointer"
                  id="password"
                  placeholder="Password"></input>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full h-[60px] my-4 rounded-[30px] bg-space ">
            Register
          </button>
          <div className="flex mt-4">
            <a href="/Register">Dont have an account?.. Subscribe here</a>
          </div>
        </form>
      </div>
    </div>
  )
}
