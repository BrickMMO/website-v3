/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Link as LinkRouter } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Link from '@mui/material/Link';
import Container from 'common/Container';

import SectionTitle from 'common/SectionTitle';

const Details = () => {
  const theme = useTheme();

  return (
    <Box
      borderRadius={1.5}
      sx={{
        position: 'relative',
        backgroundColor: theme.palette.alternate.main,
      }}
    >
      <Container paddingX={{ xs: 2, sm: 6, md: 12 }}>
        <SectionTitle>Company Logos</SectionTitle>
        <Typography
          component="p"
          variant={'h6'}
          fontWeight={400}
          marginBottom={2}
        >
          Coverting company logos to LEGO® bricks using a greebling technique.
          Brands include our collaboration partners, sponsors of the{' '}
          <Link
            underline="hover"
            to="/portfolio-bio-2024"
            component={LinkRouter}
            color="primary"
          >
            Bio 2024
          </Link>{' '}
          project, and other popular brands.
        </Typography>
        <Typography
          component="p"
          variant={'h6'}
          fontWeight={400}
          marginBottom={2}
        >
          Greeble is defined as "small pieces of detailing added to break up the
          surface of an object and add visual interest" ~ Wikipedia. LEGO®
          greebling is a common building technique used in the LEGO® community.
          To keep our greebling consistant we have some rules in a{' '}
          <Link
            component={LinkRouter}
            to="https://github.com/BrickMMO/logo-greeble"
          >
            logo-greeble
          </Link>{' '}
          GitHub repo.
        </Typography>
      </Container>
    </Box>
  );
};

export default Details;
