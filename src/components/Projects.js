import { Box, Button, Fade, Heading, Image, SlideFade } from "@chakra-ui/react";
import { useState } from "react";

const Link = ({ label, href, sx }) => {
  return (
    <Button variant={"outline"} sx={sx} as={"a"} href={href} target={"_blank"}>
      {label}
    </Button>
  );
};

const Projects = () => {
  const [showProject, setShowProject] = useState(null);
  const handleHover = (project) => {
    setShowProject(project);
  };

  return (
    <Box sx={{ mt: "14rem" }} id="projects">
      <Heading sx={{ mb: "1rem" }}>PROJECTS</Heading>
      <Box sx={{ display: "flex" }}>
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
                color: "395B64",
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Full Stack MERN application
              <Box>
                <Link
                  href={"http://hydrate-me-ui.herokuapp.com"}
                  label="View project"
                  sx={{ mr: "0.5rem" }}
                />
                <Link
                  href={"https://github.com/Suzyyc/hydrate-me"}
                  label="View GitHub"
                />
              </Box>
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
                color: "395B64",
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Full CRUD application using NodeJS, Express, MongoDB, Bootstrap
              <Box>
                <Link
                  href={"https://skincarejournal.herokuapp.com/login"}
                  label="View project"
                  sx={{ mr: "0.5rem" }}
                />
                <Link
                  href={"https://github.com/Suzyyc/skincare-journal"}
                  label="View GitHub"
                />
              </Box>
            </Box>
          </Fade>
          <Image src="img/skincare.jpg" />
        </Box>
      </Box>

      <Box sx={{ display: "flex" }}>
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
                color: "395B64",
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Interactive game using HTML, CSS and DOM Manipulation
              <Box>
                <Link
                  href={"https://suzyyc.github.io/Tic-Tac-Toe/"}
                  label="View project"
                  sx={{ mr: "0.5rem" }}
                />
                <Link
                  href={"https://github.com/Suzyyc/Tic-Tac-Toe"}
                  label="View GitHub"
                />
              </Box>
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
                color: "395B64",
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Full Stack MERN application
              <Box>
                <Button variant={"outline"} sx={{ mr: "1rem" }}>
                  View project
                </Button>
                <Button variant={"outline"}>View GitHub</Button>
                <Link
                  href={"https://safe-journey-travels.herokuapp.com/"}
                  label="View project"
                  sx={{ mr: "0.5rem" }}
                />
                <Link
                  href={"https://github.com/Suzyyc/project-safe-journey"}
                  label="View GitHub"
                />
              </Box>
            </Box>
          </Fade>
          <Image src="img/journey.jpg" />
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
