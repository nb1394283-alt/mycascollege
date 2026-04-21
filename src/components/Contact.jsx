import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [showPopup, setShowPopup] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Enter a valid email";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setShowPopup(true);
    setForm({ name: "", email: "", message: "" });
  };

  const closePopup = () => setShowPopup(false);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>

      <div style={styles.box}>
        <p>📍 123 College Road, Your City</p>
        <p>📞 +91 98765 43210</p>
        <p>📧 info@mycollege.edu</p>

        <div>
          <input
            style={{ ...styles.input, borderColor: errors.name ? "#e53935" : "#ccc" }}
            placeholder="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <p style={styles.error}>{errors.name}</p>}
        </div>

        <div>
          <input
            style={{ ...styles.input, borderColor: errors.email ? "#e53935" : "#ccc" }}
            placeholder="Your Email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}
        </div>

        <div>
          <textarea
            style={{ ...styles.input, borderColor: errors.message ? "#e53935" : "#ccc" }}
            placeholder="Your Message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
          />
          {errors.message && <p style={styles.error}>{errors.message}</p>}
        </div>

        <button style={styles.btn} onClick={handleSubmit}>
          send message
        </button>
      </div>

      {/* Popup Overlay */}
      {showPopup && (
        <div style={styles.overlay}>
          <div style={styles.popup}>
            <div style={styles.checkCircle}>✓</div>
            <h2 style={styles.popupTitle}>Message Sent!</h2>
            <p style={styles.popupText}>
              Thank you for reaching out. We'll get back to you shortly.
            </p>
            <button style={styles.closeBtn} onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { padding: "60px 40px", textAlign: "center" },
  title: { fontSize: "40px", color: "#1a237e", marginBottom: "30px" },
  box: {
    maxWidth: "500px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    width: "100%",
    boxSizing: "border-box",
  },
  error: {
    color: "#e53935",
    fontSize: "13px",
    marginTop: "4px",
    textAlign: "left",
  },
  btn: {
    padding: "12px",
    backgroundColor: "#1a237e",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
  overlay: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  popup: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "40px 32px",
    maxWidth: "360px",
    width: "90%",
    textAlign: "center",
    boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
  },
  checkCircle: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#e8f5e9",
    color: "#2e7d32",
    fontSize: "28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 16px",
  },
  popupTitle: { fontSize: "22px", color: "#1a237e", marginBottom: "10px" },
  popupText: { fontSize: "15px", color: "#555", marginBottom: "24px" },
  closeBtn: {
    padding: "10px 28px",
    backgroundColor: "#1a237e",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "15px",
    cursor: "pointer",
  },
};

export default Contact;