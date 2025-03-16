import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Box,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null); // Состояние для выпадающего меню

  // Обработчик открытия меню
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Обработчик закрытия меню
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* App Bar */}
      <AppBar position="static">
        <Toolbar>
          {/* Логотип компании */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ск10
          </Typography>

          {/* Ссылки на разделы */}
          <Button color="inherit" component={Link} to="/services">
            Услуги
          </Button>
          <Button color="inherit" component={Link} to="/pricing">
            Тарифы
          </Button>
          <Button color="inherit" component={Link} to="/requests">
            Заявки
          </Button>
          <Button color="inherit" component={Link} to="/about">
            О компании
          </Button>

          {/* Аватар пользователя */}
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <Avatar alt="User Avatar" src="/path/to/avatar.png" />
          </IconButton>

          {/* Выпадающее меню */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Данные о договоре</MenuItem>
            <MenuItem onClick={handleMenuClose}>Справочная информация</MenuItem>
            <MenuItem onClick={handleMenuClose}>Данные пользователя</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Основное содержимое страницы */}
      <Box sx={{ padding: 3 }}>
        <Typography variant="h4">Добро пожаловать в личный кабинет!</Typography>
        <Typography variant="body1">
          Здесь вы можете управлять своими услугами, заявками и настройками.
        </Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;