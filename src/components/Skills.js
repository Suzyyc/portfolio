import { Box, Heading, Image } from "@chakra-ui/react";

const Skills = () => {
  return (
    <Box sx={{ mt: "10rem", mb: "8rem" }}>
      <Heading sx={{ fontSize: "50px", mb: "1rem" }}>Tech Stack</Heading>
      <Box
        sx={{ display: "flex", gap: "2rem", justifyContent: "space-evenly" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Image
            sx={{
              maxWidth: "80px",
            }}
            src="/img/react.png"
          />{" "}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            React
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Image
            sx={{
              maxWidth: "70px",
            }}
            src="/img/nodejs.png"
          />{" "}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Node JS
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Image
            sx={{
              maxWidth: "80px",
            }}
            src="/img/javascript.png"
          />{" "}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Javascript
          </Box>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", gap: "2rem", justifyContent: "space-evenly" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Image
            sx={{
              maxWidth: "80px",
            }}
            src="/img/html.png"
          />{" "}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            HTML
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Image
            sx={{
              maxWidth: "80px",
            }}
            src="/img/css.png"
          />{" "}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            CSS
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Image
            sx={{
              maxWidth: "80px",
            }}
            src="/img/express.png"
          />{" "}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Express
          </Box>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", gap: "2rem", justifyContent: "space-evenly" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Image
            sx={{
              maxWidth: "70px",
              display: "flex",
              justifyContent: "center",
            }}
            src="/img/mongo.png"
          />{" "}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            MongoDB
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Image
            sx={{
              maxWidth: "80px",
            }}
            src="/img/postgresql.png"
          />{" "}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            PostgreSQL
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Image
            sx={{
              maxWidth: "80px",
            }}
            src="/img/python.png"
          />{" "}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Python
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
