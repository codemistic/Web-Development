import React from "react";
import "./Header.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { TextField, MenuItem } from "@mui/material";
import categories from "../../data/category";
// import { debounce } from "lodash";

const Header = ({ category, setCategory, word, setWord, lightMode }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: lightMode ? "#000" : "#FFFFFF",
      },
      type: lightMode ? "light" : "dark",
    },
  });

  // const handleSearch = debounce((text) => {
  //   setWord(text);
  // }, 500);

  return (
    <div className="Header">
      <span className="title">{word ? word : "Word Search"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            id="filled-basic"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            label="Search a Word"
          />
          <TextField
            select
            label="Language"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select"
          >
            <MenuItem>English</MenuItem>
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
