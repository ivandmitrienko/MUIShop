import React from 'react'
import { IData } from '../types/types';
import Card from '@mui/material/Card';
import { CardContent, CardMedia, Typography } from '@mui/material';

export const Item = (el: IData) => {
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140}}
                    image={el.image}
                    title={el.category}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {el.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       {el.description}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
