/** @format */
import React from 'react'
import { useState, useEffect } from 'react'
export default function Slider() {
  const [counter, setCounter] = useState(0)
  const slides = ['desktop.jpg', 'assamblingPc.jpg', 'tecnicalService.jpg']
  useEffect(() => {
    const timer = setTimeout(() => {
      if (counter === 2) {
        setCounter(0)
      } else {
        setCounter(counter + 1)
      }
    }, 5000)
    return () => clearTimeout(timer)
  }, [counter])

  return (
    <div className="flex  h-[800px] justify-center mx-auto mt-8 duration-500">
      <img
        src={`./${slides[counter]}`}
        alt=""
        className=" rounded-xl transition-all "
        width={1400}
        height={800}
      />
    </div>
  )
}
