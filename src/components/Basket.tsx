import { Divider, Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
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
      </List>
    </Drawer>
  )
}
