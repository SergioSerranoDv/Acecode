/** @format */

import { React, useState } from 'react'
import ModalUsers from '../Modals/ModalUsers'
export default function NewUser({ id }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button
        className="w-[80px] h-[36px] bg-purple px-4 mx-2 rounded-xl font-Inter font-semibold text-[12px] text-black"
        onClick={() => setOpen(!open)}>
        Insert
      </button>
      {open ? (
        <ModalUsers
          setOpen={setOpen}
          id={id}
          method={'POST'}
          action={'Insert'}
          title={'Insert New User'}
          alertMessage={'User registered successfully'}
        />
      ) : null}
    </div>
  )
}
