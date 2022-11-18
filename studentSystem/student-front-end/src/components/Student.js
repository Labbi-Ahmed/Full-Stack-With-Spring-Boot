import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Container, Paper, Button } from "@mui/material";

export default function Student() {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [students, setStubents] = useState([]);
  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, address };
    fetch("http://localhost:8080/student/add", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(student),
    }).then(() => {
      setName("");
      setAddress("");
      console.log("new Stdent add");
    });
  };
  useEffect(() => {
    fetch("http://localhost:8080/student/getAll")
      .then((res) => res.json())
      .then((result) => {
        setStubents(result);
      });
  }, [students]);

  return (
    <Container
      component="form"
      sx={{
        "& > :not(style)": { m: 2, width: "50%" },
      }}
      noValidate
      autoComplete="off"
    >
      <Paper elenation={3} style={paperStyle}>
        <h1 style={{ color: "blue" }}>
          <u>Add Student</u>
        </h1>
        <TextField
          style={{ marginBottom: "2rem" }}
          id="outlined-basic"
          label="Student Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          style={{ marginBottom: "2rem" }}
          id="outlined-basic"
          label="Student Adress"
          variant="outlined"
          fullWidth
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <Button variant="contained" color="secondary" onClick={handleClick}>
          Submit
        </Button>
      </Paper>

      <Paper elevation={3} style={paperStyle}>
        {students.map((student) => (
          <Paper
            elevation={6}
            style={{ margin: "10px", padding: "15px", textAlign: "left" }}
            key={student.id}
          >
            Id:{student.id}
            <br />
            Name:{student.name}
            <br />
            Address:{student.address}
          </Paper>
        ))}
      </Paper>
    </Container>
  );
}
