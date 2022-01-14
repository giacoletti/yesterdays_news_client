import React from 'react';
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
          <Button color="inherit">Sports</Button>
          <Button color="inherit">Politics</Button>
          <Button color="inherit">Economy</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
