import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


// Import images from the src folder
import About_img from '../assets/About_img.jpg';
import teamImage1 from '../assets/team1.jpg';
import teamImage2 from '../assets/team2.jpg';
import Footer from './Footer';

const About = () => {
  return (
    <div style={{marginLeft:'3rem',marginRight:'3rem'}}>
    <Container fluid className="about-us-page" style={{ backgroundColor: '#f7f9fc' }}>
      {/* Hero Section */}
      <Row
        className="hero-section align-items-center justify-content-center text-center"
        style={{
          background: `url(${About_img}) no-repeat center center/cover`,
          color: '#fff',
          padding: '60px 0',
        }}
      >
        <Col>
          <h1 className="display-4" style={{ fontWeight: 'bold', color: 'black' }}>
            ABOUT US
          </h1>
          <p className="lead" style={{ fontSize: '1.2rem', color: 'black',padding:'2rem' }}>
          Welcome to MyBlogs – your digital haven for creativity, inspiration, and expression!

At MyBlogs, we believe everyone has a story to tell, a perspective to share, and a voice that deserves to be heard. Whether you're a seasoned writer, a passionate hobbyist, or someone just beginning your blogging journey, MyBlogs is the platform designed to empower your words and ideas.

Our mission is to create a vibrant and inclusive space where bloggers from all walks of life can connect, share, and inspire each other. With easy-to-use tools, customizable templates, and a supportive community, we’re here to make blogging accessible and enjoyable for everyone.

Join us in building a world of endless possibilities, where ideas flow freely, creativity knows no bounds, and every blog becomes a meaningful connection. Together, let’s shape a community that celebrates individuality and fosters collective growth.

Happy blogging!
The MyBlogs Team
          </p>
          <Button
            variant="primary"
            href="/Contact"
            style={{ fontSize: '1.1rem', padding: '12px 30px', borderRadius: '30px' }}
          >
            Get in Touch
          </Button>
        </Col>
      </Row>

     

      {/* Meet Our Team Section */}
      <Container className="my-5">
        <h1 className="text-center mb-4 fw-bold">Meet Our Team</h1>
        <Row className="justify-content-center text-center">
          {/* Team Member 1 */}
          <Col md={4} className="mb-4">
            <div className="card shadow-lg border-0 rounded my-3">
              <img
                src={teamImage1}
                className="card-img-top rounded-circle mx-auto d-block mt-3"
                alt="Sakshi Yemul"
                style={{ width: '200px', height: '200px' }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Dipti Berad</h5>
                <p className="card-text">
                  As a Frontend Developer, I design responsive and visually engaging user interfaces using the
                  MERN stack (MongoDB, Express, React, Node.js). My goal is to deliver fast, intuitive web experiences by
                  combining modern design principles with efficient code, ensuring a seamless experience on all devices.
                </p>
              </div>
            </div>
          </Col>

          {/* Team Member 2 */}
          <Col md={4} className="mb-4">
            <div className="card shadow-lg border-0 rounded my-3">
              <img
                src={teamImage2}
                className="card-img-top rounded-circle mx-auto d-block mt-3"
                alt="Prerana Chavan"
                style={{ width: '200px', height: '200px' }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Akshada Aware</h5>
                <p className="card-text">
                  As a Backend Developer at Royals, I design responsive and visually engaging user interfaces using the
                  MERN stack (MongoDB, Express, React, Node.js). My goal is to deliver fast, intuitive web experiences by
                  combining modern design principles with efficient code, ensuring a seamless experience on all devices.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

     
    </Container>
     <Footer/>
     </div>
  );
};

export default About;
