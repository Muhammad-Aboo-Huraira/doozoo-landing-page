import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "white", boxShadow: 'none' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Typography sx={{ ml: 2, mr: 2, color: "black" }}>
            Have account already? <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Sign in</Link>
          </Typography>
          <Typography sx={{ ml: 2, color: "orange" }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Join the waitlist</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
