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
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { Link } from 'react-router-dom';

const About = () => {
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
      <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
        <Toolbar>
          {/* Логотип компании */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SK10
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
      <Box sx={{ padding: 4 }}>
        {/* Заголовок */}
        <Typography variant="h3" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
          Добро пожаловать в SK10!
        </Typography>
        <Typography variant="h5" align="center" sx={{ color: '#666', mb: 4 }}>
          Мы строим будущее вместе с вами.
        </Typography>

        {/* Карточки с информацией */}
        <Grid container spacing={4}>
          {/* Карточка 1: О компании */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image="https://via.placeholder.com/400x200" // Замените на реальное изображение
                alt="О компании"
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  О компании
                </Typography>
                <Typography variant="body1">
                  SK10 — это современная строительная компания, специализирующаяся на жилых и коммерческих проектах. Мы работаем с 2010 года и успешно завершили более 100 проектов.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Карточка 2: Наши услуги */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image="https://via.placeholder.com/400x200" // Замените на реальное изображение
                alt="Наши услуги"
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Наши услуги
                </Typography>
                <Typography variant="body1">
                  Мы предлагаем полный спектр строительных услуг: от проектирования до сдачи объекта под ключ. Наши специалисты работают с использованием современных технологий и материалов.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Карточка 3: Почему мы? */}
          <Grid item xs={12}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Почему выбирают SK10?
                </Typography>
                <Typography variant="body1">
                  - Высокое качество строительства.<br />
                  - Индивидуальный подход к каждому клиенту.<br />
                  - Соблюдение сроков и бюджета.<br />
                  - Гарантия на все виды работ.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Кнопка для связи */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button
            variant="contained"
            size="large"
            sx={{ backgroundColor: '#1976d2', '&:hover': { backgroundColor: '#115293' } }}
          >
            Связаться с нами
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default About;