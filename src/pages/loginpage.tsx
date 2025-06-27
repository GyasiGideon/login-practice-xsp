import { Box, TextField, Button } from '@mui/material';
import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
 //Using local host for testing purposes
    try {
      const res = await fetch('https://booking-app-production-554b.up.railway.app/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log(data);
      alert('Login successfully');
    } catch (err) {
      console.error('Error:', err);
      alert('Login failed');
    }
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#f3f4f6"
    >
      <Box
        component="form"
        onSubmit={handleRegister}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          p: 4,
          bgcolor: 'white',
          borderRadius: 2,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          width: 300,
        }}
      >
        <TextField
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
// this code defines a simple registration page using React and Material-UI. 
// it includes a form with email and password fields, and a button to submit