// import "./App.css";
import { Box, ChakraProvider, Container } from "@chakra-ui/react";

import Header from "./components/Header";
import Home from "./components/Home";
import SideProfile from "./components/SideProfile";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import theme from "./theme";
import { mobileMedia } from "./utlis/media";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          overflow: "hidden",
          [mobileMedia]: {
            flexDirection: "column",
            overflow: "visible",
            pt: "53px",
          },
        }}
      >
        <Box
          sx={{
            overflow: "scroll",
            width: "50%",
            px: "1.5rem",
            position: "relative",
            pt: "14rem",
            [mobileMedia]: { width: "100%", overflow: "visible", pt: "3rem" },
          }}
        >
          <Container>
            <Home />
            <About />
            <Projects />
            <Skills />
          </Container>
        </Box>
        <SideProfile />
      </Box>
    </ChakraProvider>
  );
};

export default App;
