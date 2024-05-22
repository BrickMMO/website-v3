/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Link as LinkRouter } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Link from '@mui/material/Link';
import Container from 'common/Container';

import SectionFlag from 'common/SectionFlag';
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
        <SectionFlag></SectionFlag>
        <SectionTitle>Smart City</SectionTitle>
        <Typography
          component="p"
          variant={'h6'}
          fontWeight={400}
          marginBottom={2}
        >
          The Smart City Development Platform provides students with a sandbox
          to apply thier skills and gain industry experience while mainatining
          the comfort of the classroom and fellow studnets. Read the{' '}
          <Link component={LinkRouter} href="https://wic.codeadam.ca">
            WIC Whitepaper
          </Link>{' '}
          for more information.
        </Typography>
        <Typography
          component="p"
          variant={'h6'}
          fontWeight={400}
          marginBottom={2}
        >
          Students develop systems from conception to finished products inside
          the Smart City. This includes autonomous driving cars, a working GPS
          system, a crypto currency, an AI generated radio station, and more.
        </Typography>
        <Typography
          component="p"
          variant={'h6'}
          fontWeight={400}
          marginBottom={2}
        >
          The city is designed to encourage collaboration between students from
          multiple programs and between institutions.
        </Typography>
      </Container>
    </Box>
  );
};

export default Details;
