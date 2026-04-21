import React from 'react'

const courseList = [
  { name: 'Computer Science', duration: '4 Years', icon: '💻' },
  { name: 'Business Administration', duration: '3 Years', icon: '📊' },
  { name: 'Mechanical Engineering', duration: '4 Years', icon: '⚙️' },
  { name: 'Arts & Design', duration: '3 Years', icon: '🎨' },
  { name: 'Medical Science', duration: '5 Years', icon: '🏥' },
  { name: 'Law', duration: '5 Years', icon: '⚖️' },
]

function Courses() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Our Courses</h1>
      <div style={styles.grid}>
        {courseList.map((course, i) => (
          <div key={i} style={styles.card}>
            <div style={styles.icon}>{course.icon}</div>
            <h3>{course.name}</h3>
            <p>Duration: {course.duration}</p>
            <button style={styles.btn}>Learn More</button>
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: { padding: '60px 40px', textAlign: 'center' },
  title: { fontSize: '40px', color: '#1a237e', marginBottom: '40px' },
  grid: { display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' },
  card: {
    backgroundColor: 'white', padding: '30px', borderRadius: '10px',
    width: '220px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  icon: { fontSize: '40px', marginBottom: '10px' },
  btn: {
    marginTop: '10px', padding: '8px 20px',
    backgroundColor: '#1a237e', color: 'white',
    border: 'none', borderRadius: '5px', cursor: 'pointer',
  },
}

export default Courses