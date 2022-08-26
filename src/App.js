import "./App.css";
import { Box, ChakraProvider, Container } from "@chakra-ui/react";

import Header from "./components/Header";
import Home from "./components/Home";
import SideProfile from "./components/SideProfile";

const App = () => {
  return (
    <ChakraProvider>
      <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
        <Box sx={{ overflow: "scroll", width: "50%" }}>
          <Header />
          <Home />
        </Box>
        <SideProfile />
      </Box>
    </ChakraProvider>
  );
};

export default App;
