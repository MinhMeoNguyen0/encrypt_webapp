import React, { useState } from 'react';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isEncryptMode, setEncryptMode] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleMode = () => {
    setEncryptMode(!isEncryptMode);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TopBar isEncryptMode={isEncryptMode} toggleMode={toggleMode} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, ml: isSidebarOpen ? '240px' : '60px' }}>
        <Toolbar />
        {children(isEncryptMode)}
      </Box>
    </Box>
  );
};

export default Layout;
