import React, { FC } from 'react'
import { Container, Grid, TextField } from '@mui/material';
import { IProps } from '../types/types';
import { Product } from './Product';

export const Layout: FC<IProps> = ({ data, loading, handleClose}) => {
    return (
        <Container disableGutters sx={{ bgcolor: '#cfe8fc', height: '100%', maxWidth: "sx" }}>
            <TextField
                id="filled-basic"
                label="Search"
                variant="filled"
                fullWidth
                sx={{ backgroundColor: "none", mb: '1.5rem' }}
            />
            <Grid container justifyContent="center" spacing={2}>
                {loading ? <h1 style={{ height: '100vh' }}>Loading...</h1>:
                    data.map((el) => <Grid item key={el.id} >
                        <Product {...el} handleClose={handleClose}/>
                    </Grid>) 
                }
            </Grid>
        </Container>
    )   
}
