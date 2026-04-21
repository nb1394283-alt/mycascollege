import React from 'react'

function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Us</h1>
      <p style={styles.text}>
CAS Malampuzha is a premier arts and science college nestled in the serene surroundings of Malampuzha, Palakkad, Kerala. Affiliated with the University of Calicut and recognized by the UGC, our institution has been a beacon of quality education since its establishment. We are committed to nurturing well-rounded individuals who are academically strong, socially responsible, and professionally ready.
Founded with a vision to bring accessible, high-quality higher education to the students of Palakkad and its surrounding regions, CAS Malampuzha began its journey with a handful of courses and a passionate team of educators. Over the decades, we have grown into a full-fledged institution offering a wide range of undergraduate and postgraduate programs across arts, science, and commerce streams. Today, we stand proud with thousands of alumni making a difference across India and around the world.
To provide an inclusive, student-centered learning environment that fosters critical thinking, creativity, and character — preparing students not just for careers, but for life.
        
      </p>
      <div style={styles.stats}>
        <div style={styles.stat}><h2>256+</h2><p>Students</p></div>
        <div style={styles.stat}><h2>23+</h2><p>Faculty</p></div>
        <div style={styles.stat}><h2>4+</h2><p>Courses</p></div>
        <div style={styles.stat}><h2>100%</h2><p>Placement</p></div>
      </div>
    </div>
  )
}

const styles = {
  container: { padding: '60px 40px', textAlign: 'center' },
  title: { fontSize: '40px', color: '#1a237e', marginBottom: '20px' },
  text: { fontSize: '18px', maxWidth: '700px', margin: '0 auto 40px', color: '#555' },
  stats: { display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' },
  stat: {
    backgroundColor: '#1a237e', color: 'white',
    padding: '30px 40px', borderRadius: '10px', textAlign: 'center',
  },
}

export default About;
