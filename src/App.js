import './App.css';
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import * as React from 'react';
import { useState } from 'react';


function DataTable({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Simple table">
        <TableHead>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function App() {

  const [formData, setFromData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })

  const [formDataList, setFormDataList] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    
    setFromData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormDataList([...formDataList, formData]);
    console.log(formData);
    console.log(formDataList)
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">React Live</Typography>
          {/* Add navigation links or other components here */}
        </Toolbar>
      </AppBar>


      <Stack direction="row" >
        <Container sx={{ p: 2 }}>

          <h2>Fill the form</h2>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2} direction="row" sx={{ m: 1 }}>
              <TextField onChange={handleInputChange} name="firstName" fullWidth sx={{ m: 1 }} item xs={6} id="outlined-basic" label="First Name" variant="outlined" />
              <TextField onChange={handleInputChange} name="lastName" fullWidth sx={{ m: 1 }} item xs={6} id="outlined-basic" label="Last Name" variant="outlined" />
            </Stack>
            <Stack spacing={2} sx={{ m: 1 }}>
              <TextField onChange={handleInputChange} name="email" fullWidth sx={{ m: 1 }} item id="outlined-basic" label="Email" variant="outlined" />
              <TextField onChange={handleInputChange} name="phone" sx={{ m: 1 }} item id="outlined-basic" label="Phone" variant="outlined" />
            </Stack>
            <Button sx={{ m: 1 }} variant="outlined" color="secondary" type="submit">Register</Button>
          </form>
        </Container>
        <Container sx={{ p: 2, m: 1 }}>
          <h2>Live Form Data</h2>
          <DataTable data={formDataList}></DataTable>

        </Container>
      </Stack>
    </div>
  )
}

export default App;
