import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import SectionTitle from 'common/SectionTitle';

import { faqs } from './data.js';

const ExceptionGroupItem = ({ items }) => {
  return (
    <Box>
      {items.map((item) => (
        <Box>
          <Typography
            component="p"
            color="textSecondary"
            variant={'h4'}
            marginBottom={1}
          >
            {item.title}
          </Typography>
          {item.subtitle}
        </Box>
      ))}
    </Box>
  );
};

ExceptionGroupItem.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

const Rules = () => {
  return (
    <Box id="rules">
      <Box marginBottom={4}>
        <SectionTitle>Smart City Rules</SectionTitle>
        <Typography
          component="p"
          color="textSecondary"
          variant={'h6'}
          fontWeight={400}
          marginBottom={2}
        >
          Unless absolutely impossible, everything in BrickMMO is built with
          100% LEGO® bricks. Each decision to integrate a non LEGO® brand
          component was made with great difficulty!
        </Typography>
        <Typography
          component="p"
          color="textSecondary"
          variant={'h6'}
          fontWeight={400}
          marginBottom={2}
        >
          The following are the only non LEGO® brand components permitted:
        </Typography>
      </Box>
      <ExceptionGroupItem items={faqs} />
    </Box>
  );
};

export default Rules;
