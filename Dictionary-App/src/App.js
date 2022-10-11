// import logo from './logo.svg';
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Header from "./components/Header/Header";
import Definations from "./components/Definations/Definations";
import { alpha, styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Switch from "@mui/material/Switch";

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const [lightMode, setLightMode] = useState(true);

  const DarkMode = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: grey[500],
      "&:hover": {
        backgroundColor: alpha(grey[500], theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: grey[500],
    },
  }));

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      console.log(data);
      setMeanings(data.data);
      // console.log(meanings);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    dictionaryApi();
    // eslint-disable-next-line
  }, [category, word]);

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        backgroundColor: lightMode ? "#fff" : "#282c34",
        color: lightMode ? "#282c34" : "#fff",
        transition: "all 0.5s linear",
      }}
    >
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 15,
            justifyContent: "space-evenly",
          }}
        >
          <span>{lightMode ? "Light" : "Dark"} Mode: </span>
          <DarkMode
            checked={lightMode}
            onChange={() => setLightMode(!lightMode)}
          />
        </div>
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          lightMode={lightMode}
        />
        {meanings && (
          <Definations
            category={category}
            word={word}
            meanings={meanings}
            lightMode={lightMode}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
