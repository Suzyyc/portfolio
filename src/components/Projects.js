import { Box, Button, Fade, Heading, Image, SlideFade } from "@chakra-ui/react";
import { useState } from "react";

const Projects = () => {
  const [showProject, setShowProject] = useState(null);
  const handleHover = (project) => {
    setShowProject(project);
  };

  return (
    <Box>
      <Heading>PROJECTS</Heading>

      <Box
        sx={{ position: "relative" }}
        onMouseEnter={() => {
          handleHover("hydrate");
        }}
        onMouseLeave={() => {
          handleHover(null);
        }}
      >
        <Fade in={showProject === "hydrate"}>
          <Box
            sx={{
              bgColor: "rgba(255, 255, 255, 0.5)",
              position: "absolute",
              width: "100%",
              height: "100%",
              top: "0",
              left: "0",
            }}
          >
            Full Stack MERN application
            <Button variant={"outline"}>View project</Button>
          </Box>
        </Fade>
        <Image src="img/hydrate.jpg" />
      </Box>

      <Box
        sx={{ position: "relative" }}
        onMouseEnter={() => {
          handleHover("skincare");
        }}
        onMouseLeave={() => {
          handleHover(null);
        }}
      >
        <Fade in={showProject === "skincare"}>
          <Box
            sx={{
              bgColor: "rgba(255, 255, 255, 0.5)",
              position: "absolute",
              width: "100%",
              height: "100%",
              top: "0",
              left: "0",
            }}
          >
            Full CRUD application using NodeJS, Express, MongoDB, Bootstrap
            <Button variant={"outline"}>View project</Button>
          </Box>
        </Fade>
        <Image src="img/skincare.jpg" />
      </Box>

      <Box
        sx={{ position: "relative" }}
        onMouseEnter={() => {
          handleHover("tic-tac-toe");
        }}
        onMouseLeave={() => {
          handleHover(null);
        }}
      >
        <Fade in={showProject === "tic-tac-toe"}>
          <Box
            sx={{
              bgColor: "rgba(255, 255, 255, 0.5)",
              position: "absolute",
              width: "100%",
              height: "100%",
              top: "0",
              left: "0",
            }}
          >
            Interactive game using HTML, CSS and DOM Manipulation
            <Button variant={"outline"}>View project</Button>
          </Box>
        </Fade>
        <Image src="img/tictactoe.jpg" />
      </Box>

      <Box
        sx={{ position: "relative" }}
        onMouseEnter={() => {
          handleHover("tic-tac-toe");
        }}
        onMouseLeave={() => {
          handleHover(null);
        }}
      >
        <Fade in={showProject === "tic-tac-toe"}>
          <Box
            sx={{
              bgColor: "rgba(255, 255, 255, 0.5)",
              position: "absolute",
              width: "100%",
              height: "100%",
              top: "0",
              left: "0",
            }}
          >
            Full Stack MERN application
            <Button variant={"outline"}>View project</Button>
          </Box>
        </Fade>
        <Image src="img/journey.jpg" />
      </Box>
    </Box>
  );
};

export default Projects;
