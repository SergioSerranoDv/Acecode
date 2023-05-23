/** @format */

import React, { useEffect, useState } from 'react'
import ModifyUser from './ModifyUser'
import DeleteUser from './DeleteUser'
import NewUser from './NewUser'
export default function TableUsers() {
  const [users, setUsers] = useState([])

  async function getUsers() {
    await fetch('http://localhost:5000/dashboard/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <table className=" w-full mt-[101px] -z-20">
      <thead>
        <tr className=" w-full h-[43px] bg-white rounded-xl text-black">
          <th className="w-[200px] font-Inter font-semibold text-[12px] rounded-l-lg">
            PROFILE
          </th>
          <th className="w-[200px] font-Inter font-semibold text-[12px]">
            NAME
          </th>
          <th className=" w-[200px] font-Inter font-semibold text-[12px]">
            EMAIL
          </th>
          <th className="w-[200px] font-Inter font-semibold text-[12px] rounded-r-lg">
            EDIT
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index} className="">
            <td className="flex mt-4">
              <img
                src={`/services/${user.profile}`}
                alt="Services"
                className="w-16 h-16 rounded-lg ml-8 "
              />
            </td>
            <td>
              <span className="font-Inter font-extralight  text-base">
                {user.name}
              </span>
            </td>
            <td>
              <span className="font-Inter font-extralight text-base">
                {user.email}
              </span>
            </td>
            <td className="">
              <div className="flex">
                <DeleteUser id={user._id} />
                <ModifyUser id={user._id} />
                <NewUser id={user._id} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
