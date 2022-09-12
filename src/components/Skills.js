import {
  Box,
  Heading,
  ListItem,
  UnorderedList,
  Image,
  Text,
} from "@chakra-ui/react";
import { mobileMedia } from "../utlis/media";

const Skills = () => {
  return (
    <Box sx={{ mt: "10rem", mb: "8rem" }}>
      <Heading sx={{ fontSize: "50px", mb: "1rem" }}>Tech Stack</Heading>
      <Box sx={{ display: "flex", listStyle: "none" }}>
        <Box>
          <UnorderedList>
            <ListItem>CSS</ListItem>
            <ListItem>Python</ListItem>

            <ListItem>Express</ListItem>
            <ListItem>MongoDB</ListItem>
            <ListItem>PostgreSQL</ListItem>
          </UnorderedList>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "2rem" }}>
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
              borderRadius: "1rem",
              [mobileMedia]: { py: "4rem" },
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
              borderRadius: "1rem",
              [mobileMedia]: { py: "4rem" },
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
              borderRadius: "1rem",
              [mobileMedia]: { py: "4rem" },
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
              borderRadius: "1rem",
              [mobileMedia]: { py: "4rem" },
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
      </Box>
    </Box>
  );
};

export default Skills;
