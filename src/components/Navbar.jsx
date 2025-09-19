import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
  { path: '/products', label: 'Products' }
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
  loginButton: {
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    fontSize: '14px',
    padding: '8px 16px',
    borderRadius: '6px',
    fontWeight: '500',
    transition: 'background-color 0.2s'
  }
}

export default function Navbar() {
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  const getLinkStyle = (path) => ({
    color: isActive(path) ? '#007bff' : '#666',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: isActive(path) ? '500' : '400'
  })

  const handleButtonHover = (e, isEnter) => {
    e.target.style.backgroundColor = isEnter ? '#0056b3' : '#007bff'
  }

  return (
    <nav style={STYLES.nav}>
      <div style={STYLES.container}>
        <Link to="/" style={STYLES.logo}>
          Fata Shop
        </Link>

        <div style={STYLES.navLinks}>
          {NAV_LINKS.map(({ path, label }) => (
            <Link key={path} to={path} style={getLinkStyle(path)}>
              {label}
            </Link>
          ))}

          <Link 
            to="/login" 
            style={STYLES.loginButton}
            onMouseEnter={(e) => handleButtonHover(e, true)}
            onMouseLeave={(e) => handleButtonHover(e, false)}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  )
}