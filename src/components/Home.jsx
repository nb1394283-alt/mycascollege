import React, { useEffect, useState } from 'react'
import './Home.css'

function Modal({ show, onClose, children }) {
  useEffect(() => {
    if (show) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [show])

  return (
    <div className={`modal-overlay ${show ? 'show' : ''}`} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} className="modal-content">
        {children}
        <button onClick={onClose} className="modal-close-btn">Close</button>
      </div>
    </div>
  )
}

function CourseCard({ icon, title, duration, seats, color }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="course-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        '--course-color': color,
        borderColor: hovered ? color : '#eee',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? `0 8px 24px ${color}33` : '0 2px 8px rgba(0,0,0,0.06)',
      }}>
      <div className="course-icon">{icon}</div>
      <h3 className="course-title">{title}</h3>
      <p className="course-details">⏱ {duration} &nbsp;|&nbsp; 🎓 {seats} seats</p>
    </div>
  )
}

function StatRow({ label, value, color }) {
  const [width, setWidth] = useState('0%')
  useEffect(() => { setTimeout(() => setWidth(value), 300) }, [value])
  return (
    <div className="stat-row">
      <div className="stat-label-row">
        <span className="stat-label">{label}</span>
        <span className="stat-value" style={{ color }}>{value}</span>
      </div>
      <div className="stat-bar-bg">
        <div className="stat-bar-fill animate" style={{
          '--stat-color': color,
          '--stat-value': value,
          background: color,
          width,
        }} />
      </div>
    </div>
  )
}

function Home() {
  const [visible, setVisible] = useState(false)
  const [showCourses, setShowCourses] = useState(false)
  const [showLearnMore, setShowLearnMore] = useState(false)

  useEffect(() => { setTimeout(() => setVisible(true), 100) }, [])

  const courses = [
    { icon: '💻', title: 'B.Sc Computer Science', duration: '3 Years', seats: '60', color: '#3f51b5' },
    { icon: '📊', title: 'B.Com Finance', duration: '3 Years', seats: '80', color: '#e91e63' },
    { icon: '🔬', title: 'B.Sc Chemistry', duration: '3 Years', seats: '45', color: '#009688' },
    { icon: '📖', title: 'B.A English Literature', duration: '3 Years', seats: '60', color: '#ff9800' },
    { icon: '🧮', title: 'B.Sc Mathematics', duration: '3 Years', seats: '50', color: '#9c27b0' },
    { icon: '🌿', title: 'B.Sc Botany', duration: '3 Years', seats: '40', color: '#4caf50' },
    { icon: '🎓', title: 'M.Sc Physics', duration: '2 Years', seats: '25', color: '#f44336' },
    { icon: '💼', title: 'MBA Business', duration: '2 Years', seats: '30', color: '#1a237e' },
  ]

  return (
    <div className="home-container">

      {/* Hero Section */}
      <div className="hero">
        <div className="overlay">
          <div className={`hero-content ${visible ? 'visible' : ''}`}>
            <p className="tagline">🎓 Welcome to</p>
            <h1 className="hero-title">CAS MALAMPUZHA</h1>
            <p className="hero-subtitle">Empowering Students for a Brighter Future</p>
            <div className="btn-group">
              <button className="btn-primary" onClick={() => setShowCourses(true)}>
                Explore Courses
              </button>
              <button className="btn-secondary" onClick={() => setShowLearnMore(true)}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-bar">
        {[
          { number: '5000+', label: 'Students' },
          { number: '200+', label: 'Faculty' },
          { number: '50+', label: 'Courses' },
          { number: '95%', label: 'Placement' },
        ].map((stat, i) => (
          <div key={i} className="stat-item">
            <h2 className="stat-number">{stat.number}</h2>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2 className="section-title">Why Choose Us?</h2>
        <p className="section-subtitle">We provide the best education experience</p>
        <div className="features-grid">
          {[
            { icon: '🏛️', title: 'Excellence', desc: 'Top-ranked institution with world-class faculty and modern facilities.' },
            { icon: '📚', title: 'Courses', desc: 'Wide range of undergraduate and postgraduate programs to choose from.' },
            { icon: '🌍', title: 'Campus Life', desc: 'Vibrant campus with clubs, sports, cultural events and more.' },
            { icon: '🏆', title: 'Achievements', desc: 'Award-winning programs recognized globally for their quality.' },
            { icon: '💼', title: 'Placements', desc: '95% placement rate with top companies visiting every year.' },
            { icon: '🔬', title: 'Research', desc: 'State-of-the-art labs and research centers for innovation.' },
          ].map((item, i) => (
            <FeatureCard key={i} item={item} delay={i * 100} />
          ))}
        </div>
      </div>

      {/* Campus Section */}
      <div className="campus-section">
        <div className="campus-content">
          <div className="campus-image-wrapper">
            <img src="/campus-building.jpg" alt="CAS Malampuzha Campus" className="campus-image" />
          </div>
          <div className="campus-text">
            <h2 className="campus-title">Our Beautiful Campus</h2>
            <p className="campus-desc">
              CAS Malampuzha boasts a sprawling green campus spread across 25 acres in the heart of Palakkad. 
              Our state-of-the-art facilities blend modern architecture with natural surroundings, providing students 
              with an inspiring learning environment.
            </p>
            <div className="campus-highlights">
              <div className="campus-highlight">
                <span className="highlight-icon">🏗️</span>
                <span className="highlight-text">Modern infrastructure with latest technology labs and smart classrooms</span>
              </div>
              <div className="campus-highlight">
                <span className="highlight-icon">🌳</span>
                <span className="highlight-text">Green campus with sports facilities, gardens, and recreational areas</span>
              </div>
              <div className="campus-highlight">
                <span className="highlight-icon">📚</span>
                <span className="highlight-text">Well-equipped library with 50,000+ books and digital resources</span>
              </div>
              <div className="campus-highlight">
                <span className="highlight-icon">🔬</span>
                <span className="highlight-text">20+ specialized labs for hands-on learning across various disciplines</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta">
        <h2 className="cta-title">Ready to Start Your Journey?</h2>
        <p className="cta-subtitle">Join thousands of students building their future with us</p>
        <button className="cta-btn">Apply Now</button>
      </div>

      {/* Explore Courses Modal */}
      <Modal show={showCourses} onClose={() => setShowCourses(false)}>
        <h2 style={{ color: '#1a237e', marginBottom: '6px', fontSize: '28px' }}>📚 Our Courses</h2>
        <p style={{ color: '#888', marginBottom: '28px', fontSize: '14px' }}>
          Choose from a wide range of undergraduate and postgraduate programs
        </p>
        <div className="courses-grid">
          {courses.map((course, i) => (
            <CourseCard key={i} {...course} />
          ))}
        </div>
        <div style={{
          marginTop: '28px', padding: '20px',
          background: '#f5f7ff', borderRadius: '12px',
          display: 'flex', alignItems: 'center', gap: '16px',
        }}>
          <span style={{ fontSize: '32px' }}>📝</span>
          <div>
            <p style={{ margin: '0 0 4px', fontWeight: 'bold', color: '#1a237e' }}>Admissions Open 2025–26</p>
            <p style={{ margin: 0, fontSize: '13px', color: '#666' }}>
              Last date to apply: <strong>July 31, 2025</strong>
            </p>
          </div>
          
        </div>
      </Modal>

      {/* Learn More Modal */}
      <Modal show={showLearnMore} onClose={() => setShowLearnMore(false)}>
        <h2 style={{ color: '#1a237e', marginBottom: '6px', fontSize: '28px' }}>🏛️ About CAS Malampuzha</h2>
        <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '24px' }}>
          CAS Malampuzha is a premier institution located in the heart of Palakkad, Kerala. 
          Established with a vision to provide quality education to all, we have grown into 
          one of the most respected colleges in the region with over 5,000 students and 200+ 
          dedicated faculty members.
        </p>

        <h3 style={{ color: '#1a237e', marginBottom: '16px' }}>📈 Our Performance</h3>
        {showLearnMore && (
          <>
            <StatRow label="Placement Rate" value="95%" color="#4caf50" />
            <StatRow label="Student Satisfaction" value="92%" color="#2196f3" />
            <StatRow label="Research Output" value="88%" color="#9c27b0" />
            <StatRow label="Faculty Qualification" value="98%" color="#f5a623" />
          </>
        )}

        <div className="info-grid">
          {[
            { icon: '📅', label: 'Established', value: '1975' },
            { icon: '🏢', label: 'Campus Area', value: '25 Acres' },
            { icon: '📚', label: 'Library Books', value: '50,000+' },
            { icon: '🔬', label: 'Labs', value: '20+' },
          ].map((item, i) => (
            <div key={i} className="info-card">
              <div className="info-icon">{item.icon}</div>
              <div className="info-value">{item.value}</div>
              <div className="info-label">{item.label}</div>
            </div>
          ))}
        </div>
      </Modal>

    </div>
  )
}

function FeatureCard({ item, delay }) {
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)
  useEffect(() => { setTimeout(() => setVisible(true), 300 + delay) }, [])
  return (
    <div
      className={`feature-card ${visible ? 'visible' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? '#1a237e' : 'white',
        color: hovered ? 'white' : '#333',
        transform: hovered ? 'translateY(-10px)' : (visible ? 'translateY(0)' : 'translateY(30px)'),
        opacity: visible ? 1 : 0,
        boxShadow: hovered ? '0 15px 40px rgba(26,35,126,0.3)' : '0 5px 20px rgba(0,0,0,0.08)',
      }}>
      <div className="feature-icon">{item.icon}</div>
      <h3 className="feature-title">{item.title}</h3>
      <p className="feature-desc">{item.desc}</p>
    </div>
  )
}

export default Home;