/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Container from 'common/Container';

import { Hero, Benefits, SignUp } from './components';

const Contact = () => {
  const theme = useTheme();

  return (
    <Container>
      <Box>
        <Container>
          <SignUp />
        </Container>
      </Box>
    </Container>
  );
};

export default Contact;
