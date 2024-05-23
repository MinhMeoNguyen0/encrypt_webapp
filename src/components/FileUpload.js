import React from 'react';

const FileUpload = ({ onFileChange }) => {
  return (
    <div className="file-upload">
      <input type="file" onChange={onFileChange} />
    </div>
  );
};

export default FileUpload;
