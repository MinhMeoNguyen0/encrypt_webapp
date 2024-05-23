import React from 'react';
import { useSelector } from 'react-redux';

const ResultDisplay = () => {
  const encryptionResult = useSelector((state) => state.encryption.result);
  const decryptionResult = useSelector((state) => state.decryption.result);
  const loading = useSelector((state) => state.encryption.loading || state.decryption.loading);
  const error = useSelector((state) => state.encryption.error || state.decryption.error);

  return (
    <div className="result-display">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <h2>Encryption Result:</h2>
      <p>{encryptionResult}</p>
      <h2>Decryption Result:</h2>
      <p>{decryptionResult}</p>
    </div>
  );
};

export default ResultDisplay;
