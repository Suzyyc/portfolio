import "./App.css";
import { Box, ChakraProvider, Container } from "@chakra-ui/react";

import Header from "./components/Header";
import Home from "./components/Home";
import SideProfile from "./components/SideProfile";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ChakraProvider>
      <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
        <Box sx={{ overflow: "scroll", width: "50%", mx: "1.5rem" }}>
          <Header />
          <Home />
          <About />
          <Projects />
          <Skills />
          <Footer />
        </Box>
        <SideProfile />
      </Box>
    </ChakraProvider>
  );
};

export default App;
