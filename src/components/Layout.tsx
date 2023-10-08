import React, { FC } from 'react'
import { Container, Grid, TextField } from '@mui/material';
import { IData } from '../types/types';
import { Item } from './Item';

type IProps = {
    data: IData[],
}

export const Layout: FC<IProps> = ({ data }) => {
    return (
        <Container disableGutters sx={{ bgcolor: '#cfe8fc', height: '100%', maxWidth: "sx" }}>
            <TextField
                id="filled-basic"
                label="Search"
                variant="filled"
                fullWidth
                sx={{ backgroundColor: "none", mb: '1.5rem' }}
            />
            <Grid container sx={{height:'100%'}}>
                {data.map((el) => <Item key={el.id} {...el}/>)}
            </Grid>
        </Container>
    )
}
