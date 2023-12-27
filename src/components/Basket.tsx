import { Drawer, List } from '@mui/material'

interface IDrawer  {
  closeCart: ()=>void,
  cartOpen: boolean
}

export const Basket = ({ closeCart, cartOpen }: IDrawer) => {
  return (
    <Drawer
      anchor='right'
      open={cartOpen}
      onClose={closeCart}
    >
      <List>
        cacacacac
      </List>

    </Drawer>
  )
}
