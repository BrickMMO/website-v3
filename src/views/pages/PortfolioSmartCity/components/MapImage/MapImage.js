/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import Box from '@mui/material/Box';

const MapImage = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <img
        style={{ width: '100%', maxWidth: '700px', margin: 'auto' }}
        alt="The Smart City Map."
        src="/images/portfolio/city-map.png"
      />
    </Box>
  );
};

export default MapImage;
