import React from 'react';
import { Typography, Box } from '@mui/material';

const Requests = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4">Заявки</Typography>
      <Typography variant="body1">
        Здесь вы можете управлять своими заявками.
      </Typography>
    </Box>
  );
};

export default Requests;