import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Container, Typography, Button } from "@mui/material";
import { styled } from "@emotion/styled";

// Создание тем
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    text: {
      primary: "#000000",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#bb86fc",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

// Стилизованная кнопка
const StyledButton = styled(Button)`
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 8px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Container style={{ textAlign: "center", paddingTop: "50px" }}>
        <Typography variant="h4" gutterBottom>
          {darkMode ? "Тёмная тема" : "Светлая тема"}
        </Typography>
        <StyledButton variant="contained" color="primary" onClick={toggleTheme}>
          Переключить тему
        </StyledButton>
      </Container>
    </ThemeProvider>
  );
}

export default App;
