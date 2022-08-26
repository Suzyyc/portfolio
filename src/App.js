import "./App.css";
import { Box, ChakraProvider, Container } from "@chakra-ui/react";

import Header from "./components/Header";
import Home from "./components/Home";
import SideProfile from "./components/SideProfile";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <ChakraProvider>
      <div>
        <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
          <Box sx={{ overflow: "scroll", width: "50%" }}>
            <Header />
            <Home />
            <About />
            <Projects />
            <Skills />
          </Box>
          <SideProfile />
        </Box>
      </div>
    </ChakraProvider>
  );
};

export default App;
