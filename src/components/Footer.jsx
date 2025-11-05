import React from 'react';
import "../Footer.css";

const Footer = () => (
  <footer className="footer">
    <p>© {new Date().getFullYear()}  Portfolio | Made using React</p>
  </footer>
);

export default Footer;
