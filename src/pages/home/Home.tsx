import React from "react";
import { Navbar, Nav, Container, Row, Col, Carousel } from "react-bootstrap";
// import '../src/App.css';
import "./Home.css";
import Navabr from './NavbarComponent'

import {
  Phone,
  Search,
  UserPlus,
  Stethoscope,
  Calendar,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  FileText,
  Handshake,
  MonitorSmartphone,
  Building2,
} from "lucide-react";

function Home() {
  return (
    <div >
      {/* Top Bar */}
      <Navabr/>

      {/* Hero Section */}
      <div className="hero-section xl:h-100 w-full">
        <Container fluid>
          <Carousel
            prevIcon={<ChevronLeft size={24} />}
            nextIcon={<ChevronRight size={24} />}
            // indicators={false}
            // interval={10000}
            // controls={true}
          >
            <Carousel.Item w-full h-screen>
              <img src="src\assets\image1.png" alt="Banner" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="src\assets\image1.png" alt="Banner" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="src\assets\image1.png" alt="Banner" />
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>

      {/* Feature Cards */}
      <Container className="feature-cards">
        <Row>
          <Col md={4} className="mb-4 p-0">
            <div className="feature-card red rounded">
              <UserPlus size={40} />
              <h3>Find a Doctor</h3>
              <p>Choose by name, specialty and more.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4 p-0">
            <div className="feature-card gray rounded">
              <Stethoscope size={40} />
              <h3>Health Check up Plans</h3>
              <p>Personalized and Affordable Health Packages.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4 p-0">
            <div className="feature-card blue rounded">
              <Calendar size={40} />
              <h3>Book Appointment</h3>
              <p>Schedule your visit online.</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Core Specialties */}
      <Container className="core-specialties">
        <h2 className="text-center mb-5">Our Core Specialities</h2>
        <Row>
          <Col md={2} className="mb-4">
            <div className="specialty-card text-center p-2 border rounded-lg shadow-lg ">
              <div className="icon-wrapper">
                <FileText size={32} className="specialty-icon" />
              </div>
              <h4>OT Comparison</h4>
            </div>
          </Col>
          <Col md={2} className="mb-4">
            <div className="specialty-card text-center p-2 border rounded-lg shadow-lg ">
              <div className="icon-wrapper">
                <Handshake size={32} className="specialty-icon" />
              </div>
              <h4>Know Your Insurance</h4>
            </div>
          </Col>
          <Col md={2} className="mb-4">
            <div className="specialty-card text-center p-2 border rounded-lg shadow-lg ">
              <div className="icon-wrapper">
                <MonitorSmartphone size={32} className="specialty-icon" />
              </div>
              <h4>Online Consultation</h4>
            </div>
          </Col>
          <Col md={2} className="mb-4">
            <div className="specialty-card text-center p-2 border rounded-lg shadow-lg ">
              <div className="icon-wrapper">
                <Building2 size={32} className="specialty-icon" />
              </div>
              <h4>Hospitals</h4>
            </div>
          </Col>
          <Col md={2} className="mb-4">
            <div className="specialty-card text-center p-2 border rounded-lg shadow-lg ">
              <div className="icon-wrapper">
                <Building2 size={32} className="specialty-icon" />
              </div>
              <h4>Hospitals</h4>
            </div>
          </Col>
          <Col md={2} className="mb-4">
            <div className="specialty-card text-center p-2 border rounded-lg shadow-lg ">
              <div className="icon-wrapper">
                <Building2 size={32} className="specialty-icon" />
              </div>
              <h4>Hospitals</h4>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Clinical Experts */}
      <Container className="clinical-experts">
        <h2 className="text-center mb-5">Our Clinical Experts</h2>
        <Carousel
          prevIcon={<ChevronLeft size={24} />}
          nextIcon={<ChevronRight size={24} />}
          indicators={false}
          interval={10000}
          controls={true}
        >
          <Carousel.Item>
            <Row>
              <Col md={3}>
                <div className="expert-card">
                  {/* Image Section */}
                  <div className="expert-image-container">
                    <img
                      src="src/assets/image.png"
                      alt="Dr. Ajay Mandal"
                      className="expert-image"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="expert-content rounded-lg shadow-lg ">
                    <h3>Dr. Ajay Mandal</h3>
                    <p className="specialty">
                      Consultant - GI & Hepato-Biliary Surgeon
                    </p>
                    <p className="experience">Experience: 10 years</p>
                    <div className="expert-buttons">
                      <button className="call-us-btn p-2">Call Us</button>
                      <button className="book-appointment-btn p-2">
                        Book an Appointment
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="expert-card">
                  {/* Image Section */}
                  <div className="expert-image-container">
                    <img
                      src="src/assets/image.png"
                      alt="Dr. Ajay Mandal"
                      className="expert-image"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="expert-content">
                    <h3>Dr. Ajay Mandal</h3>
                    <p className="specialty">
                      Consultant - GI & Hepato-Biliary Surgeon
                    </p>
                    <p className="experience">Experience: 10 years</p>
                    <div className="expert-buttons">
                      <button className="call-us-btn p-2">Call Us</button>
                      <button className="book-appointment-btn p-2">
                        Book an Appointment
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="expert-card">
                  {/* Image Section */}
                  <div className="expert-image-container">
                    <img
                      src="src/assets/image.png"
                      alt="Dr. Ajay Mandal"
                      className="expert-image"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="expert-content">
                    <h3>Dr. Ajay Mandal</h3>
                    <p className="specialty">
                      Consultant - GI & Hepato-Biliary Surgeon
                    </p>
                    <p className="experience">Experience: 10 years</p>
                    <div className="expert-buttons">
                      <button className="call-us-btn p-2">Call Us</button>
                      <button className="book-appointment-btn p-2">
                        Book an Appointment
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="expert-card">
                  {/* Image Section */}
                  <div className="expert-image-container">
                    <img
                      src="src/assets/image.png"
                      alt="Dr. Ajay Mandal"
                      className="expert-image"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="expert-content">
                    <h3>Dr. Ajay Mandal</h3>
                    <p className="specialty">
                      Consultant - GI & Hepato-Biliary Surgeon
                    </p>
                    <p className="experience">Experience: 10 years</p>
                    <div className="expert-buttons">
                      <button className="call-us-btn p-2">Call Us</button>
                      <button className="book-appointment-btn p-2">
                        Book an Appointment
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row>
              <Col md={3}>
                <div className="expert-card">
                  {/* Image Section */}
                  <div className="expert-image-container">
                    <img
                      src="src/assets/image.png"
                      alt="Dr. Ajay Mandal"
                      className="expert-image"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="expert-content">
                    <h3>Dr. Ajay Mandal</h3>
                    <p className="specialty">
                      Consultant - GI & Hepato-Biliary Surgeon
                    </p>
                    <p className="experience">Experience: 10 years</p>
                    <div className="expert-buttons">
                      <button className="call-us-btn p-2">Call Us</button>
                      <button className="book-appointment-btn p-2">
                        Book an Appointment
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>

      <hr />
      {/* Footer Section */}
      <footer className="footer bg-light text-dark mt-5 pt-4">
        <Container>
          <Row>
            {/* About Section */}
            <Col md={4} className="mb-4">
              <h5>About CK Birla Hospitals</h5>
              <p>
                CK Birla Hospitals has been a leading healthcare provider with a
                commitment to clinical excellence and patient-centered care.
              </p>
            </Col>

            {/* Quick Links */}
            <Col md={2} className="mb-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#patients">Patients & Visitors</a>
                </li>
                <li>
                  <a href="#immunization">Paediatric Immunisation</a>
                </li>
                <li>
                  <a href="#international">International Patients</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
              </ul>
            </Col>

            {/* Contact Info */}
            <Col md={3} className="mb-4">
              <h5>Contact Us</h5>
              <p>
                <Phone size={16} /> 08062136595
              </p>
              <p>
                <Phone size={16} /> Emergency: 08062136598
              </p>
              <p>
                <MessageCircle size={16} /> info@ckbirlahospitals.com
              </p>
            </Col>

            {/* Social Media */}
            <Col md={3} className="mb-4">
              <h5>Follow Us</h5>
              <div className="d-flex gap-3">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </Col>
          </Row>

          <hr />

          {/* Copyright */}
          <div className="text-center py-3">
            © {new Date().getFullYear()} CK Birla Hospitals. All Rights
            Reserved.
          </div>
        </Container>
      </footer>

      {/* Fixed Buttons */}
      <a href="tel:08062136598" className="call-button">
        <Phone size={24} />
      </a>
      <a href="https://wa.me/918062136595" className="whatsapp-button">
        <MessageCircle size={24} />
      </a>
    </div>
  );
}

export default Home;