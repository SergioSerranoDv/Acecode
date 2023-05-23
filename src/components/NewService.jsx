/** @format */
import { React, useState } from 'react'
import ModalServices from '../Modals/ModalServices'
export default function NewService({ id }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button
        className="w-[80px] h-[36px] bg-purple px-4 mx-2 rounded-xl font-Inter font-semibold text-[12px] text-black"
        onClick={() => setOpen(!open)}>
        Insert
      </button>
      {open ? (
        <ModalServices
          setOpen={setOpen}
          id={id}
          method={'POST'}
          title={'Insert New Service'}
          action={'Insert'}
        />
      ) : null}
    </div>
  )
}
