import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
} from "@mui/material";
import React from "react";
import "./Filter.css";

const Filter = ({ model, setModel, price, setPrice }) => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">По модели</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        name="radio-buttons-group"
        value={model}
        onChange={e => setModel(e.target.value)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}>
        <FormControlLabel value="Cclass" control={<Radio />} label="C-Класс" />
        <FormControlLabel value="Eclass" control={<Radio />} label="E-Класс" />
        <FormControlLabel value="Sclass" control={<Radio />} label="S-Класс" />
        <FormControlLabel value="Gclass" control={<Radio />} label="G-Класс" />
        <FormControlLabel value="AMG" control={<Radio />} label="AMG" />
        <FormControlLabel
          value="all"
          control={<Radio />}
          label="Все автомобили"
        />
      </RadioGroup>
      <FormLabel id="demo-radio-buttons-group-label">По ценам</FormLabel>
      <Slider
        sx={{ color: "black" }}
        getAriaLabel={() => "Temperature range"}
        value={price}
        onChange={e => setPrice(e.target.value)}
        valueLabelDisplay="auto"
        min={0}
        max={200000}
      />
    </FormControl>
  );
};

export default Filter;
