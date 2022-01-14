import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button
} from '@mui/material';

const NavigationBar = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography data-cy="header" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Yesterdays News
          </Typography>
          <Button data-cy="sports-view"
            component={Link} to="/sports" color="inherit">Sports</Button>
          <Button data-cy="politics-view"
            component={Link} to="/politics" color="inherit">Politics</Button>
          <Button component={Link} to="/economy" color="inherit">Economy</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
