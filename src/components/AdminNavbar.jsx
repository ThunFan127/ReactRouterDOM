import { Link, useLocation, useNavigate } from 'react-router-dom'

const ADMIN_LINKS = [
  { path: '/admin', label: 'Dashboard' },
  { path: '/admin/account', label: 'Account' },
  { path: '/admin/product', label: 'Products' },
  { path: '/admin/order', label: 'Orders' }
]

const STYLES = {
  nav: {
    backgroundColor: '#fff',
    borderBottom: '1px solid #e5e5e5',
    padding: '0 20px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '60px'
  },
  logo: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#333',
    textDecoration: 'none'
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px'
  },
  logoutButton: {
    backgroundColor: '#f8f9fa',
    border: '1px solid #dee2e6',
    color: '#6c757d',
    padding: '8px 16px',
    borderRadius: '6px',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontWeight: '500'
  }
}

export default function AdminNavbar() {
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

  const getLinkStyle = (path) => ({
    color: isActive(path) ? '#007bff' : '#666',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: isActive(path) ? '500' : '400'
  })

  const handleButtonHover = (e, isEnter) => {
    if (isEnter) {
      e.target.style.backgroundColor = '#e9ecef'
      e.target.style.color = '#495057'
    } else {
      e.target.style.backgroundColor = '#f8f9fa'
      e.target.style.color = '#6c757d'
    }
  }

  return (
    <nav style={STYLES.nav}>
      <div style={STYLES.container}>
        <Link to="/admin" style={STYLES.logo}>
          Admin
        </Link>

        <div style={STYLES.navLinks}>
          {ADMIN_LINKS.map(({ path, label }) => (
            <Link key={path} to={path} style={getLinkStyle(path)}>
              {label}
            </Link>
          ))}

          <button
            onClick={handleLogout}
            style={STYLES.logoutButton}
            onMouseEnter={(e) => handleButtonHover(e, true)}
            onMouseLeave={(e) => handleButtonHover(e, false)}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}