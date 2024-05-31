import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Slider, AppBar, Toolbar, CssBaseline, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import Layout from '../components/Layout';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  padding: theme.spacing(3),
  height: '100vh',
}));

const Section = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2),
}));

const AesPage = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [strength, setStrength] = useState(50);
  const [mode, setMode] = useState('encrypt');

  const handleEncrypt = () => {
    setResult(`Encrypted AES Text with strength ${strength}`);
  };

  const handleDecrypt = () => {
    setResult(`Decrypted AES Text with strength ${strength}`);
  };

  const handleModeChange = (event) => {
    setMode(event.target.value);
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
                value={mode}
                onChange={handleModeChange}
                label="Modes"
              >
                <MenuItem value="encrypt">Encrypt</MenuItem>
                <MenuItem value="decrypt">Decrypt</MenuItem>
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
        <Container>
          <Section>
            <Typography variant="h6" gutterBottom>
              Enter text to {mode}
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={10}
              variant="outlined"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={`Enter text to ${mode}`}
            />
            <Box sx={{ mt: 2 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={mode === 'encrypt' ? handleEncrypt : handleDecrypt}
              >
                {mode === 'encrypt' ? 'Encrypt' : 'Decrypt'}
              </Button>
            </Box>
          </Section>
          <Section sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Strength of {mode === 'encrypt' ? 'Encryption' : 'Decryption'}
            </Typography>
            <Slider
              value={strength}
              onChange={(e, newValue) => setStrength(newValue)}
              aria-labelledby="encryption-strength-slider"
              valueLabelDisplay="auto"
              sx={{ width: '80%' }}
            />
          </Section>
          <Section>
            <Typography variant="h6" gutterBottom>
              Result
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={10}
              variant="outlined"
              value={result}
              placeholder="Result will be shown here"
              InputProps={{
                readOnly: true,
              }}
            />
          </Section>
        </Container>
      </>
    </Layout>
  );
};

export default AesPage;
