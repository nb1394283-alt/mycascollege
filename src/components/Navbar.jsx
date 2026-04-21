import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>🎓 My College</div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/courses" style={styles.link}>Courses</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 40px',
    backgroundColor: '#1a237e',
    color: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'white',
  },
  links: {
    display: 'flex',
    gap: '30px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
  },
}

export default Navbar;