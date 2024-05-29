import React from 'react';
import { AppBar, Toolbar, Typography, Switch, FormControlLabel } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

const TopBar = ({ isEncryptMode, toggleMode }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <LockIcon sx={{ mr: 2 }} />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          EasyEncrypt
        </Typography>
        <FormControlLabel
          control={<Switch checked={isEncryptMode} onChange={toggleMode} />}
          label={isEncryptMode ? 'Encrypt' : 'Decrypt'}
        />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
