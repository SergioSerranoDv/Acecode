/** @format */

import React from 'react'
import TopBar from '../components/TopBar'
import SideBar from '../components/SideBar'
import TableServices from '../components/TableServices'
export default function Dashboard() {
  return (
    <div className="flex w-screen h-screen bg-black">
      <SideBar />
      <div className="flex-col ">
        <TopBar />
        <div className=" w-[900px] pb-8 ml-12 bg-ceniza rounded-lg">
          <TableServices />
        </div>
      </div>
    </div>
  )
}
