import React, { FC } from 'react'
import { Container, Grid, TextField } from '@mui/material';
import { IData } from '../types/types';
import { Product } from './Product';

type IProps = {
    data: IData[],
    loading:boolean
}

export const Layout: FC<IProps> = ({ data, loading }) => {
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
                        <Product {...el} />
                    </Grid>) 
                }
            </Grid>
        </Container>
    )   
}
