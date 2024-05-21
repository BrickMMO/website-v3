import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const faqs = [
  {
    title: 'Cameras',
    subtitle: (
      <Box>
        <Typography
          component="p"
          color="textSecondary"
          variant={'h6'}
          fontWeight={400}
          marginBottom={2}
        >
          LEGO® does not make cameras, but they are crucial to many BrickMMO
          systems including GPS, Streetview, Places, and more.
        </Typography>
        <Typography
          component="p"
          color="textSecondary"
          variant={'h6'}
          fontWeight={400}
          marginBottom={2}
        >
          BrickMMO uses the{' '}
          <Link to="https://pixycam.com/pixy2/" underline="none">
            Pixy2
          </Link>{' '}
          robot vision sensor. This sensor comes available with a pre-installed
          firmware that speaks the LEGO® sensor protocol and a MINDSTORMS®
          compatible RJ12 cable
        </Typography>
      </Box>
    ),
  },
  {
    title: 'Electricity',
    subtitle: (
      <Box>
        <Typography
          component="p"
          color="textSecondary"
          variant={'h6'}
          fontWeight={400}
          marginBottom={2}
        >
          LEGO® hubs need electricity and mobile robots need electricity but
          must be free of cables.
        </Typography>
        <Typography
          component="p"
          color="textSecondary"
          variant={'h6'}
          fontWeight={400}
          marginBottom={2}
        >
          BrickMMO has developed inductive charging adaptors compatible with
          LEGO® SPIKE™ and MINDSTORMS® hubs. View the Inductive Charging system
          for more information.
        </Typography>
      </Box>
    ),
  },
  {
    title: 'Cables',
    subtitle: (
      <Box>
        <Typography
          component="p"
          color="textSecondary"
          variant={'h6'}
          fontWeight={400}
          marginBottom={2}
        >
          We need cables. And we need long cables. Using standard RJ12
          connectors and 6P6C cables we can create custom length MINDSTORMS®
          compatible cables. View the Custom Cables system for more information.
        </Typography>
      </Box>
    ),
  },
];
