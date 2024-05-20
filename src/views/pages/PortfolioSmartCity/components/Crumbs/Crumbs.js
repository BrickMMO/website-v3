/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Link as LinkRouter } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Container from 'common/Container';

const Crumbs = () => {
  const theme = useTheme();

  return (
    <Breadcrumbs
      marginTop={4}
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <Link
        underline="hover"
        to="/portfolio"
        component={LinkRouter}
        color="primary"
      >
        Portfolio
      </Link>
      <Typography>Smart City</Typography>
    </Breadcrumbs>
  );
};

export default Crumbs;
