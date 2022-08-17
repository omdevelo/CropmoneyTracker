import React from "react";
import { Grid, Paper, Avatar, FormControlLabel, Checkbox, Button, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

function Login() {
  const paperStyle = {
    padding: 10,
    height: "65vh",
    width: 300,
    margin: "70px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign in</h2>
        </Grid>
        <TextField
          variant="filled"
          label="Username"
          placeholder="Enter username"
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
        <FormControlLabel
          control={<Checkbox name="checkedB" color="success" />}
          label="Remember Me"
        ></FormControlLabel>
        <Button style={{backgroundColor:"#1bbd7e",margin:"8px 0"}} variant="contained" type="submit" fullWidth>Sign In</Button>
        <Typography style={{marginBottom:"4px"}}><Link to="#">Forgot password ?</Link></Typography>
        <Typography>Do you have an account  <Link to="/signup">Sign Up</Link></Typography>
      </Paper>
    </Grid>
  );
}

export default Login;
