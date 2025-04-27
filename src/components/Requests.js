import React, { useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
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
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  IconButton,
  Collapse
} from '@mui/material';
import { 
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Add as AddIcon,
  CheckCircle as CheckCircleIcon,
  Pending as PendingIcon,
  Cancel as CancelIcon,
  Construction as ConstructionIcon
} from '@mui/icons-material';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

// Список доступных услуг
const availableServices = [
  { id: 1, name: 'Уборка подъезда', price: 1500, category: 'Содержание' },
  { id: 2, name: 'Ремонт лифта', price: 8500, category: 'Ремонт' },
  { id: 3, name: 'Замена лампочек', price: 300, category: 'Содержание' },
  { id: 4, name: 'Устранение протечки', price: 2500, category: 'Ремонт' },
  { id: 5, name: 'Озеленение территории', price: 5000, category: 'Благоустройство' },
  { id: 6, name: 'Ремонт детской площадки', price: 12000, category: 'Благоустройство' },
  { id: 7, name: 'Установка домофона', price: 8000, category: 'Безопасность' },
  { id: 8, name: 'Видеонаблюдение', price: 15000, category: 'Безопасность' },
  { id: 9, name: 'Консьерж-сервис', price: 20000, category: 'Сервис' },
  { id: 10, name: 'Клининг квартиры', price: 2500, category: 'Сервис' },
];

// Статусы заявок
const statuses = {
  pending: { text: 'В ожидании', color: 'warning', icon: <PendingIcon /> },
  in_progress: { text: 'В работе', color: 'info', icon: <ConstructionIcon /> },
  completed: { text: 'Завершено', color: 'success', icon: <CheckCircleIcon /> },
  canceled: { text: 'Отменено', color: 'error', icon: <CancelIcon /> }
};

// Моковые данные заявок
const initialRequests = [
  {
    id: 1,
    address: 'ул. Ленина, д. 10, кв. 25',
    services: [
      { id: 3, name: 'Замена лампочек', price: 300 },
      { id: 4, name: 'Устранение протечки', price: 2500 }
    ],
    createdDate: new Date(2023, 5, 15),
    dueDate: new Date(2023, 5, 20),
    status: 'completed',
    description: 'Протечка в ванной комнате и перегоревшие лампочки в подъезде'
  },
  {
    id: 2,
    address: 'ул. Гагарина, д. 5, кв. 12',
    services: [
      { id: 1, name: 'Уборка подъезда', price: 1500 }
    ],
    createdDate: new Date(2023, 5, 18),
    dueDate: new Date(2023, 5, 25),
    status: 'in_progress',
    description: 'Необходима генеральная уборка подъезда после ремонта'
  },
  {
    id: 3,
    address: 'ул. Пушкина, д. 15, кв. 7',
    services: [
      { id: 5, name: 'Озеленение территории', price: 5000 },
      { id: 6, name: 'Ремонт детской площадки', price: 12000 }
    ],
    createdDate: new Date(2023, 5, 20),
    dueDate: new Date(2023, 6, 15),
    status: 'pending',
    description: 'Благоустройство двора по программе городского озеленения'
  },
  {
    id: 4,
    address: 'ул. Советская, д. 30, кв. 44',
    services: [
      { id: 7, name: 'Установка домофона', price: 8000 }
    ],
    createdDate: new Date(2023, 4, 10),
    dueDate: new Date(2023, 4, 30),
    status: 'canceled',
    description: 'Отмена установки домофона по решению собрания жильцов'
  }
];

const Requests = () => {
  const [requests, setRequests] = useState(initialRequests);
  const [expandedCompleted, setExpandedCompleted] = useState(false);
  const [newRequest, setNewRequest] = useState({
    address: '',
    services: [],
    dueDate: null,
    description: ''
  });
  const [selectedService, setSelectedService] = useState('');

  // Фильтрация заявок по статусу
  const openRequests = requests.filter(req => req.status !== 'completed' && req.status !== 'canceled');
  const completedRequests = requests.filter(req => req.status === 'completed' || req.status === 'canceled');

  // Добавление услуги в новую заявку
  const addService = () => {
    if (!selectedService) return;
    
    const service = availableServices.find(s => s.id === parseInt(selectedService));
    if (!service) return;
    
    setNewRequest(prev => ({
      ...prev,
      services: [...prev.services, { id: service.id, name: service.name, price: service.price }]
    }));
    
    setSelectedService('');
  };

  // Удаление услуги из новой заявки
  const removeService = (id) => {
    setNewRequest(prev => ({
      ...prev,
      services: prev.services.filter(s => s.id !== id)
    }));
  };

  // Создание новой заявки
  const submitRequest = () => {
    if (!newRequest.address || newRequest.services.length === 0 || !newRequest.dueDate) {
      alert('Пожалуйста, заполните все обязательные поля');
      return;
    }
    
    const newId = Math.max(...requests.map(r => r.id)) + 1;
    
    const request = {
      id: newId,
      address: newRequest.address,
      services: newRequest.services,
      createdDate: new Date(),
      dueDate: newRequest.dueDate,
      status: 'pending',
      description: newRequest.description
    };
    
    setRequests([...requests, request]);
    
    // Сброс формы
    setNewRequest({
      address: '',
      services: [],
      dueDate: null,
      description: ''
    });
  };

  // Подсчет суммы услуг
  const calculateTotal = (services) => {
    return services.reduce((sum, service) => sum + service.price, 0);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
          Заявки потребителей
        </Typography>

        {/* Форма создания новой заявки */}
        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Создать новую заявку
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Адрес"
                fullWidth
                value={newRequest.address}
                onChange={(e) => setNewRequest({...newRequest, address: e.target.value})}
                required
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="service-select-label">Услуга</InputLabel>
                <Select
                  labelId="service-select-label"
                  value={selectedService}
                  label="Услуга"
                  onChange={(e) => setSelectedService(e.target.value)}
                >
                  {availableServices.map(service => (
                    <MenuItem key={service.id} value={service.id}>
                      {service.name} ({service.price} руб.)
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Button 
                variant="contained" 
                startIcon={<AddIcon />} 
                onClick={addService}
                disabled={!selectedService}
                fullWidth
              >
                Добавить услугу
              </Button>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <DatePicker
                label="Срок выполнения"
                value={newRequest.dueDate}
                onChange={(date) => setNewRequest({...newRequest, dueDate: date})}
                minDate={new Date()}
                renderInput={(params) => <TextField {...params} fullWidth required />}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                label="Описание проблемы"
                multiline
                rows={3}
                fullWidth
                value={newRequest.description}
                onChange={(e) => setNewRequest({...newRequest, description: e.target.value})}
              />
            </Grid>
            
            {/* Выбранные услуги */}
            {newRequest.services.length > 0 && (
              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                  Выбранные услуги:
                </Typography>
                <List dense>
                  {newRequest.services.map(service => (
                    <ListItem 
                      key={service.id}
                      secondaryAction={
                        <IconButton edge="end" onClick={() => removeService(service.id)}>
                          <CancelIcon color="error" />
                        </IconButton>
                      }
                    >
                      <ListItemText 
                        primary={`${service.name} - ${service.price} руб.`}
                      />
                    </ListItem>
                  ))}
                </List>
                <Typography variant="h6" sx={{ mt: 1 }}>
                  Итого: {calculateTotal(newRequest.services)} руб.
                </Typography>
              </Grid>
            )}
            
            <Grid item xs={12}>
              <Button 
                variant="contained" 
                color="primary" 
                size="large" 
                onClick={submitRequest}
                disabled={!newRequest.address || newRequest.services.length === 0 || !newRequest.dueDate}
                fullWidth
              >
                Отправить заявку
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {/* Открытые заявки */}
        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          Активные заявки
        </Typography>
        
        {openRequests.length === 0 ? (
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Нет активных заявок
          </Typography>
        ) : (
          <TableContainer component={Paper} sx={{ mb: 4 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: 'primary.main' }}>
                  <TableCell sx={{ color: 'white' }}>ID</TableCell>
                  <TableCell sx={{ color: 'white' }}>Адрес</TableCell>
                  <TableCell sx={{ color: 'white' }}>Услуги</TableCell>
                  <TableCell sx={{ color: 'white' }}>Сумма</TableCell>
                  <TableCell sx={{ color: 'white' }}>Срок выполнения</TableCell>
                  <TableCell sx={{ color: 'white' }}>Статус</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {openRequests.map(request => (
                  <TableRow key={request.id}>
                    <TableCell>{request.id}</TableCell>
                    <TableCell>{request.address}</TableCell>
                    <TableCell>
                      <List dense>
                        {request.services.map(service => (
                          <ListItem key={service.id} sx={{ py: 0 }}>
                            <ListItemText primary={`• ${service.name}`} />
                          </ListItem>
                        ))}
                      </List>
                    </TableCell>
                    <TableCell>{calculateTotal(request.services)} руб.</TableCell>
                    <TableCell>
                      {format(request.dueDate, 'dd.MM.yyyy')}
                      {request.dueDate < new Date() && (
                        <Chip 
                          label="Просрочено" 
                          color="error" 
                          size="small" 
                          sx={{ ml: 1 }} 
                        />
                      )}
                    </TableCell>
                    <TableCell>
                      <Chip 
                        label={statuses[request.status].text}
                        color={statuses[request.status].color}
                        icon={statuses[request.status].icon}
                        variant="outlined"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {/* Завершенные заявки */}
        <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => setExpandedCompleted(!expandedCompleted)}>
          <Typography variant="h5" gutterBottom>
            Завершенные заявки
          </Typography>
          {expandedCompleted ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Box>
        
        <Collapse in={expandedCompleted}>
          {completedRequests.length === 0 ? (
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Нет завершенных заявок
            </Typography>
          ) : (
            <TableContainer component={Paper} sx={{ mb: 4 }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: 'grey.800' }}>
                    <TableCell sx={{ color: 'white' }}>ID</TableCell>
                    <TableCell sx={{ color: 'white' }}>Адрес</TableCell>
                    <TableCell sx={{ color: 'white' }}>Услуги</TableCell>
                    <TableCell sx={{ color: 'white' }}>Сумма</TableCell>
                    <TableCell sx={{ color: 'white' }}>Дата завершения</TableCell>
                    <TableCell sx={{ color: 'white' }}>Статус</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {completedRequests.map(request => (
                    <TableRow key={request.id}>
                      <TableCell>{request.id}</TableCell>
                      <TableCell>{request.address}</TableCell>
                      <TableCell>
                        <List dense>
                          {request.services.map(service => (
                            <ListItem key={service.id} sx={{ py: 0 }}>
                              <ListItemText primary={`• ${service.name}`} />
                            </ListItem>
                          ))}
                        </List>
                      </TableCell>
                      <TableCell>{calculateTotal(request.services)} руб.</TableCell>
                      <TableCell>{format(request.dueDate, 'dd.MM.yyyy')}</TableCell>
                      <TableCell>
                        <Chip 
                          label={statuses[request.status].text}
                          color={statuses[request.status].color}
                          icon={statuses[request.status].icon}
                          variant="outlined"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Collapse>
      </Container>
    </LocalizationProvider>
  );
};

export default Requests;