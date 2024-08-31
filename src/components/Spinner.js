import React from 'react';
import { ClipLoader } from 'react-spinners';

const Spinner = ({ loading=true, size='20px', color='currentColor' }) => {
  return (
    <div className="spinner-container">
      <ClipLoader color={color} loading={loading} size={size} />
    </div>
  );
};

export default Spinner;
