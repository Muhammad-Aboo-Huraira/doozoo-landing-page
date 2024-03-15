import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box } from '@mui/material';

function Footer() {
  return (
    <Box>
    <AppBar position="sticky" color="primary" style={{ top: 'auto',  backgroundColor: "white", boxShadow: 'none', marginBottom: '50px' }}>
      <Toolbar>
        <Box >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Typography variant="body1" color="inherit" sx={{ mr: 4, color: "black" }}>
            Connect with Doozoo
          </Typography>
          <InstagramIcon sx={{ color: 'black' }} />
          <TwitterIcon sx={{ color: 'black', ml: 1 }} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2" color="inherit" sx={{ color: "black" }}>
            Doozoo privacy statement
          </Typography>
          <Typography variant="body2" color="inherit" sx={{ ml: 1, color: "black" }}>
            Terms of use
          </Typography>
          </Box>
        </Box>
        <Typography variant="body1" color="inherit" style={{ marginLeft: 'auto', ml: 2, mr: 2, color: "black" }}>
          © Doozoo inc 2023
        </Typography>
      </Toolbar>
    </AppBar>
    </Box>
  );
}

export default Footer;
