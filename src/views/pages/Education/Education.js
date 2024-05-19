import React from 'react';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Container from 'common/Container';

import {
  Hero,
  Counter,
  Wic,
  Reason,
  Technology,
  Topics,
  Programs,
} from './components';

const Education = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container>
          <Hero />
        </Container>
      </Box>
      <Box>
        <Container>
          <Counter />
        </Container>
      </Box>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <Reason />
        </Container>
      </Box>
      <Box>
        <Container>
          <Technology />
        </Container>
      </Box>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <Topics />
        </Container>
      </Box>
      <Box>
        <Container>
          <Programs />
        </Container>
      </Box>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <Wic />
        </Container>
      </Box>
    </Box>
  );
};

export default Education;
