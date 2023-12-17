import React from "react";
import { TextField, Button } from "@mui/material";

const WeatherForm = () => {
  return (
    <div>
      <h1>Brittany's Weather App</h1>
      <form>
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <Button variant="outlined">Submit</Button>
      </form>
    </div>
  );
};

export default WeatherForm;
