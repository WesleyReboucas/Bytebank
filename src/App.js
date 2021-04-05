import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeLight, ThemeDark } from "./Components/UI/Themes";

import Header from "./Components/Header";
import Container from "./Components/Container";

import { GlobalStyle } from "./Components/GlobalStyle";
import { BtnTheme } from "./Components/UI";
import SwitcherTheme from "./Components/SwitcherTheme";

function App() {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme((theme) => !theme);
  };
  return (
    <>
      <ThemeProvider theme={theme ? ThemeLight : ThemeDark}>
        <GlobalStyle />
        <BtnTheme onClick={toggleTheme}>
          <SwitcherTheme theme={theme} />
        </BtnTheme>
        <Header />
        <Container />
      </ThemeProvider>
    </>
  );
}

export default App;
