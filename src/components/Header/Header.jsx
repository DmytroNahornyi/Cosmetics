// src/components/Header/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { ShoppingCart, Person } from '@mui/icons-material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            My Store
          </Link>
        </Typography>
        <Button color="inherit" component={Link} to="/category">
          Categories
        </Button>
        <Button color="inherit" component={Link} to="/cart">
          <ShoppingCart />
        </Button>
        <Button color="inherit" component={Link} to="/login">
          <Person />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
