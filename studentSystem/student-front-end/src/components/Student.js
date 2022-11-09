import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';

export default function Student() {

    const paperStyle={padding:'50px 20px', width:600,margin:'20px auto'}

    return (
    <Container
        component="form"
        sx={{
            '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
    ><Paper elenation={3} style = {paperStyle}>
        <TextField id="outlined-basic" label="Student Name" variant="outlined" />
        <TextField id="outlined-basic" label="Student Adress" variant="outlined" />
    </Paper>
    </Container>
    );
}