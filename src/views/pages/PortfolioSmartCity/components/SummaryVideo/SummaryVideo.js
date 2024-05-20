/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import Box from '@mui/material/Box';

const SummaryVideo = () => {
  return (
    <Box>
      <iframe
        src="https://www.youtube.com/embed/6RAtoigjsoY?si=Pzu8A6ex4oDI_PbI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        style={{
          width: '100%',
          aspectRatio: '16/9',
        }}
      ></iframe>
    </Box>
  );
};

export default SummaryVideo;
