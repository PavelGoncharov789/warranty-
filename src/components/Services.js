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

const Services = () => {
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
            SK10-Премиум
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
          Наши услуги
        </Typography>
        <Typography variant="h5" align="center" sx={{ color: '#666', mb: 4 }}>
          Мы предлагаем широкий спектр услуг для вашего комфорта.
        </Typography>

        {/* Карточки с услугами */}
        <Grid container spacing={4}>
          {/* Карточка 1: Управление недвижимостью */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image="https://via.placeholder.com/400x200" // Замените на реальное изображение
                alt="Управление недвижимостью"
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Управление недвижимостью
                </Typography>
                <Typography variant="body1">
                  Полный комплекс услуг по управлению жилой и коммерческой недвижимостью, включая техническое обслуживание и контроль аренды.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Карточка 2: Техническое обслуживание */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image="https://via.placeholder.com/400x200" // Замените на реальное изображение
                alt="Техническое обслуживание"
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Техническое обслуживание
                </Typography>
                <Typography variant="body1">
                  Круглосуточное техническое обслуживание зданий и инженерных систем, включая ремонт и профилактику.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Карточка 3: Юридические услуги */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image="https://via.placeholder.com/400x200" // Замените на реальное изображение
                alt="Юридические услуги"
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Юридические услуги
                </Typography>
                <Typography variant="body1">
                  Консультации и сопровождение по юридическим вопросам, связанным с недвижимостью, арендой и управлением.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Карточка 4: Клининг и уборка */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image="https://via.placeholder.com/400x200" // Замените на реальное изображение
                alt="Клининг и уборка"
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Клининг и уборка
                </Typography>
                <Typography variant="body1">
                  Профессиональная уборка помещений, включая ежедневную, генеральную и послеремонтную уборку.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Карточка 5: Безопасность */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image="https://via.placeholder.com/400x200" // Замените на реальное изображение
                alt="Безопасность"
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Безопасность
                </Typography>
                <Typography variant="body1">
                  Организация систем безопасности, включая видеонаблюдение, контроль доступа и охрану территории.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Карточка 6: Ландшафтный дизайн */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image="https://via.placeholder.com/400x200" // Замените на реальное изображение
                alt="Ландшафтный дизайн"
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Ландшафтный дизайн
                </Typography>
                <Typography variant="body1">
                  Проектирование и обслуживание ландшафтов, включая озеленение, уход за растениями и установку систем полива.
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
            Заказать услугу
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;