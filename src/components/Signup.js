import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  FormControlLabel,
  Checkbox,
  Button
} from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import TextField from "@mui/material/TextField";

function Signup() {
  const paperStyle = {
    padding: 10,
    height: "90vh",
    width: 300,
    margin: "70px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
           <AddBoxIcon />
          </Avatar>
          <h2>Sign Up</h2>
          <p>Please fill this form to create an account</p>
        </Grid>
        <TextField
          variant="filled"
          label="Name"
          placeholder="Enter Name"
          fullWidth
          required
        />
        <TextField
          variant="filled"
          label="Email"
          placeholder="Enter Email"
          fullWidth
          required
        />

        <TextField
          variant="filled"
          label="Phone Number"
          placeholder="Enter Phone Number"
          fullWidth
          required
        />
        <TextField
          variant="filled"
          label="Password"
          type="password"
          placeholder="Enter password"
          fullWidth
          required
        />

        <TextField
          variant="filled"
          label="Confirm password"
          type="password"
          placeholder="Enter Confirm password"
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="success" />}
          label="I accept the terms and conditions"
        ></FormControlLabel>
        <Button
          style={{ backgroundColor: "#1bbd7e", margin: "8px 0" }}
          variant="contained"
          type="submit"
          fullWidth
        >
          Sign Up
        </Button>
      </Paper>
    </Grid>
  );
}

export default Signup;
