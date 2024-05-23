import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { encryptText, decryptText } from './redux/actions';
import FileUpload from './components/FileUpload';
import TextInput from './components/TextInput';
import ResultDisplay from './components/ResultDisplay';
import './styles.css';

function App() {
  const dispatch = useDispatch();
  const [fileContent, setFileContent] = useState('');
  const [algorithm, setAlgorithm] = useState('Base64');

  const handleTextChange = (text) => {
    setFileContent(text);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setFileContent(e.target.result);
    };
    reader.readAsText(file);
  };

  const handleEncrypt = () => {
    dispatch(encryptText(fileContent, algorithm));
  };

  const handleDecrypt = () => {
    dispatch(decryptText(fileContent, algorithm));
  };

  return (
    <div className="container">
      <h1 className="title">Encryption Decryption Tool</h1>
      <div className="input-section">
        <TextInput onTextChange={handleTextChange} />
        <FileUpload onFileChange={handleFileChange} />
      </div>
      <div className="algorithm-selection">
        <label>
          Select Algorithm:
          <select value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
            <option value="Base64">Base64</option>
            <option value="AES">AES</option>
            <option value="RSA">RSA</option>
          </select>
        </label>
      </div>
      <div className="action-buttons">
        <button onClick={handleEncrypt} className="btn btn-primary">Encrypt</button>
        <button onClick={handleDecrypt} className="btn btn-secondary">Decrypt</button>
      </div>
      <ResultDisplay />
    </div>
  );
}

export default App;
