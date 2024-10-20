import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const Sidenav = () => (
  <Drawer
    variant="permanent"
    sx={{
      width: 240,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: 240,
        boxSizing: 'border-box',
      },
    }}
  >
    <List>
      <ListItem>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Services" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Clients" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Contact" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidenav;
