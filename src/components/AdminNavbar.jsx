import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function AdminNavbar() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated')
    alert('Đã đăng xuất thành công!')
    navigate('/')
  }

  const isActive = (path) => {
    if (path === '/admin' && location.pathname === '/admin') return true
    if (path !== '/admin' && location.pathname === path) return true
    return false
  }

  return (
    <nav style={{
      backgroundColor: '#fff',
      borderBottom: '1px solid #e5e5e5',
      padding: '0 20px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '60px'
      }}>
        {/* Logo */}
        <Link 
          to="/admin" 
          style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#333',
            textDecoration: 'none'
          }}
        >
          Admin Panel
        </Link>

        {/* Navigation Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <Link 
            to="/admin" 
            style={{
              color: isActive('/admin') ? '#007bff' : '#666',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: isActive('/admin') ? '500' : '400'
            }}
          >
            Dashboard
          </Link>
          
          <Link 
            to="/admin/account" 
            style={{
              color: isActive('/admin/account') ? '#007bff' : '#666',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: isActive('/admin/account') ? '500' : '400'
            }}
          >
            Account
          </Link>
          
          <Link 
            to="/admin/product" 
            style={{
              color: isActive('/admin/product') ? '#007bff' : '#666',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: isActive('/admin/product') ? '500' : '400'
            }}
          >
            Products
          </Link>
          
          <Link 
            to="/admin/order" 
            style={{
              color: isActive('/admin/order') ? '#007bff' : '#666',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: isActive('/admin/order') ? '500' : '400'
            }}
          >
            Orders
          </Link>

          <button
            onClick={handleLogout}
            style={{
              backgroundColor: '#f8f9fa',
              border: '1px solid #dee2e6',
              color: '#6c757d',
              padding: '8px 16px',
              borderRadius: '6px',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              fontWeight: '500'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#e9ecef'
              e.target.style.color = '#495057'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#f8f9fa'
              e.target.style.color = '#6c757d'
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default AdminNavbar