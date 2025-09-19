import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
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
          to="/" 
          style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#333',
            textDecoration: 'none'
          }}
        >
          Fata Shop
        </Link>

        {/* Navigation Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <Link 
            to="/" 
            style={{
              color: isActive('/') ? '#007bff' : '#666',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: isActive('/') ? '500' : '400'
            }}
          >
            Home
          </Link>
          
          <Link 
            to="/about" 
            style={{
              color: isActive('/about') ? '#007bff' : '#666',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: isActive('/about') ? '500' : '400'
            }}
          >
            About
          </Link>
          
          <Link 
            to="/contact" 
            style={{
              color: isActive('/contact') ? '#007bff' : '#666',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: isActive('/contact') ? '500' : '400'
            }}
          >
            Contact
          </Link>
          
          <Link 
            to="/products" 
            style={{
              color: isActive('/products') ? '#007bff' : '#666',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: isActive('/products') ? '500' : '400'
            }}
          >
            Products
          </Link>

          <Link 
            to="/login" 
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              textDecoration: 'none',
              fontSize: '14px',
              padding: '8px 16px',
              borderRadius: '6px',
              fontWeight: '500',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar