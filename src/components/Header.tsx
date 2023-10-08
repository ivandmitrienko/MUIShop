import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Avatar, Button, IconButton, Typography, createTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider } from '@emotion/react';
import StoreIcon from '@mui/icons-material/Store';
import avatar from "../static/images/I.png";
import { grey } from '@mui/material/colors';
import { StyledBadge } from '../styleUtily/style';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

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

export const Header: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="static">
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
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                // onClick={handleOpenNavMenu}
                                color="inherit"
                                sx={{ p: '0' }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                display: { xs: 'flex', sm: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 400,
                                fontSize: '1.2rem',
                                letterSpacing: '.1rem',
                                wordSpacing: '-.5rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            MUI Shop
                        </Typography>
                        <Box sx={{ display: 'flex', flexGrow: 0, alignItems: 'center' }}>
                            <IconButton sx={{ p: 0, display: { xl: 'block', lg: 'block', xs:'none' }, }}>
                                <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    variant="dot"
                                >
                                    <Avatar alt="Ivan Dmit" src={avatar} sx={{ width: 50, height: 50 }} />
                                </StyledBadge>
                            </IconButton>
                            <IconButton color="primary" aria-label="add to shopping cart">
                                <AddShoppingCartIcon sx={{ color: 'white', ml: '5px' }} />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </Box>
    )
}
