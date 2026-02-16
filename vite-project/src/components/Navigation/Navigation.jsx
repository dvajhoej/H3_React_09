import { NavLink } from 'react-router-dom'
import './Navigation.css'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/products', label: 'Products' },
  { to: '/clicker', label: 'Clicker' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Navigation() {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <ul className="site-nav-list">
        {links.map((link) => (
          <li key={link.to} className="site-nav-item">
            <NavLink
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                isActive ? 'site-nav-link site-nav-link-active' : 'site-nav-link'
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
