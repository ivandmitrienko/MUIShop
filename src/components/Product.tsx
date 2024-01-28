import { IData } from '../types/types';

import { useProduct } from '../Context/ProductContextProvider';

import React from 'react';
import Card from '@mui/material/Card';
import { Button, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export const Product = (el: IData) => {

  const { addProduct, removeProduct, products } = useProduct();

  const addProductToCart = (el: IData) => {
    addProduct(el);
    el.handleClose();
  };

  const removeProductFromCart = (id: number) => {
    removeProduct(id);
  };

  const checkProductInStorage = products.some((e) => e.id === el.id);

  return (
    <div style={{ height: '100%' }}>
      <Card sx={{
        width: 260,
        maxHeight: 320,
        height: '100%',
        padding: '7px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
      }}>
        <CardMedia
          component='img'
          sx={{ height: 200, objectFit: 'contain' }}
          image={el.image}
          title={el.category}
        />
        <CardContent>
          <Typography gutterBottom variant='subtitle2' component='div'>
            {el.title}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
          >
                        ${el.price}
          </Typography>
          <small><del>{(Number(el.price) * 1.25).toFixed(2)}</del></small>
        </CardContent>
        <CardActions sx={{ position: 'absolute', top: '82%', right: 5 }}>
          {!(checkProductInStorage) ?
            <Button variant='outlined' onClick={() => addProductToCart(el)}>
              <AddShoppingCartIcon />
            </Button> :
            <Button variant='outlined' color='error' onClick={() => removeProductFromCart(el.id)}>
                            Delete
            </Button>}
        </CardActions>
      </Card>
    </div>
  );
};
