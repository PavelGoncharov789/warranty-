import React from 'react';
import { Typography, Box } from '@mui/material';

const Pricing = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4">Тарифы</Typography>
      <Typography variant="body1">
        Здесь вы можете ознакомиться с нашими тарифами.
      </Typography>
    </Box>
  );
};

export default Pricing;