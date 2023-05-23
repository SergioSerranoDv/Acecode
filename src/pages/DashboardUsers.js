/** @format */

import React from 'react'
import TopBar from '../components/TopBar'
import SideBar from '../components/SideBar'
import TableUsers from '../components/TableUsers'

export default function DashboardUsers() {
  return (
    <div className="flex w-screen h-screen bg-black">
      <SideBar />
      <div className="flex-col ">
        <TopBar />
        <div className=" w-[900px] pb-8 ml-12 bg-ceniza rounded-lg">
          <TableUsers />
        </div>
      </div>
    </div>
  )
}
