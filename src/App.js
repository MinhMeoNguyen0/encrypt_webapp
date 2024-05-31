import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AesPage from './pages/AesPage';
// import RsaPage from './pages/RsaPage';
// import NtruPage from './pages/NtruPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/aes" replace />} />
        <Route path="/aes" element={<AesPage />} />
        {/* <Route path="/rsa" element={<RsaPage />} />
        <Route path="/ntru" element={<NtruPage />} /> */}
        {/* Add other routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
