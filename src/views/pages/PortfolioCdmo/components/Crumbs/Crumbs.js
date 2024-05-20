/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';

import Typography from '@mui/material/Typography';

import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';

const Crumbs = () => {
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
      <Typography>Bio 2024</Typography>
    </Breadcrumbs>
  );
};

export default Crumbs;
