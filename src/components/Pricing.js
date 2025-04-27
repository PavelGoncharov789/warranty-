import React from 'react';
import { 
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  Chip
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: theme.shadows[6]
  }
}));

const services = [
  {
    title: 'Содержание общего имущества',
    description: 'Комплекс работ по поддержанию технического и санитарного состояния общего имущества МКД',
    price: '15.00 руб/м²',
    details: [
      'Уборка мест общего пользования',
      'Вывоз мусора',
      'Техническое обслуживание лифтов',
      'Обслуживание систем вентиляции',
      'Освещение мест общего пользования'
    ]
  },
  {
    title: 'Текущий ремонт',
    description: 'Работы по поддержанию работоспособности конструктивных элементов здания',
    price: '8.50 руб/м²',
    details: [
      'Ремонт кровли',
      'Восстановление фасада',
      'Ремонт подъездов',
      'Устранение протечек',
      'Ремонт инженерных систем'
    ]
  },
  {
    title: 'Капитальный ремонт',
    description: 'Комплекс работ по восстановлению ресурса здания',
    price: 'Индивидуальный расчет',
    details: [
      'Замена лифтового оборудования',
      'Реконструкция кровли',
      'Ремонт фундамента',
      'Замена инженерных коммуникаций',
      'Утепление фасада'
    ]
  },
  {
    title: 'Коммунальные услуги',
    description: 'Обеспечение ресурсоснабжения и расчеты с поставщиками',
    price: 'По тарифам поставщиков',
    details: [
      'Холодное водоснабжение',
      'Горячее водоснабжение',
      'Электроэнергия ОДН',
      'Отопление',
      'Газоснабжение'
    ]
  },
  {
    title: 'Благоустройство территории',
    description: 'Содержание и улучшение придомовой территории',
    price: '5.20 руб/м²',
    details: [
      'Уборка территории',
      'Озеленение',
      'Ремонт дорожного покрытия',
      'Обслуживание детских площадок',
      'Зимняя уборка снега'
    ]
  },
  {
    title: 'Юридическое сопровождение',
    description: 'Правовая поддержка собственников и управляющей компании',
    price: 'Индивидуальный расчет',
    details: [
      'Ведение общего собрания',
      'Подготовка документов',
      'Представительство в суде',
      'Консультации собственников',
      'Работа с должниками'
    ]
  }
];

const additionalServices = [
  {
    name: 'Видеонаблюдение',
    description: 'Установка и обслуживание системы видеонаблюдения',
    price: 'от 500 руб/мес'
  },
  {
    name: 'Консьерж-сервис',
    description: 'Круглосуточное дежурство консьержа в подъезде',
    price: 'от 15000 руб/мес'
  },
  {
    name: 'Охрана территории',
    description: 'Патрулирование территории и контроль доступа',
    price: 'от 20000 руб/мес'
  },
  {
    name: 'Клининг квартир',
    description: 'Уборка квартир по запросу собственников',
    price: 'от 1000 руб/услуга'
  },
  {
    name: 'Установка домофонов',
    description: 'Монтаж и обслуживание домофонных систем',
    price: 'от 3000 руб'
  },
  {
    name: 'Эксплуатация парковки',
    description: 'Организация парковочного пространства',
    price: 'от 50 руб/мес за м²'
  }
];

const Pricing = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
        Тарифы и услуги управляющей компании
      </Typography>
      
      <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 2 }}>
        Основные услуги
      </Typography>
      
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {service.description}
                </Typography>
                <Chip 
                  label={service.price} 
                  color="primary" 
                  variant="outlined" 
                  sx={{ mt: 1, mb: 2 }} 
                />
                <List dense>
                  {service.details.map((detail, i) => (
                    <ListItem key={i} sx={{ py: 0 }}>
                      <ListItemText primary={`• ${detail}`} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
      
      <Typography variant="h5" gutterBottom sx={{ mt: 6, mb: 2 }}>
        Дополнительные услуги
      </Typography>
      
      <TableContainer component={Paper} sx={{ mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: (theme) => theme.palette.primary.main }}>
              <TableCell sx={{ color: 'white' }}>Услуга</TableCell>
              <TableCell sx={{ color: 'white' }}>Описание</TableCell>
              <TableCell align="right" sx={{ color: 'white' }}>Стоимость</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {additionalServices.map((service, index) => (
              <TableRow key={index}>
                <TableCell>{service.name}</TableCell>
                <TableCell>{service.description}</TableCell>
                <TableCell align="right">{service.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <Box sx={{ backgroundColor: (theme) => theme.palette.grey[100], p: 3, borderRadius: 1, mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Примечания:
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="• Все цены указаны с учетом НДС" />
          </ListItem>
          <ListItem>
            <ListItemText primary="• Тарифы могут изменяться в соответствии с решениями общего собрания собственников" />
          </ListItem>
          <ListItem>
            <ListItemText primary="• Подробную информацию можно получить в офисе управляющей компании" />
          </ListItem>
          <ListItem>
            <ListItemText primary="• Скидка 5% предоставляется при оплате за год вперед" />
          </ListItem>
        </List>
      </Box>
      
      <Divider sx={{ my: 4 }} />
      
      <Typography variant="body1" align="center" color="text.secondary">
        Управляющая компания "ДомКом" - надежный партнер в обслуживании вашего дома с 2010 года
      </Typography>
    </Container>
  );
};

export default Pricing;