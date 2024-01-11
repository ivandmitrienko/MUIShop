import React from 'react'
import { IData } from '../types/types'
import { Card, CardContent, CardMedia, Divider, IconButton, ListItem, ListItemText, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useProduct } from '../Context/ProductContextProvider';

export default function ItemBasket(el: IData) {

    const { removeProduct } = useProduct()

    return (
        <>
            <ListItem key={el.id} secondaryAction={<IconButton aria-label="delete" size="small" onClick={()=>removeProduct(el.id)}>
                <DeleteIcon fontSize="small" color='error' />
            </IconButton>}>
                <Card sx={{ maxWidth: 200, display: "flex" }}>
                    <CardMedia
                        sx={{ height: 100, width: 100, backgroundSize: 'contain' }}
                        image={el.image}
                    >
                    </CardMedia>
                    <CardContent>
                        <Typography component='span'
                            sx={{
                                width: 100,
                                height: 50,
                                overflow: "hidden",
                                display: "-webkit-box",
                                fontSize: '12px',
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical"
                            }}
                        >
                            {el.title}
                        </Typography>
                        <Typography component='span' variant='subtitle2'>
                            {el.price}$
                        </Typography>
                    </CardContent>
                </Card>
                <IconButton>
                    <ControlPointIcon />
                </IconButton>
                <ListItemText primary={el.count} />
                <IconButton>
                    <RemoveCircleOutlineIcon />
                </IconButton>
            </ListItem>
            <Divider />
        </>
    )
}
