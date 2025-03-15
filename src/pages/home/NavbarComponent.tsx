import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Phone, Home, Search, Stethoscope } from "lucide-react";


const NavbarComponent = () => {
  return (
    <div className="bg-white sticky top-0 z-50 shadow-md sticky-nav">
      {/* Top Bar */}
      <div className="top-bar">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-4">
              <a href="#" className="d-flex align-items-center gap-2">
                <Home size={16} className="icon" />
                Home
              </a>
              <a href="#" className="d-flex align-items-center gap-2">
                <Search size={16} className="icon" />
                Quick Enquiry
              </a>
            </div>
            <div className="d-flex align-items-center gap-4">
              <div className="d-flex align-items-center gap-2">
                <Phone size={16} className="icon" />
                Call Us: 08062136595
              </div>
              <a href="tel:08062136598" className="emergency-number">
                <Phone size={16} />
                Emergency No: 08062136598
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navigation */}
      <Navbar bg="white" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <Stethoscope size={40} className="text-danger me-2" />
            <div>
              <div className="h4 mb-0">CK BIRLA HOSPITALS</div>
              <div className="small text-muted">CMRI</div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#patients">Patients & Visitors</Nav.Link>
              <Nav.Link href="#immunization">Paediatric Immunisation</Nav.Link>
              <Nav.Link href="#international">International Patients</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <button className="book-appointment-btn ms-3">
                Book an Appointment
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
