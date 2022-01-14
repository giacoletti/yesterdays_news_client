import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem
} from '@mui/material';

const NavigationBar = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Menu>
            <MenuItem>
            </MenuItem>
          </Menu>
          <Button color="inherit">Sports</Button>
          <Button color="inherit">Politics</Button>
          <Button color="inherit">Economy</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
