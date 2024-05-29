import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import Layout from '../components/Layout';

const Home = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const handleEncrypt = () => {
    // Implement encryption logic
    setResult('Encrypted Text');
  };

  const handleDecrypt = () => {
    // Implement decryption logic
    setResult('Decrypted Text');
  };

  return (
    <Layout>
      <Typography variant="h3" gutterBottom>EasyEncrypt</Typography>
      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          multiline
          rows={6}
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to encrypt/decrypt"
        />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
        <Button variant="contained" color="primary" onClick={handleEncrypt}>
          Encrypt
        </Button>
        <Button variant="contained" color="secondary" onClick={handleDecrypt}>
          Decrypt
        </Button>
      </Box>
      <Box sx={{ mb: 4 }}>
        <input type="file" className="border p-2 rounded" />
      </Box>
      <Box>
        <Typography variant="h5" gutterBottom>Result:</Typography>
        <Typography variant="body1" sx={{ p: 2, border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#f9f9f9' }}>
          {result}
        </Typography>
      </Box>
    </Layout>
  );
};

export default Home;
