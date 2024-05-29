import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { Lock, ChevronLeft, ChevronRight } from '@mui/icons-material';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <Drawer variant="persistent" open={isOpen}>
      <IconButton onClick={toggleSidebar}>
        {isOpen ? <ChevronLeft /> : <ChevronRight />}
      </IconButton>
      <List>
        <ListItem button component={Link} to="/aes">
          <ListItemIcon><Lock /></ListItemIcon>
          <ListItemText primary="AES" />
        </ListItem>
        <ListItem button component={Link} to="/rsa">
          <ListItemIcon><Lock /></ListItemIcon>
          <ListItemText primary="RSA" />
        </ListItem>
        <ListItem button component={Link} to="/ntru">
          <ListItemIcon><Lock /></ListItemIcon>
          <ListItemText primary="NTRU" />
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
};

export default Sidebar;
