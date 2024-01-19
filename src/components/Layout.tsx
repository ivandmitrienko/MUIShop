import { Product } from './Product';

import { IProps } from '../types/types';

import React, { FC, useState } from 'react';
import { Container, Grid, TextField } from '@mui/material';

export const Layout: FC<IProps> = ({ data, loading, handleClose}) => {

  const[search, setSearch] =useState<string>('');

  return (
    <Container disableGutters sx={{ bgcolor: '#cfe8fc', height: '100%', maxWidth: 'sx' }}>
      <TextField
        id='filled-basic'
        label='Search'
        variant='filled'
        fullWidth
        sx={{ backgroundColor: 'none', mb: '1.5rem' }}
        onChange={(e)=>setSearch(e.target.value)}
      />
      <Grid container justifyContent='center' spacing={2}>
        {loading ? <h1 style={{ height: '100vh' }}>Loading...</h1>:
          data
            .filter((el)=>el.title.toLowerCase().includes(search))
            .map((el) => <Grid item key={el.id} >
              <Product {...el} handleClose={handleClose}/>
            </Grid>) 
        }
      </Grid>
    </Container>
  );   
};
