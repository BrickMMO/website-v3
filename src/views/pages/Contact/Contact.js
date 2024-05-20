/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import Box from '@mui/material/Box';
import Container from 'common/Container';

import { SignUp } from './components';

const Contact = () => {
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
