/** @format */

import React, { createContext, useState, useEffect } from 'react'
import Cookies from 'universal-cookie'
export const appContext = createContext()
appContext.displayName = 'appContext'

export default function ContexProvider(props) {
  const cookie = new Cookies()
  const [state, setstate] = useState()
  let user = cookie.get('session')
  let typeUser = ''
  if (user) {
    typeUser = user.type
  }
  useEffect(() => {
    setstate(typeUser)
  }, [])
  return (
    <div>
      <appContext.Provider value={[state, setstate]}>
        {props.children}
      </appContext.Provider>
    </div>
  )
}
