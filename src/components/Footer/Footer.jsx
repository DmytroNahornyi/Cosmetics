// src/components/Footer/Footer.jsx
import React from 'react';
import { Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: 'auto',
        padding: '20px 0',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          © 2024 My Store
        </Typography>
        <Typography variant="body2" align="center">
          <Link href="/about" color="inherit">
            About Us
          </Link>{' '}
          |{' '}
          <Link href="/contacts" color="inherit">
            Contact
          </Link>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
