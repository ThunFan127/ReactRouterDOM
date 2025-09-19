import { useState, useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'

export default function PrivateRouter() {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated')
    setIsAuthenticated(authStatus === 'true')
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        Đang kiểm tra quyền truy cập...
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return (
    <>
      <AdminNavbar />
      <div style={{ padding: '20px' }}>
        <Outlet />
      </div>
    </>
  )
}