import React from 'react'
import { IData } from '../types/types';
import Card from '@mui/material/Card';
import { CardContent, CardMedia, Typography } from '@mui/material';

export const Item = (el: IData) => {
    return (
        <div>
            <Card sx={{
                width: 260,
                maxHeight: 320,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
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
            </Card>
        </div>
    )
}
