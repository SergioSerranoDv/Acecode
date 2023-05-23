/** @format */

import React from 'react'
import { useForm } from 'react-hook-form'
import { json } from 'react-router'
import Cookies from 'universal-cookie'

export default function Login() {
  const cookie = new Cookies()
  const { register, handleSubmit } = useForm()
  async function Onsubmit(data, e) {
    try {
      e.preventDefault()
      await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: data.email, password: data.password }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            alert(data.error)
          } else {
            window.localStorage.setItem(
              'LoggedUser',
              JSON.stringify({
                token: data.token,
                type: data.typeUser,
              })
            )
            cookie.set(
              'session',
              JSON.stringify({ token: data.token, type: data.typeUser })
            )
            window.location.href = '/'
          }
        })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="h-screen w-full grid grid-cols-2">
      <div
        className="flex items-center justify-center "
        style={{
          background:
            'linear-gradient(180deg, #05A2E6 0%, #27282B 0.01%, #0B0D09 20.83%, rgba(111, 26, 182, 0.47) 64.58%)',
        }}>
        <div className="flex-col  ">
          <h1 className="font-bold font-Sedwick text-[40px] leading-[60px]">
            Acecode
          </h1>
          <h2 className=" font-medium font-Inter text-[18px] leading-4">
            The hottest place in the tech industry{' '}
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <form
          className=" flex flex-col items-center"
          onSubmit={handleSubmit(Onsubmit)}>
          <img src="/Home/planet.png" width={64} />
          <h1 className=" font-bold font-Sedwick text-2xl">Hello Again!</h1>
          <h2 className="font-normal font-Sedwick text-base mt-1">
            welcome Back
          </h2>
          <div className="relative my-2">
            <input
              type="email"
              {...register('email', {
                required: true,
              })}
              className=" relative w-[307px] h-[60px] mt-2 rounded-[30px] px-[65px] bg-white text-ceniza cursor-pointer"
              id="email"
              placeholder="Email Address"></input>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.2"
              stroke="#333333"
              className="w-6 h-6 absolute top-6 left-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <div className="relative">
            <input
              type="password"
              {...register('password', { required: true })}
              className="w-[307px] h-[60px] mt-2 rounded-[30px] px-[65px] bg-white text-ceniza cursor-pointer"
              id="password"
              placeholder="Password"
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
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
          <button
            type="submit"
            className="w-[307px] h-[60px] my-4 rounded-[30px]  bg-space ">
            LogIn
          </button>
          <a href="/Register">
            Dont have an account?..{' '}
            <span className="text-space">Subscribe here</span>
          </a>
        </form>
      </div>
    </div>
  )
}
