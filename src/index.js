/** @format */

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import Services from './pages/Services'
import ContexProvider from './components/ContexProvider'
import Dashboard from './pages/Dashboard'
import DashboardUsers from './pages/DashboardUsers'
import Web from './pages/Web'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  {
    path: '/services',
    element: <Services />,
  },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/dashboard/users', element: <DashboardUsers /> },
  { path: '/services/webDevelopment', element: <Web /> },
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ContexProvider>
      <RouterProvider router={router} />
    </ContexProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
