import React from 'react'

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2024 My College. All Rights Reserved.</p>
      <p>📍 123 College Road | 📞 +91 98765 43210</p>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: '#1a237e',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    marginTop: '40px',
  },
}

export default Footer