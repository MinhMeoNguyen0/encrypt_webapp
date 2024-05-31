// import React, { useState } from 'react';
// import { Box, Button, TextField, Typography, Slider } from '@mui/material';
// import Layout from '../components/Layout';
// import { encryptNTRU, decryptNTRU } from '../services/ntru';

// const NtruPage = () => {
//   const [text, setText] = useState('');
//   const [result, setResult] = useState('');
//   const [strength, setStrength] = useState(50);

//   const handleEncrypt = async () => {
//     try {
//       const response = await encryptNTRU({ text, strength });
//       setResult(response.data);
//     } catch (error) {
//       console.error("Encryption error: ", error);
//     }
//   };

//   const handleDecrypt = async () => {
//     try {
//       const response = await decryptNTRU({ text, strength });
//       setResult(response.data);
//     } catch (error) {
//       console.error("Decryption error: ", error);
//     }
//   };

//   return (
//     <Layout>
//       {(isEncryptMode) => (
//         <>
//           <Typography variant="h3" gutterBottom>NTRU {isEncryptMode ? 'Encryption' : 'Decryption'}</Typography>
//           <Box sx={{ mb: 4 }}>
//             <Typography variant="h6" gutterBottom>
//               Strength of {isEncryptMode ? 'Encryption' : 'Decryption'}
//             </Typography>
//             <Slider
//               value={strength}
//               onChange={(e, newValue) => setStrength(newValue)}
//               aria-labelledby="encryption-strength-slider"
//               valueLabelDisplay="auto"
//             />
//           </Box>
//           <Box sx={{ mb: 4 }}>
//             <TextField
//               fullWidth
//               multiline
//               rows={6}
//               variant="outlined"
//               value={text}
//               onChange={(e) => setText(e.target.value)}
//               placeholder={`Enter text to ${isEncryptMode ? 'encrypt' : 'decrypt'}`}
//             />
//           </Box>
//           <Button
//             variant="contained"
//             color={isEncryptMode ? "primary" : "secondary"}
//             onClick={isEncryptMode ? handleEncrypt : handleDecrypt}
//           >
//             {isEncryptMode ? 'Encrypt' : 'Decrypt'}
//           </Button>
//           <Box sx={{ mt: 4 }}>
//             <Typography variant="h5" gutterBottom>Result:</Typography>
//             <Typography variant="body1" sx={{ p: 2, border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#f9f9f9' }}>
//               {result}
//             </Typography>
//           </Box>
//         </>
//       )}
//     </Layout>
//   );
// };

// export default NtruPage;
