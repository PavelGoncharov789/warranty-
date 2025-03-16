import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography, Box } from '@mui/material';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3, // Отступ между элементами
        }}
      >
        <Typography component="h1" variant="h4">
          Welcome to the App
        </Typography>
        <Button
          variant="contained"
          fullWidth
          onClick={() => navigate('/login')}
        >
          Go to Login
        </Button>
        <Button
          variant="outlined"
          fullWidth
          onClick={() => navigate('/register')}
        >
          Go to Register
        </Button>
      </Box>
    </Container>
  );
};

export default Home;