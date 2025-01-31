import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send form data to an API)
    console.log('Form Submitted:', formData);
    alert("Your message has been send successfully!!\nThank you for response....")
    
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  };

  return (
      <>
    <div style={{marginLeft:'3rem',marginRight:'3rem'}}>
      <Container fluid className="contact-page" style={{ backgroundColor: '#f8f9fa', padding: '50px 0' }}>
        <Row className="justify-content-center text-center">
          <Col md={6} className="contact-form" style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0.2, 0, 0.4)' }}>
            <h2 className="heading" style={{ fontSize: '2rem', color: '#333', marginBottom: '15px' }}>Get in Touch</h2>
            <p className="subheading" style={{ fontSize: '1rem', color: '#555', marginBottom: '30px' }}>We would love to hear from you! Feel free to drop a message.</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Control
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: '5px', border: '1px solid #ccc', marginBottom: '15px', padding: '10px', fontSize: '1rem' }}
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Control
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: '5px', border: '1px solid #ccc', marginBottom: '15px', padding: '10px', fontSize: '1rem' }}
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: '5px', border: '1px solid #ccc', marginBottom: '15px', padding: '10px', fontSize: '1rem' }}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="submit-btn" style={{
                width: '100%', padding: '12px', fontSize: '1.1rem', backgroundColor: '#007bff', border: 'none', borderRadius: '5px', color: 'white',
                transition: 'background-color 0.3s ease'
              }} onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'} onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}>
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  </>
  );
};

export default Contact;
