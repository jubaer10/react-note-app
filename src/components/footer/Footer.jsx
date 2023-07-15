import { FaLocationDot, FaRegEnvelope, FaRegCopyright } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary bg-opacity-10">
      <section className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <h6 className="fw-bold">React Note App</h6>
            <p>
              Passionate team creating intuitive apps, simplifying tasks, and
              enhancing productivity for users worldwide.
            </p>
          </div>
          <div className="col-md-2">
            <h6 className="fw-bold">Browse</h6>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Notes</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold">Services</h6>
            <ul className="list-unstyled">
              <li>Note-taking Assistant</li>
              <li>Feedback Collector</li>
              <li>Task Tracker</li>
              <li>Message Board</li>
              <li>Quote Generator</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold">Contact</h6>
            <ul className="list-unstyled">
              <li>
                <FaLocationDot /> 22 Newton Rd, UK
              </li>
              <li>
                <FaRegEnvelope /> example@email.com
              </li>
              <li>
                <FaPhone /> xxx-xxx-xxx
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center py-3">
            <span>
              <span className="me-1">
                <FaRegCopyright />
              </span>
              Copyright 2023
            </span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;