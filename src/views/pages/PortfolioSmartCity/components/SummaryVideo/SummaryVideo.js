/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Link as LinkRouter } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Container from 'common/Container';

import SectionFlag from 'common/SectionFlag';
import SectionTitle from 'common/SectionTitle';

const SummaryVideo = () => {
  const theme = useTheme();

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
