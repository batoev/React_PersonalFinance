import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleClick = () => {
    setGreeting(`Hello, ${name}!`);
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Введите ваше имя
      </Typography>
      <TextField
        label="Имя"
        variant="outlined"
        value={name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        style={{ marginTop: '20px' }}
      >
        Показать приветствие
      </Button>
      {greeting && (
        <Typography variant="h5" style={{ marginTop: '20px' }}>
          {greeting}
        </Typography>
      )}
    </Container>
  );
}

export default App;