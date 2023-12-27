import React from 'react'
import { IData } from '../types/types';
import Card from '@mui/material/Card';
import { Button, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const Item = (el: IData) => {
    return (
        <div style={{ height: "100%" }}>
            <Card sx={{
                width: 260,
                maxHeight: 320,
                height: '100%',
                padding: "7px",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: "relative"
            }}>
                <CardMedia
                    component="img"
                    sx={{ height: 200, objectFit: "contain" }}
                    image={el.image}
                    title={el.category}
                />
                <CardContent>
                    <Typography gutterBottom variant="subtitle2" component="div">
                        {el.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                    >
                        ${el.price}
                    </Typography>
                    <small><del>{(Number(el.price) * 1.25).toFixed(2)}</del></small>
                </CardContent>
                <CardActions sx={{ position: 'absolute', top: "82%", right: 5 }}>
                    <Button variant="outlined">
                        <AddShoppingCartIcon />
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}
