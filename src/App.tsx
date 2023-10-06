import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Avatar, Button, IconButton, Typography, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import StoreIcon from '@mui/icons-material/Store';

import { grey } from '@mui/material/colors';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    secondary: grey,
  },
});

const pages = ['Products', 'Pricing', 'Blog'];

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary">
          <Toolbar disableGutters={false}>
            <StoreIcon color="secondary" sx={{ display: { xs: 'none', sm: 'block', paddingBottom: '2px' }, mr: 1 }} />
            <Typography variant="h6" component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
              MUI Shop
            </Typography>
            <Box sx={{ flexGrow: 1, pt: '2px', ml: "15px", display: { xs: 'none', sm: 'flex', } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  // onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'blue', fontSize: '14px', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Ivan Dmit" src="images/2023-07-27_14-27.png" />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>

    </Box>)
}

export default App;
