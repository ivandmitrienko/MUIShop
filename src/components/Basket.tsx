import { Divider, Drawer, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useProduct } from '../Context/ProductContextProvider';
import ItemBasket from './ItemBasket';

interface IDrawer {
  closeCart: () => void,
  cartOpen: boolean
}

export const Basket = ({ closeCart, cartOpen }: IDrawer) => {

  const { products } = useProduct()

  return (
    <Drawer
      anchor='right'
      open={cartOpen}
      onClose={closeCart}
    >
      <List sx={{ width: "350px" }}>
        <ListItem disablePadding secondaryAction={
          <IconButton edge="end" aria-label="close" onClick={closeCart}>
            <CloseIcon sx={{ color: "black" }} />
          </IconButton>
        }>
          <ListItemText primary="Cart Shopping" sx={{ ml: "20px" }} />
        </ListItem>
        <Divider/>
        {products.map((e)=><ItemBasket {...e}/>)}
        <Divider/>
        <Typography variant='h6' sx={{textAlign:'center'}}>
          {products.length ? 
          <div>Total price:{products.reduce((acc, cur) => { return acc + Number(cur.price) *Number(cur.count)},0)}</div>:
          'Empty'}
        </Typography>
      </List>
    </Drawer>
  )
}
