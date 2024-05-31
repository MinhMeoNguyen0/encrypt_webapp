import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Slider, AppBar, Toolbar, CssBaseline, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Layout from '../components/Layout';

const AesPage = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [strength, setStrength] = useState(50);

  const handleEncrypt = () => {
    setResult(`Encrypted AES Text with strength ${strength}`);
  };

  const handleDecrypt = () => {
    setResult(`Decrypted AES Text with strength ${strength}`);
  };

  const handleModeChange = (event) => {
    // Handle mode change (standard, fluency, etc.)
  };

  return (
    <Layout>
      <>
        <CssBaseline />
        <AppBar position="fixed">
          <Toolbar>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="mode-select-label">Modes</InputLabel>
              <Select
                labelId="mode-select-label"
                id="mode-select"
                onChange={handleModeChange}
                label="Modes"
              >
                <MenuItem value="standard">Standard</MenuItem>
                <MenuItem value="fluency">Fluency</MenuItem>
                <MenuItem value="natural">Natural</MenuItem>
                <MenuItem value="formal">Formal</MenuItem>
                <MenuItem value="academic">Academic</MenuItem>
                <MenuItem value="simple">Simple</MenuItem>
                <MenuItem value="creative">Creative</MenuItem>
                <MenuItem value="expand">Expand</MenuItem>
                <MenuItem value="shorten">Shorten</MenuItem>
                <MenuItem value="custom">Custom</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{ flexGrow: 1 }} />
            <Button color="inherit">English (US)</Button>
            <Button color="inherit">French</Button>
            <Button color="inherit">Spanish</Button>
            <Button color="inherit">German</Button>
            <Button color="inherit">All</Button>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Box sx={{ p: 3 }}>
          <Typography variant="h3" gutterBottom>AES Encryption</Typography>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Strength of Encryption
            </Typography>
            <Slider
              value={strength}
              onChange={(e, newValue) => setStrength(newValue)}
              aria-labelledby="encryption-strength-slider"
              valueLabelDisplay="auto"
            />
          </Box>
          <Box sx={{ mb: 4 }}>
            <TextField
              fullWidth
              multiline
              rows={6}
              variant="outlined"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text to encrypt"
            />
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={handleEncrypt}
          >
            Encrypt
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleDecrypt}
            sx={{ ml: 2 }}
          >
            Decrypt
          </Button>
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>Result:</Typography>
            <Typography variant="body1" sx={{ p: 2, border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#f9f9f9' }}>
              {result}
            </Typography>
          </Box>
        </Box>
      </>
    </Layout>
  );
};

export default AesPage;
