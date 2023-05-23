/** @format */

'use client'
import React, { useState } from 'react'
import ModalUsers from '../Modals/ModalUsers'
export default function ModifyUser({ id }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button
        className="w-[80px] h-[36px] bg-aquamarine px-4 mx-2 rounded-xl font-Inter font-semibold text-[12px] text-black"
        onClick={() => setOpen(!open)}>
        Modify
      </button>
      {open ? (
        <ModalUsers
          setOpen={setOpen}
          id={id}
          method={'PUT'}
          action={'Update'}
          title={'Update User'}
          alert={'User updated successfully'}
        />
      ) : null}
    </div>
  )
}
